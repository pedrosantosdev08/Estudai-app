import * as React from "react";
import { ScrollView, View } from "react-native";
import { Card, Text, Button, Icon } from "react-native-paper";

export default function DisciplinyCard() {
  const cards = [
    {
      id: 1,
      title: "Português",
      content: "Todos seus conteudos de Português",
    },
    {
      id: 2,
      title: "Matemática",
      content: "Todos seus conteudos de Matemática",
    },

    { id: 3, title: "Geográfia", content: "Todos seus conteudos de Geográfia" },

    { id: 4, title: "Física", content: "Todos seus conteudos de Física" },
    { id: 5, title: "Historia", content: "Todos seus conteudos de Historia" },

    { id: 6, title: "Filosofia", content: "Todos seus conteudos de Filosofia" },

    {
      id: 7,
      title: "Algoritmos",
      content: "Todos seus conteudos de Algoritmos",
    },

    { id: 8, title: "Química", content: "Todos seus conteudos de Química" },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {cards.map((card) => (
        <Card key={card.id} style={{ marginBottom: 16 }}>
          <Card.Title title={card.title} />
          <Card.Content>
            <Text variant="bodyMedium">{card.content}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => console.log(card.title)}>Ver mais</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
