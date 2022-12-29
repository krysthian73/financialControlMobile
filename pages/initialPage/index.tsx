import React from "react";
import Card from "../../components/card/card";
import { View, Text, SafeAreaView } from "react-native";

export default function InitialPage() {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
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
          {/* <Card>
            <Text>Despesas fixas</Text>
          </Card>
          <Card>
            <Text>Gastos avulsos</Text>
          </Card>
          <Card>
            <Text>Saldo restante</Text>
          </Card> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
