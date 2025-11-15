import React from "react";
import { PaperProvider } from "react-native-paper";
import { Layout } from "./src/components/Layout/Layout";


export default function App() {
  return (
    <PaperProvider>
      <Layout />
    </PaperProvider>
  );
}