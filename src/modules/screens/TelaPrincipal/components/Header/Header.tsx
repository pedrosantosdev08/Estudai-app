import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../TelaPrincipalStyle";
import { Appbar } from "react-native-paper";

export const Header = () => {
  return (
    <>
      {/* Background com degradê moderno */}
      <LinearGradient
        colors={["#1E293B", "#1E293B00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />

      <Appbar.Header
        style={[
          styles.header,
          {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
          },
        ]}
        mode="center-aligned"
      >
        <Appbar.Content
          title="Olá, Estudante! 👋"
          titleStyle={{
            color: "#F1F5F9", // cinza bem claro quase branco
            fontSize: 20,
            fontWeight: "600",
          }}
        />
      </Appbar.Header>
    </>
  );
};

export default Header;
