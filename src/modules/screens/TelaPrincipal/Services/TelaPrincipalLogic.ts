import { useState, useCallback } from "react";

export function TelaPrincipalLogic() {
  const [sequenciaDias, setSequenciaDias] = useState(0);
  const [tempoHoje, setTempoHoje] = useState(0);
  const [disciplinasAtivas] = useState(3);
  const [metas, setMetas] = useState({ feitas: 0, total: 3 });

  const [agenda, setAgenda] = useState([
    { materia: "Java", horario: "08:00" },
    { materia: "Banco de Dados", horario: "10:00" },
  ]);

  const [showAddSessao, setShowAddSessao] = useState(false);
  const [novaSessao, setNovaSessao] = useState("");

  const [progressoSemana, setProgressoSemana] = useState({
    atual: 4,
    meta: 10,
  });

  // ⏰ Formatar tempo
  const formatarTempo = useCallback((horas: number) => `${horas}h`, []);

  // 🕒 Adicionar tempo
  const handleAdicionarTempo = useCallback(() => {
    setTempoHoje((prev) => prev + 1);
  }, []);

  // 🏆 Concluir meta
  const handleConcluirMeta = useCallback(() => {
    setMetas((prev) => ({ ...prev, feitas: prev.feitas + 1 }));
  }, []);

  // 🔥 Sequência de dias
  const incrementarSequencia = useCallback(() => {
    setSequenciaDias((prev) => prev + 1);
  }, []);

  // 📚 Adicionar sessão de estudo
  const handleAddSessao = useCallback(() => {
    const trimmed = novaSessao.trim();
    if (!trimmed) return;

    setAgenda((prev) => [
      ...prev,
      { materia: trimmed, horario: "00:00" },
    ]);

    setNovaSessao("");
    setShowAddSessao(false);
  }, [novaSessao]);

  return {
    sequenciaDias,
    setSequenciaDias: incrementarSequencia,
    tempoHoje,
    formatarTempo,
    handleAdicionarTempo,
    disciplinasAtivas,

    metas,
    handleConcluirMeta,

    agenda,
    handleAddSessao,

    showAddSessao,
    setShowAddSessao,

    novaSessao,
    setNovaSessao,

    progressoSemana,
    setProgressoSemana,
  };
}
