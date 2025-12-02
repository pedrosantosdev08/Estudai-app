import * as Notifications from "expo-notifications";

export async function notify(title: string, body: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: "default",
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger: null,
  });
}

// Notificações pré-definidas
export const notifyOneHour = () =>
  notify("🔥 Boa! Você completou 1h de estudo!", "Continue firme!");

export const notifyNewSession = (materia: string) =>
  notify("📚 Nova sessão adicionada!", `${materia} foi adicionada à agenda.`);

export const notifyStreak = (dias: number) =>
  notify("🔥 Nova sequência!", `Você está há ${dias} dias estudando!`);

export const notifyMetaCompleta = () =>
  notify("🎯 Meta concluída!", "Parabéns! Você concluiu uma meta do dia!");
