import React from "react";
import { styles } from "../../TelaPrincipalStyle";
import { Card, Text } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";


export const DisciplinaCard = () => {
  const { data } = useAppData();

  const disciplinasAtivas = data.disciplinas?.length || 0;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Disciplinas</Text>
        <Text style={styles.infoText}>{disciplinasAtivas} ativas</Text>
      </Card.Content>
    </Card>
  );
};

export default DisciplinaCard;
