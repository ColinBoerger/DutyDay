import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "tamagui";

export default function TimeCalc() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: "Home",
        }}
      />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen Exists</ThemedText>
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
