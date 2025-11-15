// src/Screens/Pomodoro/PomodoroScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import { styles } from "./styles/PomodoroStyles";
import { formatTime, LONG_BREAK_TIME, POMODORO_TIME, SHORT_BREAK_TIME } from "./service/PomodoroService";
import Controls from "./components/Controls/Controls";
import TimerCircle from "./components/TimerCicle/TimerCicle";

export type Mode = "Pomodoro" | "Pausa Curta" | "Pausa Longa";

export default function PomodoroScreen() {
  const [mode, setMode] = useState<Mode>("Pomodoro");
  const [time, setTime] = useState(POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      setIsActive(false);

      if (mode === "Pomodoro") {
        const newCount = sessionsCompleted + 1;
        setSessionsCompleted(newCount);

        if (newCount % 4 === 0) {
          setMode("Pausa Longa");
          setTime(LONG_BREAK_TIME);
        } else {
          setMode("Pausa Curta");
          setTime(SHORT_BREAK_TIME);
        }
      } else {
        setMode("Pomodoro");
        setTime(POMODORO_TIME);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, mode, sessionsCompleted]);

  const handleModeChange = (newMode: Mode) => {
    setIsActive(false);
    setMode(newMode);

    setTime(
      newMode === "Pomodoro"
        ? POMODORO_TIME
        : newMode === "Pausa Curta"
          ? SHORT_BREAK_TIME
          : LONG_BREAK_TIME
    );
  };

  const handleReset = () => {
    setIsActive(false);
    handleModeChange(mode);
  };

  const primaryColor = "#6200ee";

  return (
    <View style={styles.container}>
      <ModeSelector
        mode={mode}
        primaryColor={primaryColor}
        onSelectMode={handleModeChange}
      />

      <TimerCircle
        timeFormatted={formatTime(time)}
        mode={mode}
        primaryColor={primaryColor}
      />

      <Controls
        isActive={isActive}
        primaryColor={primaryColor}
        onStartPause={() => setIsActive((prev) => !prev)}
        onReset={handleReset}
      />

      <Text style={styles.statsText}>
        Sessões Pomodoro Concluídas: {sessionsCompleted}
      </Text>
    </View>
  );
}
