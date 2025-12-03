import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA", // Fundo geral do app
  },

  scene: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#FFFFFF", // fundo limpo
    height: 70,
    paddingBottom: 5,
    paddingTop: 10,
    borderTopWidth: 0, // removida a linha para modernidade
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 20, // cantos arredondados para barra flutuante
    marginHorizontal: 16,
    marginBottom: 12, // barra "flutuante"
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },

  tabIcon: {
    fontSize: 24,
    color: "#94A3B8", // cinza suave para inativo
  },

  tabIconActive: {
    fontSize: 26,
    color: "#3D7DF2", // azul primário para ativo
  },

  tabLabel: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 2,
  },

  tabLabelActive: {
    fontSize: 12,
    color: "#3D7DF2",
    fontWeight: '600',
  },
});
