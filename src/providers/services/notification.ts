import * as Notifications from "expo-notifications";

/**
 * Agenda um lembrete diário (por padrão às 20h)
 */
export async function agendarLembreteDiario(
  hour: number = 20,
  minute: number = 0
): Promise<void> {
  try {
    // Cancela notificações anteriores para evitar duplicação
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: " Hora de estudar!",
        body: "Não se esqueça da sua meta de hoje 💪",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.CALENDAR, //  importante
        hour,
        minute,
        repeats: true,
      },
    });

    console.log(
      `✅ Lembrete diário agendado para ${hour}:${minute.toString().padStart(2, "0")}`
    );
  } catch (error) {
    console.error(" Erro ao agendar lembrete diário:", error);
  }
}

/**
 * Exibe imediatamente uma notificação de conquista
 */
export async function notificarConquista(): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "🏆 Conquista alcançada!",
        body: "Você concluiu sua meta diária de estudos ",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: null, // dispara imediatamente
    });

    console.log("✅ Notificação de conquista enviada");
  } catch (error) {
    console.error(" Erro ao enviar notificação de conquista:", error);
  }
}
