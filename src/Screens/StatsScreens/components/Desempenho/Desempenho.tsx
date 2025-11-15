import React from "react";
import { Card, Text, ProgressBar } from "react-native-paper";
import { useState } from "react";
import { styles } from "../../styles/StatsStyle";
import { View } from "react-native";

export function Desempenho() {
  const formatarTempo = (minutos: number) => {
    const hour = Math.floor(minutos / 60);
    const minute = minutos % 60;
    return `${hour}h ${minute}min`;
  };

  const [disciplinas, setDisciplinas] = useState([
    { nome: "Matemática", minutos: 0, metas: 0 },
    { nome: "História", minutos: 0, metas: 0 },
    { nome: "Biologia", minutos: 0, metas: 0 },
  ]);

  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Desempenho por disciplina</Text>
          {disciplinas.map((disciplina, index) => (
            <View key={index}>
              <Text style={styles.infoText}>
                {disciplina.nome}: {formatarTempo(disciplina.minutos)} •{" "}
                {Math.round(disciplina.metas * 100)}%
              </Text>
              <ProgressBar
                progress={disciplina.metas}
                color="#6200ee"
                style={styles.progressBar}
              />
            </View>
          ))}
        </Card.Content>
      </Card>
    </>
  );
}
