import React from "react";
import Card from "../../components/card/card";
import { Dimensions, View } from "react-native";

export default function InitialPage() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        backgroundColor: "transparent",
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={{
          backgroundColor: "transparent",
          marginTop: -80,
        }}
      >
        <Card header="+ Entradas do mês de Janeiro" />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Card header="- Despesas Fixas" />

        <Card header="- Gastos" />

        <Card header="= Saldo restante" />
      </View>
    </View>
  );
}
