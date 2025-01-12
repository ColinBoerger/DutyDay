import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

import { TimeAdder } from "@/components/TimeAdder";
import { useState } from "react";

export default function TimeCalc() {
  const [date1, setDate1] = useState(new Date(0, 0, 0, 0, 0));
  const [date2, setDate2] = useState(new Date(0, 0, 0, 0, 0));

  const [date3, setDate3] = useState(new Date(0, 0, 0, 0, 0));
  const [date4, setDate4] = useState(new Date(0, 0, 0, 0, 0));

  const [date5, setDate5] = useState(new Date(0, 0, 0, 0, 0));
  const [date6, setDate6] = useState(new Date(0, 0, 0, 0, 0));

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
  const onChangeDate3 = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate3(selectedDate);
    }
    return date3;
  };
  const onChangeDate4 = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate4(selectedDate);
    }
    return date4;
  };
  const onChangeDate5 = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate5(selectedDate);
    }
    return date5;
  };
  const onChangeDate6 = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate6(selectedDate);
    }
    return date6;
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: "Utilities",
        }}
      />
      <SafeAreaView>
        <TimeAdder
          date1={date1}
          date2={date2}
          onChange1={onChangeDate1}
          onChange2={onChangeDate2}
        />
        <TimeAdder
          date1={date3}
          date2={date4}
          onChange1={onChangeDate3}
          onChange2={onChangeDate4}
        />
        <TimeAdder
          date1={date5}
          date2={date6}
          onChange1={onChangeDate5}
          onChange2={onChangeDate6}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
