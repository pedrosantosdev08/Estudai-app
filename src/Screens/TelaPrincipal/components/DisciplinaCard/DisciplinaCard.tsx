import { styles } from "../../TelaPrincipalStyle";
import { Card } from "react-native-paper";
import { Text } from "react-native-paper";
import { TelaPrincipalLogic } from "../../Services/TelaPrincipalLogic";

export const DisciplinaCard = () => {
  const logic = TelaPrincipalLogic();
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Disciplinas</Text>
          <Text style={styles.infoText}>{logic.disciplinasAtivas} ativas</Text>
        </Card.Content>
      </Card>
    </>
  );
};

export default DisciplinaCard;
