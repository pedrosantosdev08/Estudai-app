import { styles } from "./styles/StatsStyle";
import { View, ScrollView } from "react-native";
import { TempoEstudo } from "./components/TempoEstudo/TempoEstudo";
import { MediaDiaria } from "./components/MediaDiaria/MediaDiaria";
import { Constancia } from "./components/Constancia/Constancia";
import { Desempenho } from "./components/Desempenho/Desempenho";

export const StatsScreen = () => {
  return (
    <View style={styles.container}>
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
