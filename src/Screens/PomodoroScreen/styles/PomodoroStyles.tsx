// src/Screens/Pomodoro/styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
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
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  modeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
  },
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
