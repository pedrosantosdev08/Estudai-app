import * as React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./TelaPrincipalStyle";
import Header from "./components/Header/Header";
import SequenciaCard from "./components/SequenciaCard/SequenciaCard";
import DayCard from "./components/DayCard/DayCard";
import DisciplinaCard from "./components/DisciplinaCard/DisciplinaCard";
import MetaCard from "./components/MetaCard/MetaCard";
import AgendaCard from "./components/AgendaCard/AgendaCard";
import ProgressoCard from "./components/ProgressoCard/ProgressoCard";

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SequenciaCard />
        <DayCard />
        <DisciplinaCard />
        <MetaCard />
        <AgendaCard />
        <ProgressoCard />
      </ScrollView>
    </View>
  );
}
