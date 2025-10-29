import React from "react";
import { Provider } from "react-native-paper";
import ButtonBar from '@/components/navigation/NavigationBar';

export function Layout() {
  return (
    <Provider>
      <ButtonBar />
    </Provider>
  );
}
