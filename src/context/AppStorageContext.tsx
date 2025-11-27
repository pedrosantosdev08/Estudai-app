import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Tipos de cada parte do estado
type AgendaItem = {
  materia: string;
  horario: string;
};

type MetasStatus = {
  feitas: number;
  total: number;
};

type AppData = {
  agenda: { materia: string; horario: string }[];
  disciplinas: string[];
  metas: { feitas: number; total: number };
  progresso: { atual: number; meta: number };
  tempoHoje: number;   // ⬅ novo
  sequenciaDias: number; // ⬅ novo
};


// Tipagem do contexto
interface AppContextProps {
  data: AppData;
  updateData: (newData: Partial<AppData>) => void;
}

const defaultData: AppData = {
  agenda: [
    { materia: "Java", horario: "08:00" },
    { materia: "Banco de Dados", horario: "10:00" },
  ],
  disciplinas: ["Java", "Banco de Dados", "Docker"],
  metas: { feitas: 0, total: 3 },
  progresso: { atual: 4, meta: 10 },
  tempoHoje: 0, // ⬅ novo
  sequenciaDias: 0, // ⬅ novo
};


const STORAGE_KEY = "@MeuAppData";

export const AppContext = createContext<AppContextProps>({
  data: defaultData,
  updateData: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<AppData>(defaultData);

  // Carrega do storage ao iniciar
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) setData(JSON.parse(saved));
    })();
  }, []);

  // Atualiza dados + salva no storage
  const updateData = async (newData: Partial<AppData>) => {
    const updated = { ...data, ...newData };
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
