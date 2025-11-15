import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { styles } from "./DisciplinyCardStyles";

export default function DisciplinyCard() {
  const cards = [
    { id: 1, title: "Português", content: "Todos seus conteudos de Português" },
    { id: 2, title: "Matemática", content: "Todos seus conteudos de Matemática" },
    { id: 3, title: "Geográfia", content: "Todos seus conteudos de Geográfia" },
    { id: 4, title: "Física", content: "Todos seus conteudos de Física" },
    { id: 5, title: "Historia", content: "Todos seus conteudos de Historia" },
    { id: 6, title: "Filosofia", content: "Todos seus conteudos de Filosofia" },
    { id: 7, title: "Algoritmos", content: "Todos seus conteudos de Algoritmos" },
    { id: 8, title: "Química", content: "Todos seus conteudos de Química" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.list}>
      {cards.map((card) => (
        <Card key={card.id} style={styles.card}>
          <Card.Title title={card.title} titleStyle={styles.title} />
          <Card.Content>
            <Text variant="bodyMedium">{card.content}</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Ver mais</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}



