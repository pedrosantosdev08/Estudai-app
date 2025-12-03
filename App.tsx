import { PaperProvider } from "react-native-paper";
import { Layout } from "./src/components/Layout/Layout";
import React, { useEffect } from "react";
import { AppProvider } from "@/src/context/AppStorageContext";
import { NotificationProvider } from "@/src/providers/NotificationProvider";
import NotificationService from "./src/service/notifications/NotificationService";

export default function App() {
  useEffect(() => {
    NotificationService.init();
  }, []);
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
