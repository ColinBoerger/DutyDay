import { Text } from "react-native";
import { View, XStack, YStack } from "tamagui";
import { dateBoxStyles } from "./DateBoxStyles";
import { FC } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

interface TimeAdderProps {
  onChange1: (_: any, selectedDate?: Date) => void;
  date1: Date;
  onChange2: (_: any, selectedDate?: Date) => void;
  date2: Date;
}

export const TimeAdder: FC<TimeAdderProps> = ({
  date1,
  onChange1,
  date2,
  onChange2,
}) => {
  return (
    <YStack style={dateBoxStyles.container}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date1}
        textColor="white"
        mode="time"
        is24Hour={true}
        onChange={onChange1}
        minuteInterval={1}
      />
      <DateTimePicker
        testID="dateTimePicker"
        value={date2}
        textColor="white"
        mode="time"
        is24Hour={true}
        onChange={onChange2}
        minuteInterval={1}
      />
    </YStack>
  );
};
