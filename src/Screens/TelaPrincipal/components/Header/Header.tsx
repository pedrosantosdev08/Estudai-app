import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../TelaPrincipalStyle";
import { Appbar } from "react-native-paper";

export const Header = () => {
  return (
    <>
      <LinearGradient
        colors={["#6200ee", "transparent"]}
        style={styles.background}
      />
      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Content title="Olá, Estudante! 👋" color="#6200ee" />
      </Appbar.Header>
    </>
  );
};

export default Header;
