import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-paper";
import CardList from "./CardList";
import TitleModal from "./TitleModal";
import MaterialModal from "./MaterialModal";
import styles from "./styles";

const DisciplinyCard = () => {
  const [cards, setCards] = useState<{ id: number; title: string }[]>([]);
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const [materialModalVisible, setMaterialModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const openTitleModal = () => {
    setNewTitle("");
    setTitleModalVisible(true);
  };

  const createCard = () => {
    if (newTitle.trim() === "") return;
    const newCard = { id: Date.now(), title: newTitle };
    setCards((prev) => [...prev, newCard]);
    setTitleModalVisible(false);
  };

  const openMaterialModal = (id: number) => {
    setActiveCardId(id);
    setMaterialModalVisible(true);
  };

  const closeCard = () => {
    if (activeCardId !== null) {
      setCards((prev) => prev.filter((card) => card.id !== activeCardId));
      setActiveCardId(null);
      setMaterialModalVisible(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button mode="contained" onPress={openTitleModal} style={styles.outsideButton}>
        Adicionar Material
      </Button>

      <CardList cards={cards} onOpen={openMaterialModal} />

      <TitleModal
        visible={titleModalVisible}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        onCreate={createCard}
        onCancel={() => setTitleModalVisible(false)}
      />

      <MaterialModal
        visible={materialModalVisible}
        card={cards.find(c => c.id === activeCardId)}
        onClose={() => setMaterialModalVisible(false)}
        onDelete={closeCard}
      />
    </ScrollView>
  );
};

export default DisciplinyCard;