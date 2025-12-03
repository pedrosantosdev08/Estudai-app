import React from "react";
import { styles } from "../../TelaPrincipalStyle";
import { Button, Card, Text } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";

export const MetaCard = () => {
  const { data, updateData } = useAppData();

  const handleConcluirMeta = () => {
    const feitasAtualizadas = data.metas.feitas + 1;

    updateData({
      metas: { ...data.metas, feitas: feitasAtualizadas },
    });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>

        <Text variant="headlineSmall" style={styles.cardTitle}>
          Metas
        </Text>

        <Text style={styles.infoText}>
          {data.metas.feitas}/{data.metas.total}
        </Text>

        <Button
          mode="contained"
          onPress={handleConcluirMeta}
          style={styles.primaryButton}
          labelStyle={styles.primaryButtonLabel}
        >
          Concluir Meta
        </Button>

      </Card.Content>
    </Card>
  );
};

export default MetaCard;
