import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../styles/styles";

export default function MateriaForm({
  onCriar,
}: {
  onCriar: (title: string) => void;
}) {
  const [titulo, setTitulo] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);

  const criar = () => {
    if (titulo.trim() === "") return;
    onCriar(titulo.trim());
    setTitulo("");
    setMostrarInput(false);
  };

  return (
    <View style={{ padding: 16 }}>
      {mostrarInput ? (
        <>
          <TextInput
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Digite o nome da matéria"
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <Button
              mode="contained"
              onPress={criar}
              style={{ flex: 1 }}
              disabled={titulo.trim() === ""}
            >
              Criar
            </Button>
            <Button
              mode="outlined"
              onPress={() => {
                setTitulo("");
                setMostrarInput(false);
              }}
              style={{ flex: 1 }}
            >
              Cancelar
            </Button>
          </View>
        </>
      ) : (
        <Button mode="contained" onPress={() => setMostrarInput(true)}>
          Nova Matéria
        </Button>
      )}
    </View>
  );
}
