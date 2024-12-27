import React, { useState } from "react";
import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import { Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Value } from "react-time-picker/dist/cjs/shared/types";
import type { SizeTokens } from "tamagui";
import { View } from "tamagui";

export function DateBox(props: Date) {
  return (
    <View>
      <Text>My First Component</Text>
    </View>
  );
}
