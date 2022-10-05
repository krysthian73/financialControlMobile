import Header from "../../components/header/header";
import Card from "../../components/card/card";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function InitialPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header text="Controle Financeiro" />
        <View style={{ flexGrow: 1 }}>
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  {
    /* <View
          style={{
            height: 1100,
            bottom:50,
            position: "relative",
            backgroundColor: "transparent",
            justifyContent: "space-between",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View> */
  }
  //
  //
}
