import React, { useState, useEffect } from "react";
import { View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import {
    Appbar,
    Card,
    Text,
    Button,
    FAB,
    ProgressBar,
    TextInput,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialForm from "@/components/DisciplinyCard/MaterialForm";
import MaterialModal from "@/components/DisciplinyCard/MaterialModal";
import styles from "./styles";

type Materia = {
    id: number;
    title: string;
};

const MATERIAS_KEY = "lista_materias";

const DisciplinyCard = () => {
    const [materias, setMaterias] = useState<Materia[]>([]);
    const [materiaSelecionada, setMateriaSelecionada] = useState<Materia | null>(null);
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

    const handleExcluirMateria = async () => {
        if (!materiaSelecionada) return;
        const atualizadas = materias.filter(m => m.id !== materiaSelecionada.id);
        setMaterias(atualizadas);
        await salvarMaterias(atualizadas);
        setMateriaSelecionada(null);
        setModalVisivel(false);
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#6200ee", "transparent"]}
                style={styles.background} />

            <Appbar.Header style={styles.header} mode="center-aligned">
                <Appbar.Content title="Minhas Matérias 📚" color="#6200ee" />
            </Appbar.Header>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <MaterialForm onCriar={handleCriarMateria} />

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
            </ScrollView>
        </View>
    );
};

export default DisciplinyCard;