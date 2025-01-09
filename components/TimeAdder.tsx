import { Text } from "react-native";
import { Button, Separator, View, XStack, YStack } from "tamagui";
import { dateBoxStyles } from "./DateBoxStyles";
import { FC, useState } from "react";

import { StyleSheet } from "react-native";
import { Minus, Plus } from "@tamagui/lucide-icons";
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
  const [plusOrMinus, setPlusOrMinus] = useState(true);
  const buttonChange = () => {
    setPlusOrMinus(!plusOrMinus);
  };
  let multiplier = 1;
  if (!plusOrMinus) {
    multiplier = -1;
  }
  const dateResult = new Date(
    0,
    0,
    0,
    date1.getHours() + date2.getHours() * multiplier,
    date1.getMinutes() + date2.getMinutes() * multiplier
  );
  return (
    <YStack style={styles.container} overflow="hidden" gap="$2">
      <Text style={styles.header}>Clock Calc 1</Text>
      <DateTimePicker
        testID="add1"
        value={date1}
        textColor="white"
        mode="time"
        is24Hour={true}
        onChange={onChange1}
        minuteInterval={1}
      />
      <XStack style={styles.secondLine}>
        <Button
          style={styles.button}
          icon={plusOrMinus ? Plus : Minus}
          onPress={buttonChange}
          aria-label={`Change offset to ${
            plusOrMinus ? "negative" : "positive"
          }`}
        />
        <DateTimePicker
          testID="add2"
          value={date2}
          textColor="white"
          mode="time"
          is24Hour={true}
          onChange={onChange2}
          minuteInterval={1}
        />
      </XStack>
      <Separator alignSelf="center" width={175} marginVertical={1} />
      <Text style={dateBoxStyles.textDate}>{generateDate(dateResult)}</Text>
    </YStack>
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
  container: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    // borderRadius: 3,
    padding: 5,
    paddingVertical: 10,
    alignItems: "center",
    gap: 20,
    backgroundColor: "black",
  },
  secondLine: {
    alignItems: "center",
    alignContent: "flex-start",
    gap: 5,
    backgroundColor: "black",
    width: 170,
  },
  header: {
    color: "white",
  },
  button: {
    height: 35,
    width: 35,
  },
});
