import * as React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-paper";

export default function Form() {
  return (
    <ScrollView>
      <View>
        <Button mode="contained">Entrar</Button>
      </View>
    </ScrollView>
  );
}
