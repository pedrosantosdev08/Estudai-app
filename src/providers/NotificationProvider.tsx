import React, { createContext, useContext, useState } from "react";
import NotificationService from "../service/notifications/NotificationService";

type NotificationContextType = {
  pushToken: string | null;
  sendLocalNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType>({
  pushToken: null,
  sendLocalNotification: () => {},
});

export function NotificationProvider({ children }: any) {
  const [pushToken, setPushToken] = useState<string | null>(null);

  const init = async () => {
    const token = await NotificationService.init();
    setPushToken(token);
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        pushToken,
        sendLocalNotification: NotificationService.scheduleLocalNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationContext);
}
