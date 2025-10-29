import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { BottomNavigation, Text, Provider, Icon } from "react-native-paper";
import DisciplinyCard from "../screens/SubjectScreen/components/DisciplinyCard/DisciplinyCard";
import PomodoroScreen from "../screens/PomodoroScreen/PomodoroScreen";
import TelaPrincipal from "../screens/TelaPrincipal/TelaPrincipal";
import StatsScreen from "../screens/StatsScreens/StatsScreens";

export default function ButtonBar() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: "home", title: "Home", icon: "home" },
    { key: "discipliny", title: "Disciplina", icon: "home" },
    { key: "foco", title: "Foco", icon: "home" },
    { key: "stats", title: "Estatisticas", icon: "home" },
  ];

  const renderScene = ({ route }:any) => {
    switch (route.key) {
      case "home":
        return <TelaPrincipal/>;
      case "discipliny":
        return <DisciplinyCard />;
      case "foco":
        return <PomodoroScreen />;
      case "stats":
        return <StatsScreen />;
      
    }
  };

  return (
    <Provider>
      {renderScene({ route: routes[index] })}
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={({ route }) => {
          const newIndex = routes.findIndex((r) => r.key === route.key);
          if (newIndex !== -1) {
            setIndex(newIndex);
          }
        }}
        renderIcon={({ route, color }) => (
          <Icon source={route.icon} size={24} color={color} />
        )}
        getLabelText={({ route }) => route.title}
      />
    </Provider>
  );
}
