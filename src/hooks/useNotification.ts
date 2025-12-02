import {
  notify,
  notifyOneHour,
  notifyNewSession,
  notifyStreak,
  notifyMetaCompleta,
} from "../service/notifications/NotificationService";

export function useNotifications() {
  return {
    notify,
    notifyOneHour,
    notifyNewSession,
    notifyStreak,
    notifyMetaCompleta,
  };
}
