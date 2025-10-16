import React from "react";
import { View } from "react-native";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 1000,
    height: 500,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export function Logo() {
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn.logo.com/hotlink-ok/logo-social.png",
        }}
      />
    </View>
  );
}

export default Logo;
