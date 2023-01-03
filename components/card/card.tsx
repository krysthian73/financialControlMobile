import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Borders, Colors, FontsSize, Margins } from "../../helpers/constants";
import React, { Fragment } from "react";

type Props = {
  header: string;
};

export default function Card({ header }: Props) {
  return (
    <View style={[styles.cardStyle, styles.elevation]}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#e3f2fd"
        style={{ height: "100%", borderRadius: 10 }}
        onPress={(e) => alert("uepa")}
      >
        <Fragment>
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
                fontSize: FontsSize.fontSize1,
                fontWeight: "600",
                fontStyle: "italic",
                color: header.includes("+")
                  ? Colors.green
                  : header.includes("=")
                  ? Colors.blue
                  : Colors.red,
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
        </Fragment>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    marginHorizontal: Margins.marginHorizontal,
    backgroundColor: Colors.white,
    borderRadius: Borders.borderRadius,
  },
  elevation: {
    elevation: 4,
    shadowColor: "#171717",
  },
});
