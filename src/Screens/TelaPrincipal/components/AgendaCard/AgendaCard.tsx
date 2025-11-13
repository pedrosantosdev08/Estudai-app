import { styles } from "../../TelaPrincipalStyle";
import { Button, Card, TextInput } from "react-native-paper";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { TelaPrincipalLogic } from "../../Services/TelaPrincipalLogic";

export const AgendaCard = () => {
  const logic = TelaPrincipalLogic();
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall">Agenda de Hoje</Text>
          {logic.agenda.map((item, index) => (
            <View key={index}>
              <Text style={styles.agendaItem}>{item.materia}</Text>
              <Text style={styles.agendaTime}>{item.horario}</Text>
            </View>
          ))}

          {logic.showAddSessao ? (
            <>
              <TextInput
                mode="outlined"
                label="Nova sessão"
                value={logic.novaSessao}
                onChangeText={logic.setNovaSessao}
                style={{ marginVertical: 8 }}
              />
              <Button onPress={logic.handleAddSessao}>Salvar</Button>
            </>
          ) : (
            <Button onPress={() => logic.setShowAddSessao(true)}>
              + Adicionar sessão de estudo
            </Button>
          )}
        </Card.Content>
      </Card>
    </>
  );
};

export default AgendaCard;
