import type { SizeTokens } from "tamagui";
import { Label, ToggleGroup, View, XStack, YStack, Text } from "tamagui";
import React, { FC, useState } from "react";

interface ToggleGroupDoubleProps {
  size: SizeTokens;
  type: "single" | "multiple";
  orientation: "vertical" | "horizontal";
  name: string;
  value: string;
  valuesToToggle: string[];
  onChange: (value: string) => void;
}
export const ToggleGroupDouble: FC<ToggleGroupDoubleProps> = ({
  size,
  type,
  orientation,
  name,
  value,
  valuesToToggle,
  onChange,
}) => {
  const id = `switch-${size.toString().slice(1)}-${type}`;
  return (
    <XStack
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
      space="$4"
    >
      <Label
        paddingRight="$0"
        justifyContent="flex-end"
        size={size}
        htmlFor={id}
      >
        {name}
      </Label>

      <ToggleGroup
        orientation={orientation}
        id={id}
        type={type as any} // since this demo switches between loosen types
        size={size}
        disableDeactivation={type === "single" ? true : undefined}
        onValueChange={onChange}
        value={value}
      >
        <ToggleGroup.Item value={valuesToToggle[0]} aria-label="Left aligned">
          <View>
            <Text>{valuesToToggle[0]}</Text>
          </View>
        </ToggleGroup.Item>
        <ToggleGroup.Item value={valuesToToggle[1]} aria-label="Right aligned">
          <View>
            <Text>{valuesToToggle[1]}</Text>
          </View>
        </ToggleGroup.Item>
      </ToggleGroup>
    </XStack>
  );
};
