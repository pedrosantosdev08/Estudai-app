import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Conteudo = {
    textos: string[];
    imagens: string[];
    videos: string[];
    audios: string[];
};

const STORAGE_KEY = "materiais_por_id";

export const useMateriais = (cardId?: number) => {
    const [materiaisPorId, setMateriaisPorId] = useState<Record<number, Conteudo>>({});

    const conteudoAtual = cardId ? materiaisPorId[cardId] ?? {
        textos: [],
        imagens: [],
        videos: [],
        audios: [],
    } : null;

    useEffect(() => {
        const carregar = async () => {
            try {
                const json = await AsyncStorage.getItem(STORAGE_KEY);
                const dados = json ? JSON.parse(json) : {};
                setMateriaisPorId(dados);
            } catch (error) {
                console.error("Erro ao carregar materiais:", error);
            }
        };
        carregar();
    }, []);

    useEffect(() => {
        if (cardId && !materiaisPorId[cardId]) {
            const atualizados = {
                ...materiaisPorId,
                [cardId]: { textos: [], imagens: [], videos: [], audios: [] },
            };
            setMateriaisPorId(atualizados);
            salvarMateriais(atualizados);
        }
    }, [cardId]);

    const salvarMateriais = async (data: Record<number, Conteudo>) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error("Erro ao salvar materiais:", error);
        }
    };

    const atualizarConteudo = (novo: Partial<Conteudo>) => {
        if (!cardId) return;
        const atualizados = {
            ...materiaisPorId,
            [cardId]: {
                ...materiaisPorId[cardId],
                ...novo,
            },
        };
        setMateriaisPorId(atualizados);
        salvarMateriais(atualizados);
    };

    const excluirMateria = async () => {
        if (!cardId) return;
        const copia = { ...materiaisPorId };
        delete copia[cardId];
        setMateriaisPorId(copia);
        await salvarMateriais(copia);
    };

    return {
        conteudoAtual,
        atualizarConteudo,
        excluirMateria,
    };
};