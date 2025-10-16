import { TriangleRight } from "@tamagui/lucide-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  Button,
  Input,
  Label,
  Separator,
  XStack,
  YStack,
  Square,
} from "tamagui";

export default function TriangleMath() {
  const [aSide, setASide] = useState(0);
  const [aAngle, setAAngle] = useState(90);

  const [bSide, setBSide] = useState(0);
  const [bAngle, setBAngle] = useState(Number);

  const [cSide, setCSide] = useState(0);
  const [cAngle, setCAngle] = useState(0);

  //@TODO add functionality and an alert if the triangle is valid
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: "Utilities",
        }}
      />
      <SafeAreaView>
        <XStack justifyContent="center" alignItems="center">
          <Label style={styles.triangleLabels}>A</Label>
          <TriangleRight size={200}></TriangleRight>
          <Label style={styles.triangleLabels}>B</Label>
        </XStack>
        <XStack justifyContent="center" alignItems="center">
          <Label style={styles.triangleLabels}>C</Label>
        </XStack>

        <Separator marginVertical={10} />
        <YStack padding="$1" gap="$2">
          <XStack justifyContent="center" gap={10}>
            <Input size={10} width={100} placeholder={`A`} />
            <Input size={10} width={100} placeholder={`90`} />
          </XStack>
          <XStack justifyContent="center" gap={10}>
            <Input size={10} width={100} placeholder={`B`} />
            <Input size={10} width={100} placeholder={`B ∠`} />
          </XStack>
          <XStack justifyContent="center" gap={10}>
            <Input size={10} width={100} placeholder={`C`} />
            <Input size={10} width={100} placeholder={`C ∠`} />
          </XStack>
          <XStack justifyContent="center">
            <Button width={210}>Calculate</Button>
          </XStack>
        </YStack>
      </SafeAreaView>
    </>
  );
}

const validTriangleLegs = (a: number, b: number, c: number) => {
  if (a > b && a > c) {
    if (a > b + c) return true;
  } else if (b > a && b > c) {
    if (b > a + c) return true;
  } else if (c > b && c > a) {
    if (c > b + a) return true;
  }
  return false;
};

const validTriangleAngles = (a: number, b: number, c: number) => {
  //@TODO give valid inputs
};

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  triangleLabels: {
    fontSize: 40,
  },
});
