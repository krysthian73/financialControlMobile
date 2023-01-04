import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Borders, Colors, FontsSize, Margins } from "../../helpers/constants";
import React, { Fragment } from "react";

type Props = {
  header: string;
  value: number;
};

export default function Card({ header, value }: Props) {
  return (
    <View style={[styles.cardStyle, styles.elevation]}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#e3f2fd"
        style={{ height: "100%", width: "100%", borderRadius: 10 }}
        onPress={(e) => alert("uepa")}
      >
        <Fragment>
          <View
            style={{
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
                color: header.includes("+") ? Colors.green : Colors.red,
              }}
            >
              {header}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View style={{ paddingBottom: 35 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 33 }}
              >{`R$ ${value}`}</Text>
            </View>
          </View>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    alignItems: "center",
    marginHorizontal: Margins.marginHorizontal,
    backgroundColor: Colors.white,
    borderRadius: Borders.borderRadius,
  },
  elevation: {
    elevation: 4,
    shadowColor: "#171717",
  },
});
