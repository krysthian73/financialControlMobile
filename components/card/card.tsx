import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";

type Props = {
  header: string;
};

export default function Card({ header }: Props) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={(e) => alert("uepa")}
    >
      <View style={[styles.cardStyle, styles.elevation]}>
        <View
          style={{
            // backgroundColor: "blue",
            display: "flex",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              fontStyle: "italic",
              color: "#00e676",
            }}
          >
            {header}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: "red",
          }}
        >
          <Text></Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  elevation: {
    elevation: 4,
    shadowColor: "#171717",
  },
});
