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
  ToggleGroup,
} from "tamagui";

export default function TabTwoScreen() {
  const [dutyDay, setDutyDay] = useState("Normal");
  const [soe, setSoe] = useState("2+15");
  const [plusOrMinus, setPlusOrMinus] = useState(true);
  const [zuluOffset, setZuluOffset] = useState(new Date(0, 0, 0, 0, 0));
  const zuluChange = (event: any, selectedDate?: Date) => {};
  const buttonChange = (event: any) => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView maxHeight="90%" width="90%" padding="$4" borderRadius="$4">
        <YStack overflow="hidden" gap="$2" margin="$3" padding="$2">
          <ToggleGroupDouble
            size="$3"
            orientation="horizontal"
            type="single"
            name="Duty Day Type"
            onChange={(value: string) => {
              setDutyDay(value);
            }}
            value={dutyDay}
            valuesToToggle={["Normal", "Augmented"]}
          ></ToggleGroupDouble>
          <ToggleGroupTriple
            size="$3"
            orientation="horizontal"
            type="single"
            name="SOE"
            onChange={(value: string) => {
              setSoe(value);
            }}
            value={soe}
            valuesToToggle={["2+15", "3+15", "3+45"]}
          ></ToggleGroupTriple>
          <ZuluOffset
            onChange={zuluChange}
            buttonChange={buttonChange}
            date={zuluOffset}
            plusOrMinus={plusOrMinus}
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
