import React, { FC } from "react";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Separator, View, XStack, YStack } from "tamagui";
import { dateBoxStyles } from "./DateBoxStyles";

interface EditDateBoxProps {
  onChange: (_: any, selectedDate?: Date) => void;
  name: string;
  date: Date;
  zuluDate: Date;
  subScript: string;
}

export const EditDateBox: FC<EditDateBoxProps> = ({
  onChange,
  name,
  date,
  zuluDate,
  subScript,
}) => {
  return (
    <XStack style={dateBoxStyles.container}>
      <YStack style={dateBoxStyles.editRowName}>
        <Text style={dateBoxStyles.editRowName}>{name}</Text>
        <Text style={dateBoxStyles.subScript}>{subScript}</Text>
      </YStack>
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
