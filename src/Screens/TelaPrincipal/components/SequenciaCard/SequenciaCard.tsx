import React from "react";
import { styles } from "../../TelaPrincipalStyle";
import { Button, Card, Text } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";


export const SequenciaCard = () => {
  const { data, updateData } = useAppData();

  const handleAddDia = () => {
    updateData({
      sequenciaDias: data.sequenciaDias + 1,
    });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Sequência de dias</Text>
        <Text variant="headlineMedium" style={styles.highlight}>
          {data.sequenciaDias}
        </Text>
        <Text>dias 🔥</Text>

        <Button onPress={handleAddDia}>+1 dia</Button>
      </Card.Content>
    </Card>
  );
};

export default SequenciaCard;
