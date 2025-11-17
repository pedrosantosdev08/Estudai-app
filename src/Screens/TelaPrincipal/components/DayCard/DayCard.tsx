import React from "react";
import { styles } from "../../TelaPrincipalStyle";
import { Button, Card, Text } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";


export const DayCard = () => {
  const { data, updateData } = useAppData();

  // Função auxiliar para formatar tempo (minutos → HH:mm)
  const formatarTempo = (minutos: number): string => {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${horas}h ${mins}min`;
  };

  // Adiciona 1h (60min) e salva no contexto + AsyncStorage
  const handleAdicionarTempo = () => {
    updateData({ tempoHoje: (data.tempoHoje || 0) + 60 });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Hoje</Text>
        <Text variant="titleLarge" style={styles.highlight}>
          {formatarTempo(data.tempoHoje || 0)}
        </Text>
        <Button onPress={handleAdicionarTempo}>+1h de estudo</Button>
      </Card.Content>
    </Card>
  );
};

export default DayCard;
