import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA", // fundo suave
  },

  header: {
    backgroundColor: "#1E293B", // título e navegação
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
    backgroundColor: "#FFFFFF", // cards principais → mais legíveis
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
    paddingVertical: 12,

  },

  highlight: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3D7DF2", // primária
  },

  infoText: {
    fontSize: 16,
    marginTop: 4,
    color: "#334155",
    marginBottom: 12, // corpo do texto
  },

  agendaItem: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    color: "#1E293B", // destaque escuro
  },

  agendaTime: {
    fontSize: 14,
    color: "#3D7DF2", // horário destacado com primária
    marginBottom: 4,
  },

  progressBar: {
    marginTop: 8,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E8EEF5", // barra de fundo
  },
  button: {
  backgroundColor: "#3D7DF2", // Primária
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",

  // Sombra leve (iOS + Android)
  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 4,
},

buttonText: {
  color: "#FFFFFF", // texto do botão
  fontSize: 16,
  fontWeight: "600",
  letterSpacing: 0.3,
},

buttonPrimary: {
  backgroundColor: "#3D7DF2",
  marginTop: 12,
  paddingVertical: 6,
  borderRadius: 10,

  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 4,
},


  cardTitle: {
    color: "#0F172A",
    fontWeight: "600",
  },


  primaryButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    marginTop: 6,
  },

  primaryButtonLabel: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

});
