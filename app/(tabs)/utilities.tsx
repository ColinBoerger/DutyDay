import { Link } from "expo-router";
import { StyleSheet, SafeAreaView } from "react-native";
import { YStack, ScrollView } from "tamagui";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView maxHeight="90%" width="90%" padding="$4" borderRadius="$4">
        <YStack overflow="hidden" gap="$4" margin="$3" padding="$2">
          <Link href="/timeCalc" style={styles.box}>
            Time Calculator
          </Link>
          <Link href="/timeCalc" style={styles.box}>
            Triangle Math
          </Link>
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
  },
  box: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 5,
    color: "white",
    textAlign: "center",
  },
});
