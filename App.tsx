import React from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { HomeScreens } from "@/modules/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <PaperProvider>
        <HomeScreens />
    </PaperProvider>
  );
}
