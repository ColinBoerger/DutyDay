import React, { useState } from "react";
import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import { EditDateBox } from "@/components/EditableDateBox";
import {
  Button,
  Input,
  Label,
  ScrollView,
  Switch,
  TextArea,
  XStack,
  YStack,
  Text,
  View,
} from "tamagui";
import { DateBox } from "@/components/DateBox";
import { Link } from "expo-router";
import { getMyDate } from "@/utils/SetGetData";
import { useZulu } from "@/hooks/useZulu";

export default function TabTwoScreen() {
  const [date, setDate] = useState(new Date(0));
  const [endDutyDay, setEndDutyDay] = useState(
    new Date(2000, 1, 1, date.getHours() + 16, date.getMinutes())
  );
  const [endAugDutyDay, setAugDutyDay] = useState(
    new Date(2000, 1, 1, date.getHours() + 18, date.getMinutes())
  );

  const zuluOffset = useZulu();
  //const plusOrMinus = usePlusOrMinus;
  const [plusOrMinus, setPlusOrMinus] = useState(true);
  //const [zuluOffset, setZuluOffset] = useState(new Date(0, 0, 0, 0, 0));

  const [zuluAlert, setZuluAlert] = useState(
    new Date(
      2000,
      1,
      1,
      date.getHours() + (zuluOffset?.getHours() ?? 0),
      date.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
    )
  );
  const [zuluDutyDay, setZuluDutyDay] = useState(
    new Date(
      2000,
      1,
      1,
      endDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
      endDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
    )
  );

  const [zuluAugDay, setZuluAugDay] = useState(
    new Date(
      2000,
      1,
      1,
      endAugDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
      endAugDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
    )
  );
  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      setEndDutyDay(
        new Date(
          2000,
          1,
          1,
          selectedDate.getHours() + 16,
          selectedDate.getMinutes()
        )
      );
      setAugDutyDay(
        new Date(
          2000,
          1,
          1,
          selectedDate.getHours() + 18,
          selectedDate.getMinutes()
        )
      );
      if (plusOrMinus) {
        setZuluAlert(
          new Date(
            2000,
            1,
            1,
            date.getHours() + (zuluOffset?.getHours() ?? 0),
            date.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
          )
        );
        setZuluDutyDay(
          new Date(
            2000,
            1,
            1,
            endDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
            endDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
          )
        );
        setZuluAugDay(
          new Date(
            2000,
            1,
            1,
            endAugDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
            endAugDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
          )
        );
      } else {
        setZuluAlert(
          new Date(
            2000,
            1,
            1,
            date.getHours() - (zuluOffset?.getHours() ?? 0),
            date.getMinutes() - (zuluOffset?.getMinutes() ?? 0)
          )
        );

        setZuluDutyDay(
          new Date(
            2000,
            1,
            1,
            endDutyDay.getHours() - (zuluOffset?.getHours() ?? 0),
            endDutyDay.getMinutes() - (zuluOffset?.getMinutes() ?? 0)
          )
        );
        setZuluAugDay(
          new Date(
            2000,
            1,
            1,
            endAugDutyDay.getHours() - (zuluOffset?.getHours() ?? 0),
            endAugDutyDay.getMinutes() - (zuluOffset?.getMinutes() ?? 0)
          )
        );
      }
    }

    return date;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView maxHeight="90%" width="90%" padding="$4" borderRadius="$4">
        <Link href={"/timeCalc"}>
          <Text>Click</Text>
        </Link>
        <YStack overflow="hidden" gap="$2" margin="$3" padding="$2">
          <XStack
            style={styles.box}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            <View
              style={[
                styles.container,
                {
                  // Try setting `flexDirection` to `"row"`.
                  flexDirection: "row",
                  justifyContent: "center",
                },
              ]}
            >
              <View style={{ flex: 4, justifyContent: "center" }}></View>
              <View style={{ flex: 4, justifyContent: "center" }}>
                <Text style={styles.text}>Local</Text>
              </View>
              <View style={{ flex: 4, justifyContent: "center" }}>
                <Text style={styles.text}>Zulu</Text>
              </View>
            </View>
          </XStack>
          <EditDateBox
            onChange={onChange}
            name="Alert"
            date={date}
            zuluDate={zuluAlert}
          ></EditDateBox>
          <DateBox
            name="Duty Day"
            date={endDutyDay}
            zuluDate={zuluDutyDay}
          ></DateBox>
          <DateBox
            name="Aug Duty Day"
            date={endAugDutyDay}
            zuluDate={zuluAugDay}
          ></DateBox>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

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
