import React from "react";
import { PaperProvider } from "react-native-paper";
import { Layout } from "./src/components/Layout/Layout";
import { AppProvider } from "./src/context/AppStorageContext";


export default function App() {
  return (
    <PaperProvider>
      <AppProvider>   {/* ⬅ envolve seu Layout */}
        <Layout />
      </AppProvider>
    </PaperProvider>
  );
}
