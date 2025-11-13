import { styles } from "../../TelaPrincipalStyle";
import { Button, Card } from "react-native-paper";
import { Text } from "react-native-paper";
import { TelaPrincipalLogic } from "../../Services/TelaPrincipalLogic";

export const SequenciaCard = () => {
  const logic = TelaPrincipalLogic();
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Sequência de dias</Text>
          <Text variant="headlineMedium" style={styles.highlight}>
            {logic.sequenciaDias}
          </Text>
          <Text>dias 🔥</Text>
          <Button
            onPress={() => logic.setSequenciaDias(logic.sequenciaDias + 1)}
          >
            +1 dia
          </Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default SequenciaCard;
