import { useEffect } from "react";
import { registerForPushNotifications } from "../service/notifications/registerForPushNotifications";

export function NotificationProvider({ children }: { children: any }) {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  return children;
}