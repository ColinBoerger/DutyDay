import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { TimeAdder } from "@/components/TimeAdder";
import { useState } from "react";

export default function TimeCalc() {
  const [date1, setDate1] = useState(new Date(0, 0, 0, 0, 0));

  const [date2, setDate2] = useState(new Date(0, 0, 0, 0, 0));
  const onChangeDate1 = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate1(selectedDate);
    }
    return date1;
  };

  const onChangeDate2 = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate2(selectedDate);
    }
    return date2;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: "Utilities",
        }}
      />
      <ThemedView>
        <TimeAdder
          date1={date1}
          date2={date2}
          onChange1={onChangeDate1}
          onChange2={onChangeDate2}
        />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
