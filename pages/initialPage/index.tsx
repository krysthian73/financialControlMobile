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
        <Card header="+ Saldo disponível" value={0} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Card header="+ Entradas do mês de Janeiro" value={0} />

        <Card header="- Despesas Fixas" value={0} />

        <Card header="- Gastos" value={0} />
      </View>
    </View>
  );
}
