import React from "react";
import { styles } from "../../TelaPrincipalStyle";
import { Card, ProgressBar, Text } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";


export const ProgressoCard = () => {
  const { data } = useAppData();

  const progresso = data.progresso.atual / data.progresso.meta;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Progresso Semanal</Text>

        <ProgressBar
          progress={progresso}
          style={styles.progressBar}
        />

        <Text style={styles.infoText}>
          {data.progresso.atual}/{data.progresso.meta}h
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ProgressoCard;
