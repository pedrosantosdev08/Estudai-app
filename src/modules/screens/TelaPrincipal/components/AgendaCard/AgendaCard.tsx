import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { Card, Button, Text, TextInput } from "react-native-paper";
import { useAppData } from "@/src/context/AppStorageContext";
import { styles } from "../../TelaPrincipalStyle";

const AgendaCard = () => {
  const { data, updateData } = useAppData();
  const [showAddSessao, setShowAddSessao] = useState(false);
  const [novaSessao, setNovaSessao] = useState("");

  const handleAddSessao = useCallback(() => {
    const trimmed = novaSessao.trim();
    if (!trimmed) return;

    const novaAgenda = [
      ...data.agenda,
      { materia: trimmed, horario: "00:00" },
    ];

    updateData({ agenda: novaAgenda });

    setNovaSessao("");
    setShowAddSessao(false);
  }, [novaSessao, data.agenda, updateData]);

  return (
    <Card style={styles.card}>
      <Card.Content>

        {/* TÍTULO */}
        <Text variant="titleMedium" style={{ color: "#1E293B", marginBottom: 12 }}>
          Agenda de Hoje
        </Text>

        {/* LISTA DE SESSÕES */}
        {data.agenda.map((item, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.agendaItem}>{item.materia}</Text>
            <Text style={styles.agendaTime}>{item.horario}</Text>
          </View>
        ))}

        {/* CAMPO DE ADICIONAR SESSÃO */}
        {showAddSessao ? (
          <>
            <TextInput
              mode="outlined"
              label="Nova sessão"
              value={novaSessao}
              onChangeText={setNovaSessao}
              style={{ marginVertical: 10 }}
              outlineColor="#3D7DF2"
              activeOutlineColor="#3D7DF2"
            />

            <Button
              mode="contained"
              buttonColor="#3D7DF2"
              textColor="#FFFFFF"
              onPress={handleAddSessao}
              style={{ marginTop: 4 }}
            >
              Salvar
            </Button>
          </>
        ) : (
          <Button
            mode="text"
            textColor="#3D7DF2"
            onPress={() => setShowAddSessao(true)}
            style={{ marginTop: 8 }}
          >
            + Adicionar sessão de estudo
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default AgendaCard;
