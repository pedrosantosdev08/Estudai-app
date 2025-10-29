import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { Button } from "react-native-paper";

type Materia = {
    id: number;
    title: string;
};

const MateriaForm = ({
    onCriar,
    materias,
}: {
    onCriar: (materia: Materia) => void;
    materias: Materia[];
}) => {
    const [titulo, setTitulo] = useState("");
    const [mostrarInput, setMostrarInput] = useState(false);

    const criarMateria = () => {
        const nomeNormalizado = titulo.trim().toLowerCase();
        const nomeExiste = materias.some(
            m => m.title.trim().toLowerCase() === nomeNormalizado
        );

        if (nomeExiste) {
            Alert.alert("Já existe uma matéria com esse nome.");
            return;
        }

        const novaMateria: Materia = {
            id: Date.now(),
            title: titulo.trim(),
        };

        onCriar(novaMateria);
        setTitulo("");
        setMostrarInput(false);
    };

    const handleCancelar = () => {
        setTitulo("");
        setMostrarInput(false);
    };

    const handleBotaoCriar = () => {
        if (!mostrarInput) {
            setMostrarInput(true);
        } else if (titulo.trim() !== "") {
            criarMateria();
        }
    };

    return (
        <View style={{ padding: 16 }}>
            {mostrarInput ? (
                <>
                    <TextInput
                        value={titulo}
                        onChangeText={setTitulo}
                        placeholder="Digite o nome da matéria"
                        style={{
                            borderWidth: 1,
                            borderColor: "#ccc",
                            borderRadius: 6,
                            padding: 8,
                            marginBottom: 12,
                        }}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 8 }}>
                        <Button
                            mode="contained"
                            onPress={handleBotaoCriar}
                            disabled={titulo.trim() === ""}
                            style={{ flex: 1 }}
                        >
                            Criar
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={handleCancelar}
                            style={{ flex: 1 }}
                        >
                            Cancelar
                        </Button>
                    </View>
                </>
            ) : (
                <Button mode="contained" onPress={handleBotaoCriar}>
                    Nova Matéria
                </Button>
            )}
        </View>
    );
};

export default MateriaForm;