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

        {/* Título */}
        <Text
          variant="headlineSmall"
          style={{ color: "#1E293B", marginBottom: 6 }}
        >
          Disciplinas
        </Text>

        {/* Quantidade */}
        <Text style={[styles.infoText, { color: "#334155" }]}>
          {disciplinasAtivas} ativas
        </Text>

      </Card.Content>
    </Card>
  );
};

export default DisciplinaCard;
