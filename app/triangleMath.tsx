import { Triangle } from "@tamagui/lucide-icons";
import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Input, Label, Separator, XStack, YStack } from "tamagui";

export default function TriangleMath() {
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
          <Triangle size={200}></Triangle>
          <Label style={styles.triangleLabels}>B</Label>
        </XStack>
        <XStack justifyContent="center" alignItems="center">
          <Label style={styles.triangleLabels}>C</Label>
        </XStack>

        <Separator marginVertical={10} />
        <YStack padding="$1" gap="$2">
          <XStack justifyContent="center" gap={10}>
            <Input size={10} width={100} placeholder={`A `} />
            <Input size={10} width={100} placeholder={`A ∠`} />
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
