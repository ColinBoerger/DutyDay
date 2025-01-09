import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { TimeAdder } from "@/components/TimeAdder";

export default function TimeCalc() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: "Utilities",
        }}
      />
      <ThemedView style={styles.container}>
        <TimeAdder />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
