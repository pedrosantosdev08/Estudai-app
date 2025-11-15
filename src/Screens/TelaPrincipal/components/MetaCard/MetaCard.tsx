import { styles } from "../../TelaPrincipalStyle";
import { Button, Card, Text } from "react-native-paper";

import { TelaPrincipalLogic } from "../../Services/TelaPrincipalLogic";

export const MetaCard = () => {
  const logic = TelaPrincipalLogic();
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Metas</Text>
          <Text style={styles.infoText}>
            {logic.metas.feitas}/{logic.metas.total}
          </Text>
          <Button onPress={logic.handleConcluirMeta}>Concluir Meta</Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default MetaCard;
