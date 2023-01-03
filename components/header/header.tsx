import { View, Text, StyleSheet } from "react-native";
import { Colors, FontsSize } from "../../helpers/constants";
import React from "react";

export interface Props {
  text: string;
}

export default function Header({ text }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    margin: 0,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: FontsSize.fontSize0,
    paddingBottom: 80,
  },
});
