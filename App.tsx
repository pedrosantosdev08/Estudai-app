import { PaperProvider } from "react-native-paper";
import { Layout } from "./src/components/Layout/Layout";
import React, { useEffect, useState } from "react";
import { AppProvider } from "@/src/context/AppStorageContext";
import { NotificationProvider } from "@/src/providers/NotificationProvider";
import NotificationService from "./src/service/notifications/NotificationService";
import * as Notifications from "expo-notifications";
import SplashScreen from "./src/SplashScreen";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true, // obrigatório no iOS
    shouldShowList: true,   // obrigatório no iOS
  }),
});


export default function App() {
  useEffect(() => {
    NotificationService.init();
  }, []);

  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <NotificationProvider>
      <PaperProvider>
        <AppProvider>
          <Layout />
        </AppProvider>
      </PaperProvider>
    </NotificationProvider>
  );
}
