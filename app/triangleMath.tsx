import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function TriangleMath() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: "Utilities",
        }}
      />
      <SafeAreaView></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
