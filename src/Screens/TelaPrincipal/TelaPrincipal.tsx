import * as React from "react";
import { View, ScrollView } from "react-native";
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
import { styles } from "./TelaPrincipalStyle";
import { TelaPrincipalLogic } from "./Services/TelaPrincipalLogic";


export default function HomeScreen() {
  const logic = TelaPrincipalLogic();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6200ee", "transparent"]}
        style={styles.background}
      />
      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Content title="Olá, Estudante! 👋" color="#6200ee" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Sequência de dias */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Sequência de dias</Text>
            <Text variant="headlineMedium" style={styles.highlight}>
              {logic.sequenciaDias}
            </Text>
            <Text>dias 🔥</Text>
            <Button
              onPress={() => logic.setSequenciaDias(logic.sequenciaDias + 1)}
            >
              +1 dia
            </Button>
          </Card.Content>
        </Card>

        {/* Hoje */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Hoje</Text>
            <Text variant="titleLarge" style={styles.highlight}>
              {logic.formatarTempo(logic.tempoHoje)}
            </Text>
            <Button onPress={logic.handleAdicionarTempo}>+1h de estudo</Button>
          </Card.Content>
        </Card>

        {/* Disciplinas */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Disciplinas</Text>
            <Text style={styles.infoText}>
              {logic.disciplinasAtivas} ativas
            </Text>


          </Card.Content>
        </Card>

        {/* Metas */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Metas</Text>
            <Text style={styles.infoText}>
              {logic.metas.feitas}/{logic.metas.total}
            </Text>
            <Button onPress={logic.handleConcluirMeta}>Concluir Meta</Button>
          </Card.Content>
        </Card>

        {/* Agenda */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Agenda de Hoje</Text>
            {logic.agenda.map((item, index) => (
              <View key={index}>
                <Text style={styles.agendaItem}>{item.materia}</Text>
                <Text style={styles.agendaTime}>{item.horario}</Text>
              </View>
            ))}

            {logic.showAddSessao ? (
              <>
                <TextInput
                  mode="outlined"
                  label="Nova sessão"
                  value={logic.novaSessao}
                  onChangeText={logic.setNovaSessao}
                  style={{ marginVertical: 8 }}
                />
                <Button onPress={logic.handleAddSessao}>Salvar</Button>
              </>
            ) : (
              <Button onPress={() => logic.setShowAddSessao(true)}>
                + Adicionar sessão de estudo
              </Button>
            )}
          </Card.Content>
        </Card>

        {/* Progresso semanal */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Progresso Semanal</Text>
            <ProgressBar
              progress={
                logic.progressoSemana.atual / logic.progressoSemana.meta
              }
              color="#6200ee"
              style={styles.progressBar}
            />
            <Text style={styles.infoText}>
              {logic.progressoSemana.atual}/{logic.progressoSemana.meta}h
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>

      {/*<FAB
        style={styles.fab}
        icon="plus"
        onPress={() => logic.setShowAddDisciplina(!logic.showAddDisciplina)}
      />*/}
    </View>
  );
}
