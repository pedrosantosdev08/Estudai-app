import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Card, Text, ProgressBar } from "react-native-paper";

export const StatsScreen = () => {
  // Estados zerados
  const [totalEstudo, setTotalEstudo] = useState(0); // em minutos
  const [mediaDiaria, setMediaDiaria] = useState(0); // em minutos
  const [diasEstudados, setDiasEstudados] = useState(0); // entre 0 e 7
  const [disciplinas, setDisciplinas] = useState([
    { nome: "Matemática", minutos: 0, metas: 0 },
    { nome: "História", minutos: 0, metas: 0 },
    { nome: "Biologia", minutos: 0, metas: 0 },
  ]);

  // Função para formatar tempo
  const formatarTempo = (minutos: number) => {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return `${h}h ${m}min`;
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Estatísticas 📊" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tempo total de estudo */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Tempo total de estudo</Text>
            <Text variant="headlineMedium" style={styles.highlight}>
              {formatarTempo(totalEstudo)}
            </Text>
            <Text style={styles.infoText}>Desde o início da jornada</Text>
          </Card.Content>
        </Card>

        {/* Média diária */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Média diária</Text>
            <Text variant="titleLarge" style={styles.highlight}>
              {formatarTempo(mediaDiaria)}
            </Text>
            <Text style={styles.infoText}>Nos últimos 7 dias</Text>
          </Card.Content>
        </Card>

        {/* Constância semanal */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Constância semanal</Text>
            <Text style={styles.infoText}>Estudou em {diasEstudados} de 7 dias</Text>
            <ProgressBar progress={diasEstudados / 7} color="#03dac6" style={styles.progressBar} />
          </Card.Content>
        </Card>

        {/* Desempenho por disciplina */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Desempenho por disciplina</Text>
            {disciplinas.map((disciplina, index) => (
              <View key={index}>
                <Text style={styles.infoText}>
                  {disciplina.nome}: {formatarTempo(disciplina.minutos)} • {Math.round(disciplina.metas * 100)}%
                </Text>
                <ProgressBar progress={disciplina.metas} color="#03dac6" style={styles.progressBar} />
              </View>
            ))}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#f2f2f2",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  highlight: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#03dac6",
    marginTop: 4,
  },
  infoText: {
    fontSize: 16,
    marginTop: 8,
    color: "#555",
  },
  progressBar: {
    marginTop: 8,
    marginBottom: 8,
    height: 10,
    borderRadius: 5,
  },
});