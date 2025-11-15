// src/Screens/Pomodoro/components/Controls.tsx
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../../styles/PomodoroStyles";


interface Props {
  isActive: boolean;
  primaryColor: string;
  onStartPause: () => void;
  onReset: () => void;
}

export default function Controls({
  isActive,
  primaryColor,
  onStartPause,
  onReset,
}: Props) {
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: primaryColor }]}
        onPress={onStartPause}
      >
        <Text style={styles.actionText}>{isActive ? "PAUSAR" : "INICIAR"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.resetButton, { borderColor: primaryColor }]}
        onPress={onReset}
      >
        <Text style={[styles.resetText, { color: primaryColor }]}>RESETAR</Text>
      </TouchableOpacity>
    </View>
  );
}
