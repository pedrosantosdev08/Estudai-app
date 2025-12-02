// TempoEstudo.tsx
import React, { useMemo } from "react";
import { Card, Text } from "react-native-paper";
import { styles } from "../../styles/StatsStyle";
import { useAppData } from "@/src/context/AppStorageContext";
import { formatarTempo } from "@/src/utils/formatTime";

export const TempoEstudo: React.FC = () => {
  const { data } = useAppData();

  const totalEstudo = useMemo(() => Math.round(data.totalEstudo || 0), [data.totalEstudo]);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Tempo total de estudo</Text>

        <Text variant="headlineMedium" style={styles.highlight}>
          {formatarTempo(totalEstudo)}
        </Text>

        <Text style={styles.infoText}>Desde o início da jornada</Text>
      </Card.Content>
    </Card>
  );
};

export default TempoEstudo;
