import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  notifyOneHour,
  notifyNewSession,
  notifyStreak,
  notifyMetaCompleta,
} from "../service/notifications/NotificationService";

type AgendaItem = { materia: string; horario: string };
type MetasStatus = { feitas: number; total: number };
type ProgressoStatus = { atual: number; meta: number };

type AppData = {
  agenda: AgendaItem[];
  disciplinas: string[];
  metas: MetasStatus;
  progresso: ProgressoStatus;
  tempoHoje: number;
  sequenciaDias: number;
  totalEstudo: number;
};

interface AppContextProps {
  data: AppData;
  updateData: (newData: Partial<AppData>) => Promise<void>;
}

const defaultData: AppData = {
  agenda: [],
  disciplinas: ["Java", "Banco de Dados", "Docker"],
  metas: { feitas: 0, total: 3 },
  progresso: { atual: 0, meta: 10 },
  tempoHoje: 0,
  sequenciaDias: 0,
  totalEstudo: 0,
};

const STORAGE_KEY = "@MeuAppData";

export const AppContext = createContext<AppContextProps>({
  data: defaultData,
  updateData: async () => {},
});

// =================================================================
// PROVIDER
// =================================================================

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<AppData>(defaultData);
  const prevData = useRef<AppData>(defaultData);
  const isLoaded = useRef(false);

  // -------------------------------
  // 1) Carregar dados do AsyncStorage
  // -------------------------------
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: AppData = JSON.parse(saved);
        setData(parsed);
        prevData.current = parsed;
      }
      isLoaded.current = true;
    })();
  }, []);

  // -------------------------------
  // 2) Detectar mudanças e disparar notificações
  // -------------------------------
  useEffect(() => {
    if (!isLoaded.current) return;

    const old = prevData.current;
    const d = data;

    // ⏳ 1h de estudo
    if (d.tempoHoje >= 60 && old.tempoHoje < 60) {
      notifyOneHour();
    }

    // 🏆 Meta concluída
    if (d.metas.feitas > old.metas.feitas && d.metas.feitas === d.metas.total) {
      notifyMetaCompleta();
    }

    // 🔥 Sequência de dias
    if (d.sequenciaDias > old.sequenciaDias) {
      notifyStreak(d.sequenciaDias);
    }

    prevData.current = d;
  }, [data]);

  // -------------------------------
  // 3) Atualizar estado + salvar no AsyncStorage
  // -------------------------------
  const updateData = async (newData: Partial<AppData>) => {
    let updated = { ...data, ...newData };

    // Atualizar totalEstudo
    if (typeof newData.tempoHoje === "number") {
      const diff = newData.tempoHoje - data.tempoHoje;
      if (diff > 0) updated.totalEstudo = (data.totalEstudo || 0) + diff;
    }

    // 📚 Nova sessão adicionada na agenda
    if (newData.agenda && newData.agenda.length > data.agenda.length) {
      const novaSessao = newData.agenda[newData.agenda.length - 1].materia;
      notifyNewSession(novaSessao);
    }

    setData(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => useContext(AppContext);
