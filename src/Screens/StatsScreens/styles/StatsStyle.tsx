import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#f2f2f2",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  highlight: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6200ee",
    marginTop: 4,
  },
  infoText: {
    fontSize: 16,
    marginTop: 8,
    color: "#555",
  },
  progressBar: {
    marginTop: 8,
    marginBottom: 8,
    height: 10,
    borderRadius: 5,
  },
});