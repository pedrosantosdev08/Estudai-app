import React from "react";
import {  Card, Text } from "react-native-paper";
import { useState } from "react";
import { styles } from '../../styles/StatsStyle'


export function MediaDiaria() {

 const formatarTempo = (minutos: number) => {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    return `${h}h ${m}min`;
  };
      
const [mediaDiaria, setMediaDiaria] = useState(0); // em minutos

  return (
    <>
      <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Média diária</Text>
            <Text variant="titleLarge" style={styles.highlight}>
              {formatarTempo(mediaDiaria)}
            </Text>
            <Text style={styles.infoText}>Nos últimos 7 dias</Text>
          </Card.Content>
        </Card>
    </>
  );
}
