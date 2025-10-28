import React from "react";
import { Modal, View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "./styles";

const TitleModal = ({ visible, newTitle, setNewTitle, onCreate, onCancel }: {
    visible: boolean;
    newTitle: string;
    setNewTitle: (text: string) => void;
    onCreate: () => void;
    onCancel: () => void;
}) => (
    <Modal visible={visible} animationType="slide" transparent={false}>
        <View style={styles.modalContent}>
            <Text variant="titleLarge" style={{ marginBottom: 16 }}>
                Digite o título da nova matéria
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={newTitle}
                onChangeText={setNewTitle}
            />
            <Button mode="contained" onPress={onCreate} style={{ marginTop: 16 }}>
                Criar
            </Button>
            <Button onPress={onCancel} style={{ marginTop: 8 }}>
                Cancelar
            </Button>
        </View>
    </Modal>
);

export default TitleModal;