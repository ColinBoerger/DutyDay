import { Link } from "expo-router";
import { StyleSheet, SafeAreaView } from "react-native";
import { YStack, ScrollView, View } from "tamagui";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View style={styles.menu}>
        <ScrollView maxHeight="90%" width="90%" padding="$4" borderRadius="$4">
          <YStack overflow="hidden" gap="$0" margin="$3" padding="$2">
            <Link href="/timeCalc" style={styles.box}>
              Time Calculator
            </Link>
            <Link href="/triangleMath" style={styles.box}>
              Triangle Math
            </Link>
          </YStack>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  box: {
    borderColor: "grey",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  menu: {
    width: "100%",
    height: "90%",
    alignItems: "center",
  },
});
