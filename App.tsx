import React from "react";
import { PaperProvider } from "react-native-paper";
import { Layout } from "@/modules/screens/HomeScreen/components/Layout/Layout";

export default function App() {
  return (
    <PaperProvider>
      <Layout />
    </PaperProvider>
  );
}
