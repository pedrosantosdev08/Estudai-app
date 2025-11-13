import React, { useState } from "react";
import { View } from "react-native";
import { BottomNavigation, Provider, Icon } from "react-native-paper";

import TelaPrincipal from "@/src/Screens/TelaPrincipal/TelaPrincipal";
import DisciplinyCard from "../../Screens/DisciplinyScreen/DisciplinyCard";
import PomodoroScreen from "@/src/Screens/PomodoroScreen/PomodoroScreen";
import StatsScreen from "@/src/Screens/StatsScreens/StatsScreens";
import { styles } from "./NavigationBarStyle";

export default function NavigationBar() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: "home", title: "Home", icon: "home" },
    { key: "discipliny", title: "Disciplinas", icon: "book-open-page-variant" },
    { key: "foco", title: "Foco", icon: "timer-outline" },
    { key: "stats", title: "Estatísticas", icon: "chart-bar" },
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
      default:
        return null;
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.scene}>{renderScene({ route: routes[index] })}</View>

        <BottomNavigation.Bar
          navigationState={{ index, routes }}
          onTabPress={({ route }) => {
            const newIndex = routes.findIndex((r) => r.key === route.key);
            if (newIndex !== -1) setIndex(newIndex);
          }}
          renderIcon={({ route, focused, color }) => (
            <Icon
              source={route.icon}
              size={focused ? 28 : 22}
              color={focused ? "#6200ee" : "#9E9E9E"}
            />
          )}
          getLabelText={({ route }) => route.title}
          activeColor="#9E9E9E"
          inactiveColor="#9E9E9E"
          style={styles.bottomBar}
          labelMaxFontSizeMultiplier={1}
        />
      </View>
    </Provider>
  );
}


