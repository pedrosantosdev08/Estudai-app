import TelaPrincipal from "@/src/Screens/TelaPrincipal/TelaPrincipal";
import React from "react";
import { useState } from "react";
import { BottomNavigation, Provider, Icon } from "react-native-paper";
import DisciplinyCard from "../../Screens/DisciplinyScreen/DisciplinyCard";
import PomodoroScreen from "@/src/Screens/PomodoroScreen/PomodoroScreen";
import StatsScreen from "@/src/Screens/StatsScreens/StatsScreens";


export default function NavigationBar() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: "home", title: "Home", icon: "home" },
    { key: "discipliny", title: "Disciplina", icon: "book" },
    { key: "foco", title: "Foco", icon: "clock-digital" },
    { key: "stats", title: "Estatisticas", icon: "database" },
  ];

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "home":
        return <TelaPrincipal />;
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
