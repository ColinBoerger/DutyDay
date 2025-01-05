import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Button, View, XStack } from "tamagui";
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
      <XStack
        // style={styles.box}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Text style={styles.text}>Zulu offset </Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          minuteInterval={15}
          onChange={onChange}
        />
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
