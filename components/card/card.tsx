import { View, StyleSheet } from "react-native";
import React from "react";

export interface Props {
  children?: JSX.Element;
}

export default function Card({ children }: Props) {
  return <View style={[styles.cardStyle, styles.elevation]}>{children}</View>;
}

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  elevation: {
    elevation: 4,
    shadowColor: "#171717",
  },
});
