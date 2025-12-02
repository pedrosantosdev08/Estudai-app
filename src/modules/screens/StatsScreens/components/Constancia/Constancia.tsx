import React from "react";
import { Card, Text, ProgressBar } from "react-native-paper";
import { styles } from "../../styles/StatsStyle";
import { useAppData } from "@/src/context/AppStorageContext";

export function Constancia() {
  const { data } = useAppData();

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Constância Total</Text>

        <Text style={styles.infoText}>
          Estudou em {data.sequenciaDias} dias seguidos
        </Text>

        <ProgressBar
          progress={Math.min(data.sequenciaDias / 7, 1)}
          color="#62"
          style={styles.progressBar}
        />
      </Card.Content>
    </Card>
  );
}
