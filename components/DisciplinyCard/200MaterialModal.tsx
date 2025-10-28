import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Video, ResizeMode } from "expo-av";
import { Audio } from "expo-av";
import ManageButton from "./201ManageButton";
import styles from "./styles";

type Conteudo = {
  textos: string[];
  imagens: string[];
  videos: string[];
  audios: string[];
};

const STORAGE_KEY = "materiais_por_id";

const MaterialModal = ({
  visible,
  card,
  onClose,
  onDelete,
}: {
  visible: boolean;
  card?: { id: number; title: string };
  onClose: () => void;
  onDelete: () => void;
}) => {
  const [materiaisPorId, setMateriaisPorId] = useState<Record<number, Conteudo>>({});
  const [textContent, setTextContent] = useState("");
  const [isAddingText, setIsAddingText] = useState(false);
  const [isSelectingDelete, setIsSelectingDelete] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [playingAudioIndex, setPlayingAudioIndex] = useState<number | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const conteudoAtual = card
    ? materiaisPorId[card.id] ?? {
      textos: [],
      imagens: [],
      videos: [],
      audios: [],
    }
    : null;

  useEffect(() => {
    const carregar = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        const dados = json ? JSON.parse(json) : {};
        setMateriaisPorId(dados);
      } catch (error) {
        console.error("Erro ao carregar materiais:", error);
      }
    };
    carregar();
  }, []);

  useEffect(() => {
    if (card && !materiaisPorId[card.id]) {
      const atualizados = {
        ...materiaisPorId,
        [card.id]: {
          textos: [],
          imagens: [],
          videos: [],
          audios: [],
        },
      };
      setMateriaisPorId(atualizados);
      salvarMateriais(atualizados);
    }
  }, [card]);

  const salvarMateriais = async (data: Record<number, Conteudo>) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao salvar materiais:", error);
    }
  };

  const atualizarConteudo = (novo: Partial<Conteudo>) => {
    if (!card) return;
    const atualizados = {
      ...materiaisPorId,
      [card.id]: {
        ...materiaisPorId[card.id],
        ...novo,
      },
    };
    setMateriaisPorId(atualizados);
    salvarMateriais(atualizados);
  };

  const adicionarTexto = () => {
    if (!card || textContent.trim() === "") return;
    const novosTextos = [...conteudoAtual!.textos, textContent.trim()];
    atualizarConteudo({ textos: novosTextos });
    setTextContent("");
    setIsAddingText(false);
  };

  const removerTexto = (index: number) => {
    const novosTextos = conteudoAtual!.textos.filter((_, i) => i !== index);
    atualizarConteudo({ textos: novosTextos });
  };

  const removerImagem = (index: number) => {
    const novasImagens = conteudoAtual!.imagens.filter((_, i) => i !== index);
    atualizarConteudo({ imagens: novasImagens });
  };

  const removerVideo = (index: number) => {
    const novosVideos = conteudoAtual!.videos.filter((_, i) => i !== index);
    atualizarConteudo({ videos: novosVideos });
  };

  const removerAudio = (index: number) => {
    const novosAudios = conteudoAtual!.audios.filter((_, i) => i !== index);
    atualizarConteudo({ audios: novosAudios });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled && card) {
      const novasImagens = [...conteudoAtual!.imagens, result.assets[0].uri];
      atualizarConteudo({ imagens: novasImagens });
    }
  };

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (!result.canceled && card) {
      const novosVideos = [...conteudoAtual!.videos, result.assets[0].uri];
      atualizarConteudo({ videos: novosVideos });
    }
  };

  const pickAudio = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: "audio/*" });
    if (result.assets && result.assets.length > 0 && card) {
      const novosAudios = [...conteudoAtual!.audios, result.assets[0].uri];
      atualizarConteudo({ audios: novosAudios });
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

  const confirmarExclusaoMateria = async () => {
    if (card) {
      const copia = { ...materiaisPorId };
      delete copia[card.id];
      setMateriaisPorId(copia);
      await salvarMateriais(copia);
    }
    setIsConfirmingDelete(false);
    onDelete();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.modalWrapper}>
        <ScrollView contentContainerStyle={styles.modalContent}>
          <Text variant="titleLarge" style={{ marginBottom: 16 }}>
            Adicionar material para "{card?.title}"
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
                <Button onPress={adicionarTexto} disabled={textContent.trim() === ""}>
                  Confirmar
                </Button>
                <Button onPress={() => setIsAddingText(false)}>Cancelar</Button>
              </View>
            </View>
          )}

          {conteudoAtual?.textos.map((text, index) => (
            <View key={index} style={styles.itemRow}>
              <Text variant="bodyMedium">{text}</Text>
              {isSelectingDelete && (
                <Button onPress={() => removerTexto(index)} compact>
                  Remover
                </Button>
              )}
            </View>
          ))}

          {conteudoAtual?.imagens.map((uri, index) => (
            <View key={index} style={styles.itemRow}>
              <Image source={{ uri }} style={styles.preview} />
              {isSelectingDelete && (
                <Button onPress={() => removerImagem(index)} compact>
                  Remover
                </Button>
              )}
            </View>
          ))}

          {conteudoAtual?.videos.map((uri, index) => (
            <View key={index} style={styles.itemRow}>
              <Video
                source={{ uri }}
                style={styles.preview}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
              />
              {isSelectingDelete && (
                <Button onPress={() => removerVideo(index)} compact>
                  Remover
                </Button>
              )}
            </View>
          ))}

          {conteudoAtual?.audios.map((uri, index) => (
            <View key={index} style={styles.itemRow}>
              <TouchableOpacity onPress={() => playAudio(uri, index)}>
                <Text style={{ marginTop: 8 }}>
                  {playingAudioIndex === index ? "Reproduzindo..." : "Tocar Áudio"}
                </Text>
              </TouchableOpacity>
              {isSelectingDelete && (
                <Button onPress={() => removerAudio(index)} compact>
                  Remover
                </Button>
              )}
            </View>
          ))}

          {isSelectingDelete && (
            <Button onPress={() => setIsSelectingDelete(false)} style={{ marginTop: 8 }}>
              Concluído
            </Button>
          )}

          {isConfirmingDelete && (
            <View style={styles.confirmationBox}>
              <Text style={{ marginBottom: 8 }}>
                Tem certeza que deseja deletar esta matéria?
              </Text>
              <View style={styles.textActions}>
                <Button onPress={() => setIsConfirmingDelete(false)}>Cancelar</Button>
                <Button onPress={confirmarExclusaoMateria} textColor="red">
                  Confirmar
                </Button>
              </View>
            </View>
          )}
        </ScrollView>

        <ManageButton
          onPickImage={pickImage}
          onPickVideo={pickVideo}
          onPickAudio={pickAudio}
          onAddText={() => setIsAddingText(true)}
          onDeleteContent={() => setIsSelectingDelete(true)}
          onDeleteMaterial={() => setIsConfirmingDelete(true)}
          onBack={onClose}
        />
      </View>
    </Modal>
  );
};

export default MaterialModal;
