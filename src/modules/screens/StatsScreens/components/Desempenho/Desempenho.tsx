import React from "react";
import { Card, Text, ProgressBar } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../../styles/StatsStyle";
import { useAppData } from "@/src/context/AppStorageContext";

export function Desempenho() {
  const { data } = useAppData();

  // Lista de disciplinas do contexto
  // Cada disciplina está em: data.disciplinas: string[]
  // Aqui damos estrutura para exibir minutos/metas no futuro
  const disciplinas = data.disciplinas.map((nome) => ({
    nome,
    minutos: 0, // <-- será atualizado quando você quiser implementar durações por disciplina
    metas: 0,   // <-- 0 a 1 (ex.: 0.7 = 70% concluído)
  }));

  const formatarTempo = (minutos: number) => {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return `${h}h ${m}min`;
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Desempenho por disciplina</Text>

        {disciplinas.map((disciplina, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.infoText}>
              {disciplina.nome}: {formatarTempo(disciplina.minutos)} •{" "}
              {Math.round(disciplina.metas * 100)}%
            </Text>

            <ProgressBar
              progress={disciplina.metas}
              style={styles.progressBar}
            />
          </View>
        ))}
      </Card.Content>
    </Card>
  );
}
