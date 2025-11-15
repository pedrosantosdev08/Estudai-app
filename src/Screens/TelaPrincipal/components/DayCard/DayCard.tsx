import { styles } from "../../TelaPrincipalStyle";
import { Button, Card } from "react-native-paper";
import { Text } from "react-native-paper";
import { TelaPrincipalLogic } from "../../Services/TelaPrincipalLogic";

export const DayCard = () => {
  const logic = TelaPrincipalLogic();
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Hoje</Text>
          <Text variant="titleLarge" style={styles.highlight}>
            {logic.formatarTempo(logic.tempoHoje)}
          </Text>
          <Button onPress={logic.handleAdicionarTempo}>+1h de estudo</Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default DayCard;
