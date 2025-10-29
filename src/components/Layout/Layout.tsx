import NavigationBar from "@/src/components/navigation/NavigationBar";
import React from "react";
import { Provider } from "react-native-paper";


export function Layout() {
  return (
    <Provider>
      <NavigationBar/>
    </Provider>
  );
}
