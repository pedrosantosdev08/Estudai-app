import { PaperProvider } from "react-native-paper";
import { Layout } from "./src/components/Layout/Layout";
import React from "react";
import { AppProvider } from "@/src/context/AppStorageContext";
import { NotificationProvider } from "@/src/providers/NotificationProvider";

export default function App() {
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
