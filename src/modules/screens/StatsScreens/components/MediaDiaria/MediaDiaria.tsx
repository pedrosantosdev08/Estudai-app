// MediaDiaria.tsx
import React, { useMemo } from "react";
import { Card, Text } from "react-native-paper";
import { styles } from "../../styles/StatsStyle";
import { useAppData } from "@/src/context/AppStorageContext";
import { formatarTempo } from "@/src/utils/formatTime";

export function MediaDiaria() {
  const { data } = useAppData();

  // média em minutos (arredondada)
  const mediaMinutos = useMemo(
    () => Math.round((data.totalEstudo || 0) / 7),
    [data.totalEstudo]
  );

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Média diária</Text>
        <Text variant="titleLarge" style={styles.highlight}>
          {formatarTempo(mediaMinutos)}
        </Text>
        <Text style={styles.infoText}>Nos últimos 7 dias</Text>
      </Card.Content>
    </Card>
  );
}
