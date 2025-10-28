import React from "react";
import { Card, Avatar } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const LeftContent = (props: { size: number }) => <Avatar.Icon {...props} icon="folder" />;

const CardList = ({
  cards,
  onOpen,
}: {
  cards: { id: number; title: string }[];
  onOpen: (id: number) => void;
}) => (
  <>
    {cards.map((card) => (
      <TouchableWithoutFeedback key={card.id} onPress={() => onOpen(card.id)}>
        <Card style={styles.extraCard}>
          <Card.Title title={card.title} left={LeftContent} />
        </Card>
      </TouchableWithoutFeedback>
    ))}
  </>
);

export default CardList;