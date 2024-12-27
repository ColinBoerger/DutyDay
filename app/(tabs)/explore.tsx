import { useState } from "react";
import { StyleSheet, Image, Platform } from "react-native";
import { Text, View } from "react-native";
import type { SizeTokens } from "tamagui";
import { Button, Input, Label, TextArea, XStack, YStack } from "tamagui";

export default function TabTwoScreen() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [z, setZ] = useState("0");

  const [result, setResult] = useState(0);

  const onCalculate = () => {
    const intX = parseInt(x);
    const intY = parseInt(y);
    const intZ = parseInt(z);
    setResult(intX + intY + intZ);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CHECK MATE ATHEISTS</Text>
      <YStack
        width={200}
        minHeight={250}
        overflow="hidden"
        gap="$2"
        margin="$3"
        padding="$2"
      >
        <InputDemo size="$2" text="X" value={x} setValue={setX} />
        <InputDemo size="$2" text="Y" value={y} setValue={setY} />
        <InputDemo size="$2" text="Z" value={z} setValue={setZ} />
        <View style={styles.box}>
          <Text style={styles.text}>{result}</Text>
        </View>
        <Button size="$2" onPress={onCalculate}>
          Calculate
        </Button>
      </YStack>
    </View>
  );
}
const sum = (x: number, y: number, z: number) => x + y + z;
function InputDemo(props: {
  size: SizeTokens;
  text: string;
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <XStack alignItems="center" gap="$2">
      <Label htmlFor="name" style={styles.text}>
        {props.text}
      </Label>
      <Input
        flex={1}
        size={props.size}
        placeholder={props.text}
        value={props.value}
        onChangeText={props.setValue}
      />
    </XStack>
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
    backgroundColor: "#25292e",
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
