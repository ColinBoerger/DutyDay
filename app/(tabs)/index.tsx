import React, { useState } from "react";
import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import { EditDateBox } from "@/components/EditableDateBox";
import { ScrollView, XStack, YStack, Text, View } from "tamagui";
import { DateBox } from "@/components/DateBox";
import { Link } from "expo-router";
import { getMyDate } from "@/utils/SetGetData";
import { useZulu } from "@/hooks/useZulu";

export default function TabTwoScreen() {
  const [date, setDate] = useState(new Date(0, 0, 0, 0, 0));
  const endDutyDay = new Date(
    2000,
    1,
    1,
    date.getHours() + 16,
    date.getMinutes()
  );

  const endAugDutyDay = new Date(
    2000,
    1,
    1,
    date.getHours() + 18,
    date.getMinutes()
  );

  const { zulu: zuluOffset } = useZulu();
  console.log("changing in index", zuluOffset.getHours());
  const [plusOrMinus, setPlusOrMinus] = useState(true);

  const zuluAlert = new Date(
    2000,
    1,
    1,
    date.getHours() + zuluOffset.getHours(),
    date.getMinutes() + zuluOffset.getMinutes()
  );

  const zuluDutyDay = new Date(
    2000,
    1,
    1,
    endDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
    endDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
  );
  const zuluAugDay = new Date(
    2000,
    1,
    1,
    endAugDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
    endAugDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
  );
  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
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
          />
          <DateBox name="Duty Day" date={endDutyDay} zuluDate={zuluDutyDay} />
          <DateBox
            name="Aug Duty Day"
            date={endAugDutyDay}
            zuluDate={zuluAugDay}
          />
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
