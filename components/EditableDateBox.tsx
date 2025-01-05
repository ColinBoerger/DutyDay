import React, { FC } from "react";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, XStack } from "tamagui";
import { dateBoxStyles } from "./DateBoxStyles";

interface EditDateBoxProps {
  onChange: (_: any, selectedDate?: Date) => void;
  name: string;
  date: Date;
  zuluDate: Date;
}

export const EditDateBox: FC<EditDateBoxProps> = ({
  onChange,
  name,
  date,
  zuluDate,
}) => {
  return (
    <XStack style={dateBoxStyles.container}>
      <Text style={dateBoxStyles.rowName}>{name}</Text>
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          textColor="white"
          mode="time"
          is24Hour={true}
          onChange={onChange}
          minuteInterval={5}
        />
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
