import { View, Text, StyleSheet } from "react-native";
import React from "react";

export interface Props {
  text: string;
}

export default function Header(props: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: "#1565c0",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 80,
  },
});
