import Form from "@/components/Form/Form";
import TittleBar from "@/components/Header/Header";
import React from "react";
import { Logo } from "@/components/Logo/Logo";
import { View } from "react-native";

export function HomeScreens() {
  return (
    <View>
      <TittleBar />
      <Logo />
      <Form />
    </View>
  );
}
