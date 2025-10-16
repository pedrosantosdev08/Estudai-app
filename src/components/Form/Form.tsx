import * as React from "react";
import { View, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function Form() {
  const [visible, setVisible] = React.useState(false);

  return (
    <ScrollView>
      <View>
        <TextInput label="Usuario" mode="outlined" />

        <TextInput
      label="Senha"
      secureTextEntry={!visible} 
      right={
        <TextInput.Icon
          icon={visible ? 'eye-off' : 'eye'}
          onPress={() => setVisible(!visible)}
        />
          }
          mode="outlined"
        />

        <Button mode="contained">Enviar</Button>
      </View>
    </ScrollView>
  );
}
