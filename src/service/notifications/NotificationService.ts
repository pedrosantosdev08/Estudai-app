import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Platform } from "react-native";

// ======================================================
// 1) Classe principal para configuração
// ======================================================
class NotificationService {
  static async init() {
    console.log("🔔 Iniciando NotificationService...");

    await this.configureChannel();
    const token = await this.registerForPushNotifications();

    Notifications.addNotificationReceivedListener((notification) => {
      console.log("📩 Notificação recebida:", notification);
    });

    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("📬 Usuário clicou na notificação:", response);
    });

    return token;
  }

  static async configureChannel() {
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
      });
    }
  }

  static async registerForPushNotifications() {
    if (!Device.isDevice) {
      console.warn("⚠ Notificações funcionam apenas em dispositivo físico.");
      return null;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Permissão de notificação negada!");
      return null;
    }

    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;

      const token = (
        await Notifications.getExpoPushTokenAsync({ projectId })
      ).data;

      console.log("🔑 Token de push:", token);
      return token;
    } catch (err) {
      console.error("Erro ao obter token:", err);
      return null;
    }
  }

  // Método opcional dentro da classe
  static async scheduleLocalNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "🔔 Notificação Local",
        body: "Esta é uma notificação local do app",
      },
      trigger: null,
    });
  }
}

// ======================================================
// 2) Funções externas para o app chamar
// ======================================================

export function notifyOneHour() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "⏳ 1 Hora de Estudo!",
      body: "Você completou 1 hora de estudo hoje. Continue assim!",
    },
    trigger: null,
  });
}

export function notifyMetaCompleta() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "🏆 Meta Concluída!",
      body: "Você completou todas as suas metas diárias!",
    },
    trigger: null,
  });
}

export function notifyNewSession(materia: string) {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "📘 Nova sessão de estudos",
      body: `Nova sessão adicionada: ${materia}`,
    },
    trigger: null,
  });
}

export function notifyStreak(dias: number) {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "🔥 Sequência mantida!",
      body: `Você manteve sua sequência de ${dias} dias de estudo!`,
    },
    trigger: null,
  });
}

export function notifyPomodoroFim() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "⏱ Pomodoro Finalizado!",
      body: "Seu tempo de foco terminou. Hora de fazer uma pausa!",
    },
    trigger: null,
  });
}

export function notifyPausaCurta() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "☕ Pausa curta concluída!",
      body: "Volte ao foco e continue seus estudos.",
    },
    trigger: null,
  });
}

export function notifyPausaLonga() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "🍃 Pausa longa concluída!",
      body: "Você descansou bem. Vamos continuar?",
    },
    trigger: null,
  });
}

// Export principal da classe
export default NotificationService;
