import { useState, useEffect } from "react";
import { Alert } from "react-native";

export function TelaPrincipalLogic() {
  const [sequenciaDias, setSequenciaDias] = useState(7);

  // tempoHoje em minutos
  const [tempoHoje, setTempoHoje] = useState(150);

  const [disciplinas, setDisciplinas] = useState(["Matemática", "História"]);
  const [disciplinasAtivas, setDisciplinasAtivas] = useState(8);
  const [metas, setMetas] = useState({ feitas: 12, total: 20 });
  const [progressoSemana, setProgressoSemana] = useState({ atual: 18, meta: 25 });
  const [agenda, setAgenda] = useState([
    { materia: "Matemática - Cálculo I", horario: "14:00 - 15:30" },
    { materia: "História - Revolução Industrial", horario: "16:00 - 17:00" },
  ]);
  const [novaSessao, setNovaSessao] = useState("");
  const [novaDisciplina, setNovaDisciplina] = useState("");
  const [showAddSessao, setShowAddSessao] = useState(false);
  const [showAddDisciplina, setShowAddDisciplina] = useState(false);

  // --- Função para formatar tempo ---
  const formatarTempo = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${horas}h ${mins > 0 ? `${mins}min` : ""}`;
  };

  // --- Adicionar nova sessão ---
  const handleAddSessao = () => {
    if (!novaSessao.trim()) {
      Alert.alert("Erro", "Digite o nome da sessão antes de adicionar.");
      return;
    }
    setAgenda([...agenda, { materia: novaSessao, horario: "A definir" }]);
    setNovaSessao("");
    setShowAddSessao(false);
  };

  // --- Adicionar disciplina ---
  const handleAddDisciplina = () => {
    if (!novaDisciplina.trim()) {
      Alert.alert("Erro", "Digite o nome da disciplina antes de adicionar.");
      return;
    }
    setDisciplinas([...disciplinas, novaDisciplina]);
    setDisciplinasAtivas(disciplinasAtivas + 1);
    setNovaDisciplina("");
    setShowAddDisciplina(false);
  };

  // --- Concluir meta ---
  const handleConcluirMeta = () => {
    if (metas.feitas < metas.total) {
      setMetas({ ...metas, feitas: metas.feitas + 1 });
      Alert.alert("Boa!", "Meta concluída 🎯");
    } else {
      Alert.alert("Parabéns!", "Você completou todas as metas!");
    }
  };

  // --- Adicionar tempo de estudo ---
  const handleAdicionarTempo = () => {
    setTempoHoje((prev) => prev + 60); // +1 hora (60 min)
    setProgressoSemana((prev) => ({
      ...prev,
      atual: prev.atual + 1,
    }));
  };

  // --- Verifica se a meta semanal foi atingida ---
  useEffect(() => {
    if (progressoSemana.atual >= progressoSemana.meta) {
      Alert.alert(
        "🎉 Meta concluída!",
        "Você atingiu sua meta semanal de estudos. Continue assim!"
      );
    }
  }, [progressoSemana.atual]);

  return {
    sequenciaDias,
    setSequenciaDias,
    tempoHoje,
    setTempoHoje,
    formatarTempo,
    disciplinas,
    setDisciplinas,
    disciplinasAtivas,
    metas,
    setMetas,
    progressoSemana,
    setProgressoSemana,
    agenda,
    setAgenda,
    novaSessao,
    setNovaSessao,
    novaDisciplina,
    setNovaDisciplina,
    showAddSessao,
    setShowAddSessao,
    showAddDisciplina,
    setShowAddDisciplina,
    handleAddSessao,
    handleAddDisciplina,
    handleConcluirMeta,
    handleAdicionarTempo,
  };
}
