import React, { FC } from "react";
import { Text } from "react-native";
import { View, XStack } from "tamagui";
import { dateBoxStyles } from "./DateBoxStyles";

interface DateBoxProps {
  name: string;
  date: Date;
  zuluDate: Date;
}

export const DateBox: FC<DateBoxProps> = ({ name, date, zuluDate }) => {
  return (
    <XStack style={dateBoxStyles.container}>
      <Text style={dateBoxStyles.rowName}>{name}</Text>
      <View>
        <Text style={dateBoxStyles.textDate}>{generateDate(date)}</Text>
      </View>
      <View>
        <Text style={dateBoxStyles.textDate}>{generateDate(zuluDate)}</Text>
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
