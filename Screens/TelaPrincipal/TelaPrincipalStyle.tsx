import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#f2f2f2",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#6200ee",
  },
  infoText: {
    fontSize: 16,
    marginTop: 4,
  },
  agendaItem: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  agendaTime: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  progressBar: {
    marginTop: 8,
    height: 10,
    borderRadius: 5,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#6200ee",
  },
});