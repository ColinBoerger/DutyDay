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
    <View>
      <XStack flexWrap="wrap" alignItems="center">
        <Label style={styles.text} width={100}>
          Zulu offset
        </Label>

        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          minuteInterval={15}
          onChange={onChange}
        />

        <Separator alignSelf="stretch" vertical marginHorizontal={15} />
        <Button
          icon={plusOrMinus ? Plus : Minus}
          onPress={buttonChange}
        ></Button>
      </XStack>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    //fontSize: 32,
  },
});
