import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function CardsExample() {
  const cards = [
    { id: 1, title: 'Card 1', content: 'Conteúdo do primeiro card' },
    { id: 2, title: 'Card 2', content: 'Outro texto de exemplo' },
    { id: 3, title: 'Card 3', content: 'Mais um card aqui' },
    { id: 4, title: 'Card 4', content: 'Card com mais informações' },
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
