import * as React from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Card, Text, Button, FAB, ProgressBar } from "react-native-paper";
import { styles } from "./TelaPrincipalStyle";

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Olá, Estudante! 👋" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Sequência de dias */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Sequência de dias</Text>
            <Text variant="headlineMedium" style={styles.highlight}>7</Text>
            <Text>dias 🔥</Text>
          </Card.Content>
        </Card>

        {/* Hoje */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Hoje</Text>
            <Text variant="titleLarge" style={styles.highlight}>2h 30min</Text>
          </Card.Content>
        </Card>

        {/* Disciplinas */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Disciplinas</Text>
            <Text style={styles.infoText}>8 ativas</Text>
          </Card.Content>
        </Card>

        {/* Metas */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Metas</Text>
            <Text style={styles.infoText}>12/20</Text>
          </Card.Content>
        </Card>

        {/* Agenda de Hoje */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Agenda de Hoje</Text>
            <Text style={styles.agendaItem}>Matemática - Cálculo I</Text>
            <Text style={styles.agendaTime}>14:00 - 15:30</Text>
            <Text style={styles.agendaItem}>História - Revolução Industrial</Text>
            <Text style={styles.agendaTime}>16:00 - 17:00</Text>
            <Button mode="outlined" onPress={() => console.log("Adicionar sessão de estudo")}>
              + Adicionar sessão de estudo
            </Button>
          </Card.Content>
        </Card>

        {/* Progresso Semanal */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Progresso Semanal</Text>
            <Text style={styles.infoText}>Meta da semana</Text>
            <ProgressBar progress={18/25} color="#6200ee" style={styles.progressBar} />
            <Text style={styles.infoText}>18/25h</Text>
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log("Adicionar disciplina")}
      />
    </View>
  );
}


