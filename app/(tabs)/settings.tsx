import { ToggleGroupDouble } from "@/components/ToggleGroupDouble";
import { ToggleGroupTriple } from "@/components/ToggleGroupTriple";
import { ZuluOffset } from "@/components/ZuluOffset";
import { StyleSheet, SafeAreaView } from "react-native";
import { YStack, ScrollView, Separator } from "tamagui";
import { useZulu } from "@/hooks/useZulu";
import { usePlusMinus } from "@/hooks/usePlusMinus";
import { useSOE } from "@/hooks/useSOE";
import { useZuluInputType } from "@/hooks/useZuluInputType";
import { useGroundTime } from "@/hooks/useGroundTime";

export default function TabTwoScreen() {
  const { soe, setSOE } = useSOE();
  const { groundTime, setGroundTime } = useGroundTime();
  const { zulu, setZulu } = useZulu();
  const { plusMinus, setPlusMinus } = usePlusMinus();
  const { zuluInput, setInputZulu } = useZuluInputType();
  const zuluChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setZulu(selectedDate);
    }
  };

  const buttonChange = (event: any) => {
    setPlusMinus(!plusMinus);
    console.log(!plusMinus);
  };
  let soeString = "2+15";
  if (soe[0] === 3 && soe[1] === 15) {
    soeString = "3+15";
  } else if (soe[0] === 3 && soe[1] === 45) {
    soeString = "3+45";
  }
  //@TODO Add ground time slider
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView width="90%" padding="$4">
        <YStack overflow="hidden" gap="$2">
          <ToggleGroupDouble
            size="$3"
            id="DUTYDAY TYPE"
            type="single"
            name="Zulu or Local"
            onChange={(value: string) => {
              setInputZulu(value);
            }}
            value={zuluInput}
            valuesToToggle={["Zulu", "Local"]}
          />

          <Separator marginVertical={10} />
          <ToggleGroupTriple
            size="$3"
            orientation="horizontal"
            type="single"
            name="SOE"
            id="SOE-1"
            onChange={(value: string) => {
              if (value === "2+15") {
                setSOE([2, 15]);
                return "2+15";
              } else if (value === "3+15") {
                setSOE([3, 15]);
                return "3+15";
              } else {
                setSOE([3, 45]);
                return "3+45";
              }
            }}
            value={soeString}
            valuesToToggle={["2+15", "3+15", "3+45"]}
          />

          <Separator marginVertical={10} />

          <ToggleGroupTriple
            size="$3"
            orientation="horizontal"
            type="single"
            name="Ground Time"
            id="GT"
            onChange={(value: string) => {
              setGroundTime(value);
            }}
            value={groundTime}
            valuesToToggle={["16+00", "12+00", "10+00"]}
          />

          <Separator marginVertical={10} />
          <ZuluOffset
            onChange={zuluChange}
            buttonChange={buttonChange}
            date={zulu}
            plusOrMinus={plusMinus}
          />
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  box: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 5,
  },
});
