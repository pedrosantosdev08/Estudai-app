import React, { useState, useEffect } from "react";
import { View, TextInput, Alert } from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Materia = {
    id: number;
    title: string;
};

const MATERIAS_KEY = "lista_materias";

const NovaMateriaForm = ({ onCriar }: { onCriar: (materia: Materia) => void }) => {
    const [titulo, setTitulo] = useState("");
    const [materiasSalvas, setMateriasSalvas] = useState<Materia[]>([]);

    useEffect(() => {
        const carregarMaterias = async () => {
            const json = await AsyncStorage.getItem(MATERIAS_KEY);
            const lista = json ? JSON.parse(json) : [];
            setMateriasSalvas(lista);
        };
        carregarMaterias();
    }, []);

    const salvarMaterias = async (lista: Materia[]) => {
        await AsyncStorage.setItem(MATERIAS_KEY, JSON.stringify(lista));
    };

    const criarMateria = () => {
        const nomeExiste = materiasSalvas.some(m => m.title.trim().toLowerCase() === titulo.trim().toLowerCase());

        if (nomeExiste) {
            Alert.alert("Nome duplicado", "Já existe uma matéria com esse nome.");
            return;
        }

        const novaMateria: Materia = {
            id: Date.now(),
            title: titulo.trim(),
        };

        const atualizadas = [...materiasSalvas, novaMateria];
        setMateriasSalvas(atualizadas);
        salvarMaterias(atualizadas);
        onCriar(novaMateria);
        setTitulo("");
    };

    return (
        <View style={{ padding: 16 }}>
            <Text variant="titleMedium" style={{ marginBottom: 8 }}>
                Criar nova matéria
            </Text>
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
            <Button mode="contained" onPress={criarMateria} disabled={titulo.trim() === ""}>
                Criar
            </Button>
        </View>
    );
};

export default NovaMateriaForm;