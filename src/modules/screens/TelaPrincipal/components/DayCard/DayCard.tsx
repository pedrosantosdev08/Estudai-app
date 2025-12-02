// DayCard.tsx
import React, { useCallback, useMemo } from "react";
import { Card, Button, Text } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";
import { styles } from "../../TelaPrincipalStyle";
import { formatarTempo } from "@/src/utils/formatTime";

export const DayCard: React.FC = () => {
  const { data, updateData } = useAppData();

  const tempoHoje = useMemo(
    () => Math.round(data.tempoHoje || 0),
    [data.tempoHoje]
  );

  const handleAdicionarTempo = useCallback(() => {
    updateData({ tempoHoje: tempoHoje + 60 });
  }, [tempoHoje, updateData]);

  return (
    <Card style={styles.card}>
      <Card.Content>

        {/* Título */}
        <Text
          variant="titleMedium"
          style={{ color: "#1E293B", marginBottom: 8 }}
        >
          Estudo Hoje
        </Text>

        {/* Tempo formatado */}
        <Text variant="headlineMedium" style={styles.highlight}>
          {formatarTempo(tempoHoje)}
        </Text>

        {/* Botão */}
        <Button
          mode="contained"
          onPress={handleAdicionarTempo}
          style={styles.buttonPrimary}
          textColor="#FFFFFF"
        >
          +1h de estudo
        </Button>

      </Card.Content>
    </Card>
  );
};

export default DayCard;
