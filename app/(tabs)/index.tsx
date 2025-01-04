import React, { useState } from "react";
import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import { EditDateBox } from "@/components/EditableDateBox";
import { ScrollView, XStack, YStack, Text, View } from "tamagui";
import { DateBox } from "@/components/DateBox";
import { Link } from "expo-router";
import { getMyDate } from "@/utils/SetGetData";
import { useZulu } from "@/hooks/useZulu";
import { usePlusMinus } from "@/hooks/usePlusMinus";
import { useSOE } from "@/hooks/useSOE";

export default function TabTwoScreen() {
  const [date, setDate] = useState(new Date(0, 0, 0, 0, 0));
  const [prevLand, setPrevLand] = useState(
    new Date(0, 0, 0, date.getHours() - 16, 0)
  );

  const { soe, setSOE } = useSOE();
  let minutes = 0;
  let hours = 0;
  console.log(soe);
  if (soe === "2+15") {
    minutes = 15;
    hours = 2;
  } else if (soe === "3+15") {
    minutes = 15;
    hours = 3;
  } else if (soe === "3+45") {
    minutes = 45;
    hours = 3;
  }

  const [takeOff, setTakeOff] = useState(
    new Date(0, 0, 0, date.getHours() + hours, date.getMinutes() + minutes)
  );

  const lastBeer = new Date(
    2000,
    1,
    1,
    takeOff.getHours() - 12,
    takeOff.getMinutes()
  );

  const lastAmbien = new Date(
    2000,
    1,
    1,
    takeOff.getHours() - 8,
    takeOff.getMinutes()
  );

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
  //  console.log("changing in index", zuluOffset.getHours());
  const { plusMinus } = usePlusMinus();
  let plusOrMinusFactor = 1;
  if (!plusMinus) {
    plusOrMinusFactor = -1;
  }

  const lastBeerZulu = new Date(
    2000,
    1,
    1,
    lastBeer.getHours() + zuluOffset.getHours() * plusOrMinusFactor,
    lastBeer.getMinutes() + zuluOffset.getMinutes() * plusOrMinusFactor
  );
  const lastAmbienZulu = new Date(
    2000,
    1,
    1,
    lastAmbien.getHours() + zuluOffset.getHours() * plusOrMinusFactor,
    lastAmbien.getMinutes() + zuluOffset.getMinutes() * plusOrMinusFactor
  );
  const zuluAlert = new Date(
    2000,
    1,
    1,
    date.getHours() + zuluOffset.getHours() * plusOrMinusFactor,
    date.getMinutes() + zuluOffset.getMinutes() * plusOrMinusFactor
  );
  const zuluTakeOff = new Date(
    2000,
    1,
    1,
    takeOff.getHours() + zuluOffset.getHours() * plusOrMinusFactor,
    takeOff.getMinutes() + zuluOffset.getMinutes() * plusOrMinusFactor
  );
  const zuluDutyDay = new Date(
    2000,
    1,
    1,
    endDutyDay.getHours() + (zuluOffset?.getHours() ?? 0) * plusOrMinusFactor,
    endDutyDay.getMinutes() +
      (zuluOffset?.getMinutes() ?? 0) * plusOrMinusFactor
  );
  const zuluAugDay = new Date(
    2000,
    1,
    1,
    endAugDutyDay.getHours() + (zuluOffset?.getHours() ?? 0),
    endAugDutyDay.getMinutes() + (zuluOffset?.getMinutes() ?? 0)
  );
  const onChangeLand = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setPrevLand(selectedDate);
      setDate(
        new Date(
          0,
          0,
          0,
          selectedDate.getHours() + 16,
          selectedDate.getMinutes()
        )
      );
      setTakeOff(
        new Date(
          0,
          0,
          0,
          selectedDate.getHours() + 16 + hours,
          selectedDate.getMinutes() + minutes
        )
      );
    }
    return prevLand;
  };
  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      setTakeOff(
        new Date(
          0,
          0,
          0,
          selectedDate.getHours() + hours,
          selectedDate.getMinutes() + minutes
        )
      );
    }
    return date;
  };

  const onChangeTakeOff = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setTakeOff(selectedDate);
      setDate(
        new Date(
          0,
          0,
          0,
          selectedDate.getHours() - hours,
          selectedDate.getMinutes() - minutes
        )
      );
    }
    return takeOff;
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
            onChange={onChangeLand}
            name="Land Time"
            date={prevLand}
            zuluDate={zuluAlert}
          />
          <DateBox name="Last Beer" date={lastBeer} zuluDate={lastBeerZulu} />
          <DateBox
            name="Last Ambien"
            date={lastAmbien}
            zuluDate={lastAmbienZulu}
          />
          <EditDateBox
            onChange={onChange}
            name="Alert"
            date={date}
            zuluDate={zuluAlert}
          />
          <EditDateBox
            onChange={onChangeTakeOff}
            name="T/O"
            date={takeOff}
            zuluDate={zuluTakeOff}
          />

          <DateBox
            name="Last Tac Event"
            date={endDutyDay}
            zuluDate={zuluDutyDay}
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
