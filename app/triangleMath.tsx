import { Triangle } from "@tamagui/lucide-icons";
import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Input, Label, Separator, XStack, YStack } from "tamagui";

export default function TriangleMath() {
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

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  triangleLabels: {
    fontSize: 40,
  },
});
