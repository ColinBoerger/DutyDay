import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Button, Label, Separator, View, XStack } from "tamagui";
import { Minus, Plus } from "@tamagui/lucide-icons";

interface ZuluOffsetProps {
  onChange: (_: any, selectedDate?: Date) => void;
  buttonChange: (event: any) => void;
  date: Date;
  plusOrMinus: Boolean;
}

export const ZuluOffset: FC<ZuluOffsetProps> = ({
  onChange,
  buttonChange,
  date,
  plusOrMinus,
}) => {
  return (
    <XStack alignItems="center" justifyContent="flex-end">
      <Label style={styles.label}>Zulu offset</Label>

      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="time"
        is24Hour={true}
        minuteInterval={15}
        onChange={onChange}
      />

      <Separator alignSelf="stretch" vertical marginHorizontal={30} />
      <Button
        icon={plusOrMinus ? Plus : Minus}
        onPress={buttonChange}
        aria-label={`Change offset to ${plusOrMinus ? "negative" : "positive"}`}
      />
    </XStack>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    marginRight: "auto",
  },
});
