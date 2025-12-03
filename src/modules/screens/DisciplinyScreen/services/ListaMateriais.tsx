import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type Materia = {
  id: number;
  title: string;
};

const MATERIAS_KEY = "lista_materias";

export const criarMateria = async (
  nova: Materia,
  materias: Materia[],
  setMaterias: React.Dispatch<React.SetStateAction<Materia[]>>,
  setMateriaSelecionada: React.Dispatch<React.SetStateAction<Materia | null>>,
  setModalVisivel: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const atualizadas = [...materias, nova];
  setMaterias(atualizadas);
  await salvarMaterias(atualizadas);
  setMateriaSelecionada(nova);
  setModalVisivel(true);
};

export const salvarMaterias = async (lista: Materia[]) => {
  await AsyncStorage.setItem(MATERIAS_KEY, JSON.stringify(lista));
};

export const abrirMateria = (
  materia: Materia,
  setMateriaSelecionada: React.Dispatch<React.SetStateAction<Materia | null>>,
  setModalVisivel: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setMateriaSelecionada(materia);
  setModalVisivel(true);
};

export const carregarMaterias = async (setMaterias: React.Dispatch<React.SetStateAction<Materia[]>>) => {
  const json = await AsyncStorage.getItem(MATERIAS_KEY);
  const lista = json ? JSON.parse(json) : [];
  setMaterias(lista);
};

export const excluirMateriaComConfirmacao = (
  materiaSelecionada: Materia | null,
  materias: Materia[],
  setMaterias: React.Dispatch<React.SetStateAction<Materia[]>>,
  setMateriaSelecionada: React.Dispatch<React.SetStateAction<Materia | null>>,
  setModalVisivel: React.Dispatch<React.SetStateAction<boolean>>,
  excluirMateria: () => Promise<void>
) => {
  if (!materiaSelecionada) return;

  Alert.alert(
    "Confirmar exclusão",
    `Deseja realmente excluir a matéria "${materiaSelecionada.title}"?`,
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Confirmar",
        style: "destructive",
        onPress: async () => {
          const atualizadas = materias.filter(m => m.id !== materiaSelecionada.id);
          setMaterias(atualizadas);
          await salvarMaterias(atualizadas);
          await excluirMateria();
          setMateriaSelecionada(null);
          setModalVisivel(false);
        },
      },
    ]
  );
};