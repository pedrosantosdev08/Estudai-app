// src/Screens/Pomodoro/components/ModeSelector.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Mode } from "../../PomodoroScreen";
import { styles } from "../../styles/PomodoroStyles";


interface Props {
  mode: Mode;
  primaryColor: string;
  onSelectMode: (m: Mode) => void;
}

const modes: Mode[] = ["Pomodoro", "Pausa Curta", "Pausa Longa"];

export default function ModeSelector({ mode, primaryColor, onSelectMode }: Props) {
  return (
    <View style={styles.modeSelector}>
      {modes.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => onSelectMode(item)}
          style={[
            styles.modeButton,
            mode === item && styles.activeModeButton,
            { borderColor: primaryColor },
          ]}
        >
          <Text style={[styles.modeText, mode === item && { color: primaryColor }]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
