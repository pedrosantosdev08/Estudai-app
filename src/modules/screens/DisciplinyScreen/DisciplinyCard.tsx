import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Alert } from "react-native";
import { Appbar, Card, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles/styles";
import MateriaForm from "./components/MateriaForm";
import MaterialModal from "./components/MaterialModal";
import { Materia, useMateriais } from "./services/UseMaterial";

export default function DisciplinyCard() {
  const {
    materias,
    criarMateria,
    excluirMateria,
  } = useMateriais();

  const [materiaSelecionada, setMateriaSelecionada] = useState<Materia | null>(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  const handleCriarMateria = async (title: string) => {
    const nomeNormalizado = title.trim().toLowerCase();
    const existe = materias.some(m => m.title.trim().toLowerCase() === nomeNormalizado);
    if (existe) {
      Alert.alert("Já existe uma matéria com esse nome.");
      return;
    }
    const nova = await criarMateria(title);
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
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: async () => {
            await excluirMateria(materiaSelecionada.id);
            setMateriaSelecionada(null);
            setModalVisivel(false);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
              colors={["#1E293B", "#1E293B00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.background}
            />

      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Content title="Minhas Matérias 📚" color="#F1F5F9" />
      </Appbar.Header>

      <MateriaForm onCriar={handleCriarMateria} />

      <FlatList
        data={materias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAbrirMateria(item)}>
            <Card style={styles.card}>
              <Card.Content>
                <Text variant="bodyLarge">{item.title}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={{ marginTop: 16 }}>Nenhuma matéria criada ainda.</Text>}
      />

      <MaterialModal
        visible={modalVisivel}
        materia={materiaSelecionada ?? undefined}
        onClose={() => setModalVisivel(false)}
        onRequestDelete={handleExcluirMateria}
      />
    </View>
  );
}