import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// --- Constantes de Tempo (em segundos) ---
const POMODORO_TIME = 25 * 60; // 25 minutos
const SHORT_BREAK_TIME = 5 * 60; // 5 minutos
const LONG_BREAK_TIME = 15 * 60; // 15 minutos

// --- Tipos para segurança de código ---
type Mode = "Pomodoro" | "Pausa Curta" | "Pausa Longa";

const PomodoroScreen: React.FC = () => {
  // --- ESTADOS ---
  const [mode, setMode] = useState<Mode>("Pomodoro");
  const [time, setTime] = useState(POMODORO_TIME);
  const [isActive, setIsActive] = useState(false); // Rodando ou Pausado
  const [sessionsCompleted, setSessionsCompleted] = useState(0); // Contador para Pausa Longa

  // --- LÓGICA DO TIMER ---

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // O tempo acabou! Toca o sino e muda o modo.

      // Limpa o intervalo para evitar execuções futuras
      setIsActive(false);

      // Chamada para uma função de notificação (ou som)
      // alert(Tempo de ${mode} acabou!);

      // Lógica de transição de modo
      if (mode === "Pomodoro") {
        const nextSessions = sessionsCompleted + 1;
        setSessionsCompleted(nextSessions);

        if (nextSessions % 4 === 0) {
          // Após 4 pomodoros, vai para a Pausa Longa
          setMode("Pausa Longa");
          setTime(LONG_BREAK_TIME);
        } else {
          // Vai para a Pausa Curta
          setMode("Pausa Curta");
          setTime(SHORT_BREAK_TIME);
        }
      } else {
        // Se estava em Pausa Curta ou Longa, volta para Pomodoro
        setMode("Pomodoro");
        setTime(POMODORO_TIME);
      }

      // Reinicia o timer automaticamente (opcional, pode ser manual)
      // setIsActive(true);
    }

    // Função de limpeza do useEffect (importante para evitar memory leaks)
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, time, mode, sessionsCompleted]);

  // --- FUNÇÕES DE CONTROLE ---

  // Formata o tempo (segundos) para 'MM:SS'
  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Garante que minutos e segundos tenham 2 dígitos (ex: 05:03)
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;

  };

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);

    // Reseta o tempo para o valor inicial do modo atual
    let resetTime;
    switch (mode) {
      case "Pomodoro":
        resetTime = POMODORO_TIME;
        break;
      case "Pausa Curta":
        resetTime = SHORT_BREAK_TIME;
        break;
      case "Pausa Longa":
        resetTime = LONG_BREAK_TIME;
        break;
    }
    setTime(resetTime);
  };

  const handleModeChange = (newMode: Mode) => {
    setIsActive(false); // Pausa ao mudar de modo
    setMode(newMode);

    // Define o tempo inicial para o novo modo
    let newTime;
    switch (newMode) {
      case "Pomodoro":
        newTime = POMODORO_TIME;
        break;
      case "Pausa Curta":
        newTime = SHORT_BREAK_TIME;
        break;
      case "Pausa Longa":
        newTime = LONG_BREAK_TIME;
        break;
    }
    setTime(newTime);
  };

  // --- UI (VISUAL) ---

  // Função para retornar cores baseadas no modo
  const getColorForMode = (m: Mode) => {
    switch (m) {
      case "Pomodoro":
        return "#6200ee"; // Vermelho/Laranja de foco
      case "Pausa Curta":
        return "#6200ee"; // Verde de descanso
      case "Pausa Longa":
        return "#6200ee"; // Azul escuro de descanso
    }
  };

  const primaryColor = getColorForMode(mode);

  return (
    <View style={styles.container}>
      {/* Botões de Seleção de Modo */}
      <View style={styles.modeSelector}>
        <TouchableOpacity
          style={[
            styles.modeButton,
            mode === "Pomodoro" && styles.activeModeButton,
            { borderColor: primaryColor },
          ]}
          onPress={() => handleModeChange("Pomodoro")}
        >
          <Text
            style={[
              styles.modeText,
              mode === "Pomodoro" && { color: primaryColor },
            ]}
          >
            Pomodoro
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modeButton,
            mode === "Pausa Curta" && styles.activeModeButton,
            { borderColor: primaryColor },
          ]}
          onPress={() => handleModeChange("Pausa Curta")}
        >
          <Text
            style={[
              styles.modeText,
              mode === "Pausa Curta" && { color: primaryColor },
            ]}
          >
            Pausa Curta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modeButton,
            mode === "Pausa Longa" && styles.activeModeButton,
            { borderColor: primaryColor },
          ]}
          onPress={() => handleModeChange("Pausa Longa")}
        >
          <Text
            style={[
              styles.modeText,
              mode === "Pausa Longa" && { color: primaryColor },
            ]}
          >
            Pausa Longa
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display do Timer */}
      <View style={[styles.timerCircle, { borderColor: primaryColor }]}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
        <Text style={styles.timerSubText}>{mode}</Text>
      </View>

      {/* Botões de Ação */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: primaryColor }]}
          onPress={handleStartPause}
        >
          <Text style={styles.actionText}>
            {isActive ? "PAUSAR" : "INICIAR"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resetButton, { borderColor: primaryColor }]}
          onPress={handleReset}
        >
          <Text style={[styles.resetText, { color: primaryColor }]}>
            RESETAR
          </Text>
        </TouchableOpacity>
      </View>

      {/* Estatísticas */}
      <Text style={styles.statsText}>
        Sessões Pomodoro Concluídas: {sessionsCompleted}
      </Text>
    </View>
  );
};

export default PomodoroScreen;

// --- ESTILOS DO REACT NATIVE ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },

  // Seletor de Modo
  modeSelector: {
    flexDirection: "row",
    marginBottom: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 5,
  },
  modeButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  activeModeButton: {
    backgroundColor: "#fff", // Fundo branco no ativo (simulação de destaque)
    borderWidth: 1, // Borda para destaque
  },
  modeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
  },

  // Display do Timer
  timerCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  timerText: {
    fontSize: 70,
    fontWeight: "300",
    color: "#333",
  },
  timerSubText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
    color: "#666",
  },

  // Controles (Botões)
  controls: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 20,
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  actionText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
  },
  resetText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statsText: {
    fontSize: 14,
    color: "#666",
  },
});