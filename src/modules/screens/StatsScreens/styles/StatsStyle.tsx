import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA", // fundo suave da nova paleta
  },

  header: {
    backgroundColor: "#1E293B", // escuro para destacar título
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },

  card: {
    backgroundColor: "#FFFFFF", // branco limpo
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E2E8F0", // borda suave
  },

  highlight: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3D7DF2", // azul primário da nova paleta
    marginTop: 4,
  },

  infoText: {
    fontSize: 16,
    marginTop: 8,
    color: "#334155", // cinza escuro
  },

  progressBar: {
    marginTop: 8,
    marginBottom: 8,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E8EEF5", // azul clarinho para fundo da barra
  },

  tittle:{
    color: "E2E8F0"
  }
});
