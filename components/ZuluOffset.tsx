import React, { FC, useState } from "react";
import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Value } from "react-time-picker/dist/cjs/shared/types";
import type { SizeTokens } from "tamagui";
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
        style={styles.box}
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
    backgroundColor: "#25292e",
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
