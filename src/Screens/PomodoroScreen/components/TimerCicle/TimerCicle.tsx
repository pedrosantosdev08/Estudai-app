// src/Screens/Pomodoro/components/TimerCircle.tsx
import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/PomodoroStyles";


interface Props {
  timeFormatted: string;
  mode: string;
  primaryColor: string;
}

export default function TimerCircle({ timeFormatted, mode, primaryColor }: Props) {
  return (
    <View style={[styles.timerCircle, { borderColor: primaryColor }]}>
      <Text style={styles.timerText}>{timeFormatted}</Text>
      <Text style={styles.timerSubText}>{mode}</Text>
    </View>
  );
}
