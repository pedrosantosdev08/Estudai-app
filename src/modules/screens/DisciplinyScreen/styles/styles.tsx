import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  barButton: { flex: 1, marginHorizontal: 4 },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#E2E8F0", // cinza suave
    backgroundColor: "#F5F7FA", // fundo claro do app
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  confirmationBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#E8EEF5", // azul clarinho (feedback leve)
    borderRadius: 10,
    borderColor: "#3D7DF2",
    borderWidth: 1,
  },

  container: { flex: 1, backgroundColor: "#F5F7FA" },

  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#3D7DF2", // primária
  },

  header: { backgroundColor: "#1E293B" }, // coerente com a 1ª paleta

  highlight: { fontSize: 32, fontWeight: "bold", color: "#3D7DF2" },

  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  MateriaCard: { marginTop: 16 },

  modalWrapper: { flex: 1, justifyContent: "space-between" },

  modalContent: { padding: 16, paddingBottom: 80 },

  manageCard: {
    position: "absolute",
    bottom: 70,
    left: 16,
    right: 16,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    borderRadius: 12,
    paddingVertical: 12,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },

  manageButton: { marginVertical: 4 },

  outsideButton: { marginBottom: 16 },

  preview: {
    width: "100%",
    height: 200,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  scrollContent: { padding: 16, paddingBottom: 80 },

  textActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  textButton: { flex: 1, marginHorizontal: 4 },

  textInput: {
    minHeight: 60,
    borderColor: "#E2E8F0",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#FFFFFF",
  },

  textInputWrapper: {
    marginVertical: 12,
    padding: 12,
    backgroundColor: "#F5F7FA",
    borderRadius: 12,
  },
});
