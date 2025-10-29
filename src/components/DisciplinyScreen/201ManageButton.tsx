import styles from "@/src/Screens/DisciplinyScreen/styles";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Card } from "react-native-paper";


const ManageButton = ({
  onPickImage,
  onPickVideo,
  onPickAudio,
  onAddText,
  onDeleteContent,
  onDeleteMaterial,
  onBack,
}: {
  onPickImage: () => void;
  onPickVideo: () => void;
  onPickAudio: () => void;
  onAddText: () => void;
  onDeleteContent: () => void;
  onDeleteMaterial: () => void;
  onBack: () => void;
}) => {
  const [isManaging, setIsManaging] = useState(false);

  const toggleManaging = () => setIsManaging(prev => !prev);

  const handleDeleteContent = () => {
    onDeleteContent();
    setIsManaging(false); // Fecha o menu de gerenciamento
  };

  const handleDeleteMaterial = () => {
    onDeleteMaterial(); // Apenas solicita confirmação no MaterialModal
    setIsManaging(false); // Fecha o menu de gerenciamento
  };

  return (
    <View style={styles.bottomBar}>
      <Button mode="outlined" onPress={onBack} style={styles.barButton}>
        Voltar
      </Button>

      <Button mode="contained" onPress={toggleManaging} style={styles.barButton}>
        Gerenciar Matéria
      </Button>

      {isManaging && (
        <Card style={styles.manageCard}>
          <Card.Content>
            <Button onPress={onAddText} style={styles.manageButton}>
              Adicionar Texto
            </Button>
            <Button onPress={onPickImage} style={styles.manageButton}>
              Adicionar Imagem
            </Button>
            <Button onPress={onPickAudio} style={styles.manageButton}>
              Adicionar Áudio
            </Button>
            <Button onPress={onPickVideo} style={styles.manageButton}>
              Adicionar Vídeo
            </Button>
            <Button onPress={handleDeleteContent} style={styles.manageButton}>
              Deletar Conteúdo
            </Button>
            <Button onPress={handleDeleteMaterial} style={styles.manageButton} textColor="red">
              Deletar Matéria
            </Button>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

export default ManageButton;