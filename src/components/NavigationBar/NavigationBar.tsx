import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  BottomNavigation,
  Provider,
  Icon,
  MD3LightTheme,
} from "react-native-paper";

import { styles } from "./NavigationBarStyle";
import DisciplinyCard from "@/src/modules/Screens/DisciplinyScreen/DisciplinyCard";
import PomodoroScreen from "@/src/modules/Screens/PomodoroScreen/PomodoroScreen";
import StatsScreen from "@/src/modules/Screens/StatsScreens/StatsScreens";
import TelaPrincipal from "@/src/modules/Screens/TelaPrincipal/TelaPrincipal";

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
    <Provider theme={MD3LightTheme}>
      <View style={styles.container}>
        <View style={styles.scene}>
          {renderScene({ route: routes[index] })}
        </View>

        <View style={styles.bottomBar}>
          {routes.map((route, i) => (
            <TouchableOpacity
              key={route.key}
              style={styles.tabButton}
              onPress={() => setIndex(i)}
            >
              <Icon
                source={route.icon}
                size={i === index ? 26 : 24}
                color={i === index ? "#3D7DF2" : "#94A3B8"}
              />
              <Text
                style={i === index ? styles.tabLabelActive : styles.tabLabel}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Provider>
  );
}
