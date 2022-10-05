import React from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import { View, Text } from "react-native";

export default function InitialPage() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Header text="Controle financeiro" />
      <View
        style={{
          backgroundColor: "transparent",
          marginTop: -80,
        }}
      >
        <Card>
          <Text>Alguma coisa</Text>
        </Card>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Card>
          <Text>Alguma coisa</Text>
        </Card>
        <Card>
          <Text>Alguma coisa</Text>
        </Card>
      </View>
    </View>
  );
}
