import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Audio } from "expo-av";

import ManageButton from "./ManageButton";

import { styles } from "../styles/styles";
import { Materia, useMateriais } from "../services/UseMaterial";

type Props = {
  visible: boolean;
  materia?: Materia;
  onClose: () => void;
  onRequestDelete: () => void; // pai fará confirmação e exclusão
};

export default function MaterialModal({
  visible,
  materia,
  onClose,
  onRequestDelete,
}: Props) {
  const {
    getConteudo,
    adicionarTexto,
    removerTexto,
    adicionarMidia,
    removerMidia,
  } = useMateriais();
  const [textContent, setTextContent] = useState("");
  const [isAddingText, setIsAddingText] = useState(false);
  const [isSelectingDelete, setIsSelectingDelete] = useState(false);
  const [playingAudioIndex, setPlayingAudioIndex] = useState<number | null>(
    null
  );
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const conteudoAtual = materia ? getConteudo(materia.id) : null;

  useEffect(() => {
    // cleanup audio on unmount/close
    return () => {
      (async () => {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {}
        }
      })();
    };
  }, [sound]);

  const adicionarTextoLocal = async () => {
    if (!materia || textContent.trim() === "") return;
    await adicionarTexto(materia.id, textContent.trim());
    setTextContent("");
    setIsAddingText(false);
  };

  const pickImage = async () => {
    if (!materia) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      await adicionarMidia(materia.id, "imagens", uri);
    }
  };

  const pickVideo = async () => {
    if (!materia) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      await adicionarMidia(materia.id, "videos", uri);
    }
  };

  const pickAudio = async () => {
    if (!materia) return;
    const result = await DocumentPicker.getDocumentAsync({ type: "audio/*" });
    if (result.assets && result.assets.length > 0) {
      await adicionarMidia(materia.id, "audios", result.assets[0].uri);
    }
  };

  const playAudio = async (uri: string, index: number) => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setPlayingAudioIndex(null);
    }

    const { sound: newSound } = await Audio.Sound.createAsync({ uri });
    setSound(newSound);
    setPlayingAudioIndex(index);
    await newSound.playAsync();
  };

  if (!materia) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.modalWrapper}>
        <ScrollView contentContainerStyle={styles.modalContent}>
          <Text variant="titleLarge" style={{ marginBottom: 16 }}>
            Materia: {materia.title}
          </Text>

          {isAddingText && (
            <View style={styles.textInputWrapper}>
              <TextInput
                value={textContent}
                onChangeText={setTextContent}
                placeholder="Digite o texto"
                style={styles.textInput}
                multiline
              />
              <View style={styles.textActions}>
                <Button
                  onPress={adicionarTextoLocal}
                  disabled={textContent.trim() === ""}
                >
                  Confirmar
                </Button>
                <Button onPress={() => setIsAddingText(false)}>Cancelar</Button>
              </View>
            </View>
          )}

          {/* Textos */}
          {conteudoAtual?.textos.map((t, i) => (
            <View key={i} style={styles.itemRow}>
              <Text variant="bodyMedium">{t}</Text>
              {isSelectingDelete && (
                <Button onPress={() => removerTexto(materia.id, i)} compact>
                  Remover
                </Button>
              )}
            </View>
          ))}

          {/* Imagens */}
          {conteudoAtual?.imagens.map((uri, i) => (
            <View key={i} style={styles.itemRow}>
              <Image source={{ uri }} style={styles.preview} />
              {isSelectingDelete && (
                <Button
                  onPress={() => removerMidia(materia.id, "imagens", i)}
                  compact
                >
                  Remover
                </Button>
              )}
            </View>
          ))}

          {/* Videos */}
          {conteudoAtual?.videos.map((uri, i) => (
            <View key={i} style={styles.itemRow}>
              <Video
                source={{ uri }}
                style={styles.preview}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
              />
              {isSelectingDelete && (
                <Button
                  onPress={() => removerMidia(materia.id, "videos", i)}
                  compact
                >
                  Remover
                </Button>
              )}
            </View>
          ))}

          {/* Audios */}
          {conteudoAtual?.audios.map((uri, i) => (
            <View key={i} style={styles.itemRow}>
              <TouchableOpacity onPress={() => playAudio(uri, i)}>
                <Text style={{ marginTop: 8 }}>
                  {playingAudioIndex === i ? "Reproduzindo..." : "Tocar Áudio"}
                </Text>
              </TouchableOpacity>
              {isSelectingDelete && (
                <Button
                  onPress={() => removerMidia(materia.id, "audios", i)}
                  compact
                >
                  Remover
                </Button>
              )}
            </View>
          ))}

          {isSelectingDelete && (
            <Button
              onPress={() => setIsSelectingDelete(false)}
              style={{ marginTop: 8 }}
            >
              Concluído
            </Button>
          )}
        </ScrollView>

        <ManageButton
          onAddText={() => setIsAddingText(true)}
          onPickImage={pickImage}
          onPickAudio={pickAudio}
          onPickVideo={pickVideo}
          onDeleteContent={() => setIsSelectingDelete(true)}
          onDeleteMaterial={onRequestDelete} // apenas solicita ao pai a exclusão (com confirmação)
          onBack={onClose}
        />
      </View>
    </Modal>
  );
}
