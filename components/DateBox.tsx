import React, { FC, useState } from "react";
import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Value } from "react-time-picker/dist/cjs/shared/types";
import type { SizeTokens } from "tamagui";
import { View, XStack } from "tamagui";

interface DateBoxProps {
  name: string;
  date: Date;
  zuluDate: Date;
}

export const DateBox: FC<DateBoxProps> = ({ name, date, zuluDate }) => {
  return (
    <XStack
      style={styles.box}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row",
            justifyContent: "center",
          },
        ]}
      >
        <View style={{ flex: 4, justifyContent: "flex-start" }}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <Text style={styles.text}>{generateDate(date)}</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "flex-end" }}>
          <Text style={styles.text}>
            <Text style={styles.text}>{generateDate(zuluDate)}</Text>
          </Text>
        </View>
      </View>
    </XStack>
  );
};
const generateDate = (date: Date) => {
  if (date) {
    let toRet = "";
    if (date.getHours() < 10) {
      toRet = toRet + "0";
    }
    toRet = toRet + date.getHours() + " : ";
    if (date.getMinutes() < 10) {
      toRet = toRet + "0";
    }
    toRet = toRet + date.getMinutes();
    return toRet;
  }
};
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  left: {
    justifyContent: "center",
  },
  right: {
    justifyContent: "center",
  },
  box: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 5,
  },
});
