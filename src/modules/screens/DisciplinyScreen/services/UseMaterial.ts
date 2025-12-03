import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Conteudo = {
    textos: string[];
    imagens: string[]; // uris
    videos: string[];  // uris
    audios: string[];  // uris
};

export type Materia = {
    id: number;
    title: string;
};

const MATERIAS_KEY = "lista_materias";
const MATERIA_MATERIAIS_KEY = "materiais_por_id";

export const useMateriais = () => {
    const [materias, setMaterias] = useState<Materia[]>([]);
    const [materiaisPorId, setMateriaisPorId] = useState<Record<number, Conteudo>>({});

    // carregar materiais + conteúdos
    useEffect(() => {
        const carregar = async () => {
            try {
                const jsonMat = await AsyncStorage.getItem(MATERIAS_KEY);
                const jsonMatPorId = await AsyncStorage.getItem(MATERIA_MATERIAIS_KEY);

                setMaterias(jsonMat ? JSON.parse(jsonMat) : []);
                setMateriaisPorId(jsonMatPorId ? JSON.parse(jsonMatPorId) : {});
            } catch (err) {
                console.error("Erro ao carregar materias/materiais:", err);
            }
        };
        carregar();
    }, []);

    const salvarMaterias = useCallback(async (lista: Materia[]) => {
        try {
            await AsyncStorage.setItem(MATERIAS_KEY, JSON.stringify(lista));
        } catch (err) {
            console.error("Erro ao salvar materias:", err);
        }
    }, []);

    const salvarMateriaisPorId = useCallback(async (data: Record<number, Conteudo>) => {
        try {
            await AsyncStorage.setItem(MATERIA_MATERIAIS_KEY, JSON.stringify(data));
        } catch (err) {
            console.error("Erro ao salvar materiais por id:", err);
        }
    }, []);

    // --- CRUD Matérias ---
    const criarMateria = useCallback(
        async (title: string) => {
            const nova: Materia = { id: Date.now(), title: title.trim() };
            const atualizadas = [...materias, nova];
            setMaterias(atualizadas);
            await salvarMaterias(atualizadas);

            // inicializar conteúdo vazio para a nova matéria
            const atualizadosMateriais = {
                ...materiaisPorId,
                [nova.id]: { textos: [], imagens: [], videos: [], audios: [] },
            };
            setMateriaisPorId(atualizadosMateriais);
            await salvarMateriaisPorId(atualizadosMateriais);

            return nova;
        },
        [materias, materiaisPorId, salvarMaterias, salvarMateriaisPorId]
    );

    const excluirMateria = useCallback(
        async (id: number) => {
            const atualizadas = materias.filter((m) => m.id !== id);
            setMaterias(atualizadas);
            await salvarMaterias(atualizadas);

            // remover conteúdos vinculados
            const copia = { ...materiaisPorId };
            delete copia[id];
            setMateriaisPorId(copia);
            await salvarMateriaisPorId(copia);
        },
        [materias, materiaisPorId, salvarMaterias, salvarMateriaisPorId]
    );

    // --- Conteúdo por matéria ---
    const getConteudo = useCallback(
        (id?: number) => {
            if (!id) return null;
            return materiaisPorId[id] ?? { textos: [], imagens: [], videos: [], audios: [] };
        },
        [materiaisPorId]
    );

    const atualizarConteudo = useCallback(
        async (id: number, novo: Partial<Conteudo>) => {
            const atual = materiaisPorId[id] ?? { textos: [], imagens: [], videos: [], audios: [] };
            const atualizados = {
                ...materiaisPorId,
                [id]: { ...atual, ...novo },
            };
            setMateriaisPorId(atualizados);
            await salvarMateriaisPorId(atualizados);
        },
        [materiaisPorId, salvarMateriaisPorId]
    );

    const adicionarTexto = useCallback((id: number, texto: string) => {
        const atual = getConteudo(id)!;
        const novos = [...atual.textos, texto];
        return atualizarConteudo(id, { textos: novos });
    }, [getConteudo, atualizarConteudo]);

    const removerTexto = useCallback((id: number, index: number) => {
        const atual = getConteudo(id)!;
        const novos = atual.textos.filter((_, i) => i !== index);
        return atualizarConteudo(id, { textos: novos });
    }, [getConteudo, atualizarConteudo]);

    const adicionarMidia = useCallback((id: number, campo: keyof Conteudo, uri: string) => {
        const atual = getConteudo(id)!;
        const novos = [...(atual[campo] as string[]), uri];
        return atualizarConteudo(id, { [campo]: novos } as Partial<Conteudo>);
    }, [getConteudo, atualizarConteudo]);

    const removerMidia = useCallback((id: number, campo: keyof Conteudo, index: number) => {
        const atual = getConteudo(id)!;
        const novos = (atual[campo] as string[]).filter((_, i) => i !== index);
        return atualizarConteudo(id, { [campo]: novos } as Partial<Conteudo>);
    }, [getConteudo, atualizarConteudo]);

    return {
        materias,
        criarMateria,
        excluirMateria,

        materiaisPorId,
        getConteudo,
        atualizarConteudo,
        adicionarTexto,
        removerTexto,
        adicionarMidia,
        removerMidia,
    };
};