import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { EditDateBox } from "@/components/EditableDateBox";
import { ScrollView, XStack, YStack, Text, View } from "tamagui";
import { DateBox } from "@/components/DateBox";
import { useZulu } from "@/hooks/useZulu";
import { usePlusMinus } from "@/hooks/usePlusMinus";
import { useSOE } from "@/hooks/useSOE";
import { dateBoxStyles } from "@/components/DateBoxStyles";

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

  const endTac = new Date(2000, 1, 1, date.getHours() + 12, date.getMinutes());
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
  const prevLandZulu = new Date(
    2000,
    1,
    1,
    prevLand.getHours() + zuluOffset.getHours() * plusOrMinusFactor,
    prevLand.getMinutes() + zuluOffset.getMinutes() * plusOrMinusFactor
  );
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
  const zuluTac = new Date(
    2000,
    1,
    1,
    endTac.getHours() + (zuluOffset?.getHours() ?? 0) * plusOrMinusFactor,
    endTac.getMinutes() + (zuluOffset?.getMinutes() ?? 0) * plusOrMinusFactor
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
      <ScrollView maxHeight="90%" width="90%" padding="$2" borderRadius="$4">
        <View style={styles.outerBox}>
          <YStack overflow="hidden" gap="$0" margin="$3" padding="$0">
            <XStack style={dateBoxStyles.container} justifyContent="flex-end">
              <Text style={styles.columnHeader}>Local</Text>
              <Text style={styles.columnHeader}>Zulu</Text>
            </XStack>
            <EditDateBox
              onChange={onChangeLand}
              name="Land Time"
              date={prevLand}
              zuluDate={prevLandZulu}
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
            <DateBox name="Last Tac Event" date={endTac} zuluDate={zuluTac} />

            <DateBox name="Duty Day" date={endDutyDay} zuluDate={zuluDutyDay} />
            <DateBox
              name="Aug Duty Day"
              date={endAugDutyDay}
              zuluDate={zuluAugDay}
            />
          </YStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  columnHeader: {
    color: "white",
    width: 70,
    textAlign: "center",
  },
  outerBox: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    backgroundColor: "grey",
  },
});
