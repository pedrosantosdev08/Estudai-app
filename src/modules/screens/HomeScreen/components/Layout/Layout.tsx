import React from "react";
import { Provider } from "react-native-paper";
import NavBar from "../ui/NavBar";
import ButtonBar from "@/modules/navigation/ButtonBar";

export function Layout() {
  return (
    <Provider>
      <NavBar />
      <ButtonBar />
    </Provider>
  );
}
