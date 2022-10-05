import { View, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export interface Props {}

export default function Card(props: PropsWithChildren<Props>) {
  return (
    <View style={[styles.cardStyle, styles.elevation]}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  elevation: {
    elevation: 4,
    shadowColor: "#171717",
  },
});
