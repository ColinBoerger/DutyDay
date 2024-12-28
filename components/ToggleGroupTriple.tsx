import { AlignCenter, AlignLeft, AlignRight } from "@tamagui/lucide-icons";
import type { SizeTokens } from "tamagui";
import { Label, ToggleGroup, View, XStack, YStack, Text } from "tamagui";
import { styled } from "tamagui";
import React, { FC, useState } from "react";

interface ToggleGroupTripleProps {
  size: SizeTokens;
  type: "single" | "multiple";
  orientation: "vertical" | "horizontal";
  name: string;
  value: string;
  valuesToToggle: string[];
  onChange: (value: string) => void;
}
export const ToggleGroupTriple: FC<ToggleGroupTripleProps> = ({
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
        <ToggleGroup.Item value="left" aria-label="Left aligned">
          <View>
            <Text>Normal</Text>
          </View>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" aria-label="Right aligned">
          <View>
            <Text>Augemented</Text>
          </View>
        </ToggleGroup.Item>
      </ToggleGroup>
    </XStack>
  );
};
