import { useState } from "react";
import { useNotification } from "../../../providers/NotificationProvider";

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

  const { notificarConquista } = useNotification();

  // ⏰ Formatar tempo
  const formatarTempo = (horas: number) => `${horas}h`;

  // 🕒 Adicionar tempo
  function handleAdicionarTempo() {
    setTempoHoje((prev) => {
      const novoTempo = prev + 1;
      if (novoTempo >= 2) {
        // meta de 2h por dia
        notificarConquista("🔥 Você atingiu sua meta diária de 2h!");
      }
      return novoTempo;
    });
  }

  // 🏆 Concluir meta
  function handleConcluirMeta() {
    setMetas((prev) => {
      const feitas = prev.feitas + 1;
      if (feitas === prev.total) {
        notificarConquista("🏆 Todas as metas da semana concluídas!");
      } else {
        notificarConquista("✅ Meta concluída! Continue assim 💪");
      }
      return { ...prev, feitas };
    });
  }

  // 🔥 Sequência de dias
  function incrementarSequencia(p0: number) {
    setSequenciaDias((prev) => {
      const novaSeq = prev + 1;
      if (novaSeq % 5 === 0) {
        notificarConquista(`🔥 Você manteve uma sequência de ${novaSeq} dias!`);
      }
      return novaSeq;
    });
  }

  // 📚 Adicionar sessão de estudo
  function handleAddSessao() {
    if (!novaSessao.trim()) return;
    setAgenda([...agenda, { materia: novaSessao, horario: "00:00" }]);
    notificarConquista("📚 Nova sessão de estudo adicionada!");
    setNovaSessao("");
    setShowAddSessao(false);
  }

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
  };
}
