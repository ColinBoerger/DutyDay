import { Collapsible } from "@/components/Collapsible";
import { ToggleGroupDouble } from "@/components/ToggleGroupDouble";
import { ToggleGroupTriple } from "@/components/ToggleGroupTriple";
import { ZuluOffset } from "@/components/ZuluOffset";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Button,
  Input,
  Label,
  TextArea,
  View,
  XStack,
  YStack,
  Text,
  ScrollView,
} from "tamagui";
import { storeBool, storeDataString, storeTime } from "@/utils/SetGetData";
import { useZulu } from "@/hooks/useZulu";
import { usePlusMinus } from "@/hooks/usePlusMinus";
import { useSOE } from "@/hooks/useSOE";
import { useDutyDayType } from "@/hooks/useDutyDayType";

export default function TabTwoScreen() {
  const { soe, setSOE } = useSOE();
  const { zulu, setZulu } = useZulu();
  const { plusMinus, setPlusMinus } = usePlusMinus();
  const { dutyDay, setDutyDay } = useDutyDayType();

  const zuluChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setZulu(selectedDate);
    }
  };

  const buttonChange = (event: any) => {
    setPlusMinus(!plusMinus);
    console.log(!plusMinus);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView maxHeight="90%" width="90%" padding="$4" borderRadius="$4">
        <YStack overflow="hidden" gap="$2" margin="$3" padding="$2">
          <ToggleGroupDouble
            size="$3"
            id="DUTYDAY TYPE"
            orientation="horizontal"
            type="single"
            name="Duty Day Type"
            onChange={(value: string) => {
              setDutyDay(value);
              console.log(value);
            }}
            value={dutyDay}
            valuesToToggle={["Normal", "Augmented"]}
          ></ToggleGroupDouble>
          <ToggleGroupTriple
            size="$3"
            orientation="horizontal"
            type="single"
            name="SOE"
            id="SOE-1"
            onChange={(value: string) => {
              setSOE(value);
              console.log("Changing vale: " + value);
            }}
            value={soe}
            valuesToToggle={["2+15", "3+15", "3+45"]}
          ></ToggleGroupTriple>
          <ZuluOffset
            onChange={zuluChange}
            buttonChange={buttonChange}
            date={zulu}
            plusOrMinus={plusMinus}
          ></ZuluOffset>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  box: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 5,
  },
});
