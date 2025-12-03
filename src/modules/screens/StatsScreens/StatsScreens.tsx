import { styles } from "./styles/StatsStyle";
import { View, ScrollView } from "react-native";
import { Header } from "./components/Header/Header";
import { Desempenho } from "./components/Desempenho/Desempenho";
import { Constancia } from "./components/Constancia/Constancia";
import { MediaDiaria } from "./components/MediaDiaria/MediaDiaria";
import { TempoEstudo } from "./components/TempoEstudo/TempoEstudo";

export const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TempoEstudo />
        <MediaDiaria />
        <Constancia />
        <Desempenho />
      </ScrollView>
    </View>
  );
};

export default StatsScreen;
