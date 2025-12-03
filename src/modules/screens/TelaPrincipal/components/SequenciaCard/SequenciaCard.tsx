import React, { useCallback } from "react";
import { Card, Text, Button } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";
import { styles } from "../../TelaPrincipalStyle";

export const SequenciaCard = () => {
  const { data, updateData } = useAppData();

  const handleAddDia = useCallback(() => {
    updateData({
      sequenciaDias: (data.sequenciaDias || 0) + 1,
    });
  }, [data.sequenciaDias, updateData]);

  return (
    <Card style={styles.card}>
      <Card.Content>

        {/* Título */}
        <Text
          variant="headlineSmall"
          style={{ color: "#1E293B", marginBottom: 6 }}
        >
          Sequência de dias
        </Text>

        {/* Número grande */}
        <Text variant="headlineMedium" style={styles.highlight}>
          {data.sequenciaDias}
        </Text>

        {/* Botão */}
        <Button
          mode="contained"
          onPress={handleAddDia}
          style={styles.buttonPrimary}
          textColor="#FFFFFF"
        >
          +1 dia
        </Button>

      </Card.Content>
    </Card>
  );
};

export default SequenciaCard;
