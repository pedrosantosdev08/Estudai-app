import React from "react";
import { styles } from "../../styles/StatsStyle";
import { Appbar } from "react-native-paper";


export function Header() {
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Estatísticas 📊" titleStyle={{
            color: "#F1F5F9", 
            fontSize: 20,
            fontWeight: "600",
          }} />
      </Appbar.Header>
    </>
  );
}
