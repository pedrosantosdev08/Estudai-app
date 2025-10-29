import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, FlatList, TouchableOpacity, Alert } from "react-native";
import { Appbar, Card, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useMateriais } from "@/src/Screens/DisciplinyScreen/001UseMaterial";
import { styles } from "@/src/Screens/TelaPrincipal/TelaPrincipalStyle";
import MateriaForm from "@/src/Screens/DisciplinyScreen/100MateriaForm";
import MaterialModal from "@/src/Screens/DisciplinyScreen/200MaterialModal";




type Materia = {
  id: number;
  title: string;
};

const MATERIAS_KEY = "lista_materias";

const DisciplinyCard = () => {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [materiaSelecionada, setMateriaSelecionada] = useState<Materia | null>(null);
  const { excluirMateria } = useMateriais(materiaSelecionada?.id); // usa o id da matéria selecionada
  const [modalVisivel, setModalVisivel] = useState(false);

  useEffect(() => {
    const carregarMaterias = async () => {
      const json = await AsyncStorage.getItem(MATERIAS_KEY);
      const lista = json ? JSON.parse(json) : [];
      setMaterias(lista);
    };
    carregarMaterias();
  }, []);

  const salvarMaterias = async (lista: Materia[]) => {
    await AsyncStorage.setItem(MATERIAS_KEY, JSON.stringify(lista));
  };

  const handleCriarMateria = async (nova: Materia) => {
    const atualizadas = [...materias, nova];
    setMaterias(atualizadas);
    await salvarMaterias(atualizadas);
    setMateriaSelecionada(nova);
    setModalVisivel(true);
  };

  const handleAbrirMateria = (materia: Materia) => {
    setMateriaSelecionada(materia);
    setModalVisivel(true);
  };

  const handleExcluirMateria = () => {
    if (!materiaSelecionada) return;

    Alert.alert(
      "Confirmar exclusão",
      `Deseja realmente excluir a matéria "${materiaSelecionada.title}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: async () => {
            const atualizadas = materias.filter(m => m.id !== materiaSelecionada.id);
            setMaterias(atualizadas);
            await salvarMaterias(atualizadas);
            await excluirMateria(); // apaga conteúdo vinculado
            setMateriaSelecionada(null);
            setModalVisivel(false);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6200ee", "transparent"]}
        style={styles.background} />

      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Content title="Minhas Matérias 📚" color="#6200ee" />
      </Appbar.Header>

      <MateriaForm onCriar={handleCriarMateria} materias={materias} />

      <FlatList
        data={materias}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAbrirMateria(item)}>
            <Card style={styles.card}>
              <Card.Content>
                <Text variant="bodyLarge">{item.title}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 16 }}>Nenhuma matéria criada ainda.</Text>
        }
      />

      <MaterialModal
        visible={modalVisivel}
        card={materiaSelecionada ?? undefined}
        onClose={() => setModalVisivel(false)}
        onDelete={handleExcluirMateria}
      />
    </View>
  );
};

export default DisciplinyCard;