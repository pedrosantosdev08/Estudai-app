import React from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { HomeScreens } from "@/modules/auth/components/screens/HomeScreen";

export default function App() {
  return (
    <PaperProvider>
      <View>
        <HomeScreens />
      </View>
    </PaperProvider>
  );
}
