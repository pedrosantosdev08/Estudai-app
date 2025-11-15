import React, { createContext, useContext, useEffect, ReactNode } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform, Alert } from "react-native";
import { agendarLembreteDiario, notificarConquista } from "./services/notification";


//  Tipagem do contexto
interface NotificationContextProps {
  notificarConquista: (mensagem: string) => Promise<void>;
}

//  Contexto inicial
const NotificationContext = createContext<NotificationContextProps>({
  notificarConquista: async () => {},
});

//  Provider
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    inicializarNotificacoes();
  }, []);

  //  Configuração inicial
  async function inicializarNotificacoes() {
    try {
      // Define comportamento padrão
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
          shouldShowBanner: true,
          shouldShowList: true,
        }),
      });

      // Cria canal Android
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }

      // Solicita permissões
      await solicitarPermissao();

      // Agenda lembrete diário
      await agendarLembreteDiario();
    } catch (error) {
      console.error(" Erro ao inicializar notificações:", error);
    }
  }

  //  Solicitar permissão
  async function solicitarPermissao() {
    if (!Device.isDevice) return;

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Ative as notificações para receber lembretes e conquistas!"
      );
      return;
    }

    // Obtém o token de push (opcional, útil para backend futuramente)
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo Push Token:", token);
  }

  //  Expor funções do contexto
  return (
    <NotificationContext.Provider value={{ notificarConquista }}>
      {children}
    </NotificationContext.Provider>
  );
};

//  Hook customizado
export const useNotification = () => useContext(NotificationContext);
