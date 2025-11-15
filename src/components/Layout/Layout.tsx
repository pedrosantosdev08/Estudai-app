import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNotification } from "../../providers/NotificationProvider";
import NavigationBar from "../NavigationBar/NavigationBar";

export const Layout = () => {
  const [progresso, setProgresso] = useState(0);
  const { notificarConquista } = useNotification();

  useEffect(() => {
    if (progresso >= 100) {
      notificarConquista();
    }
  }, [progresso]);

  return (
    <>
      <NavigationBar />
    </>
  );
};
