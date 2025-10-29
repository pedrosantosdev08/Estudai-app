import React from "react";
import { Card } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const MateriaList = ({
  cards,
  onOpen,
}: {
  cards: { id: number; title: string }[];
  onOpen: (id: number) => void;
}) => (
  <>
    {cards.map((card) => (
      <TouchableWithoutFeedback key={card.id} onPress={() => onOpen(card.id)}>
        <Card style={styles.MateriaCard}>
          <Card.Title title={card.title} />
        </Card>
      </TouchableWithoutFeedback>
    ))}
  </>
);

export default MateriaList;