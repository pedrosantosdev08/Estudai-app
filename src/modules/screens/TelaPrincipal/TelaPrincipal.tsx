import * as React from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-paper";

const TelaPrincipal = () => (
  <ScrollView>
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  </ScrollView>
);

export default TelaPrincipal;
