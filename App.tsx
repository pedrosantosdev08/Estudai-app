import React from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Layout } from "@/modules/screens/HomeScreen/components/Layout/Layout";
import ButtonBar from "@/modules/navigation/ButtonBar";

export default function App() {
  return (
    <PaperProvider>
      <Layout />
    </PaperProvider>
  );
}
