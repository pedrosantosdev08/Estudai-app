import { styles } from "../../TelaPrincipalStyle";
import { Card, ProgressBar } from "react-native-paper";
import { Text } from "react-native-paper";
import { TelaPrincipalLogic } from "../../Services/TelaPrincipalLogic";

export const ProgressoCard = () => {
  const logic = TelaPrincipalLogic();
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Progresso Semanal</Text>
          <ProgressBar
            progress={logic.progressoSemana.atual / logic.progressoSemana.meta}
            color="#6200ee"
            style={styles.progressBar}
          />
          <Text style={styles.infoText}>
            {logic.progressoSemana.atual}/{logic.progressoSemana.meta}h
          </Text>
        </Card.Content>
      </Card>
    </>
  );
};

export default ProgressoCard;
