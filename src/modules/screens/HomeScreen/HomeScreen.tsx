import React from "react";
import CardHome from "./components/ui/Card";
import ButtonTabs from "@/modules/navigation/ButtonTabs";
import { Provider } from "react-native-paper";
import NavBar from "./components/ui/NavBar";


export function HomeScreens() {
  return (
    <Provider>
      <NavBar/>
        <CardHome/>
      <ButtonTabs/>
    </Provider>
  );
}
