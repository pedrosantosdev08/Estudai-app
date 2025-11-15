import React from "react";
import { Card, Text } from "react-native-paper";
import { useState } from "react";
import { styles } from "../../styles/StatsStyle";
import { ProgressBar } from "react-native-paper";

export function Constancia() {
 
  const [diasEstudados, setDiasEstudados] = useState(0); // entre 0 e 7

  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Constância semanal</Text>
          <Text style={styles.infoText}>
            Estudou em {diasEstudados} de 7 dias
          </Text>
          <ProgressBar
            progress={diasEstudados / 7}
            color="#62"
            style={styles.progressBar}
          />
        </Card.Content>
      </Card>
    </>
  );
}