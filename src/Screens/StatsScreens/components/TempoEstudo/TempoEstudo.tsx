import React from "react";
import { Card, Text } from "react-native-paper";
import { useState } from "react";
import { styles } from "../../styles/StatsStyle";

export function TempoEstudo() {
  const formatarTempo = (minutos: number) => {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return `${h}h ${m}min`;
  };

  const [totalEstudo, setTotalEstudo] = useState(0); // em minutos

  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Tempo total de estudo</Text>
          <Text variant="headlineMedium" style={styles.highlight}>
            {formatarTempo(totalEstudo)}
          </Text>
          <Text style={styles.infoText}>Desde o início da jornada</Text>
        </Card.Content>
      </Card>
    </>
  );
}
