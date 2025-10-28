import React from "react";
import { PaperProvider } from "react-native-paper";
import { Layout } from "./Screens/HomeScreen/Layout";

export default function App() {
  return (
    <PaperProvider>
      <Layout />
    </PaperProvider>
  );
}
