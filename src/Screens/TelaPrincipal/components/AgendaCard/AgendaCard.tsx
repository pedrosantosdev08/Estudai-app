import { styles } from "../../TelaPrincipalStyle";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { View } from "react-native";
import { useState } from "react";
import { useNotification } from "../../../../providers/NotificationProvider";
import { useAppData } from "@/src/context/AppStorageContext";

export const AgendaCard = () => {
  const { data, updateData } = useAppData();
  const { notificarConquista } = useNotification();

  const [showAddSessao, setShowAddSessao] = useState(false);
  const [novaSessao, setNovaSessao] = useState("");

  function handleAddSessao() {
    if (!novaSessao.trim()) return;

    const novaAgenda = [
      ...data.agenda,
      { materia: novaSessao, horario: "00:00" },
    ];

    updateData({ agenda: novaAgenda });

    notificarConquista("📚 Nova sessão de estudo adicionada!");
    setNovaSessao("");
    setShowAddSessao(false);
  }

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="headlineSmall">Agenda de Hoje</Text>

        {data.agenda.map((item: { materia: string; horario: string }, index: number) => (
          <View key={index}>
            <Text style={styles.agendaItem}>{item.materia}</Text>
            <Text style={styles.agendaTime}>{item.horario}</Text>
          </View>
        ))}

        {showAddSessao ? (
          <>
            <TextInput
              mode="outlined"
              label="Nova sessão"
              value={novaSessao}
              onChangeText={setNovaSessao}
              style={{ marginVertical: 8 }}
            />
            <Button onPress={handleAddSessao}>Salvar</Button>
          </>
        ) : (
          <Button onPress={() => setShowAddSessao(true)}>
            + Adicionar sessão de estudo
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};
