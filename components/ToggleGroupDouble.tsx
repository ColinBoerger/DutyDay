import type { SizeTokens } from "tamagui";
import { Label, ToggleGroup, View, XStack, YStack, Text } from "tamagui";
import React, { FC, useState } from "react";

interface ToggleGroupDoubleProps {
  size: SizeTokens;
  type: "single" | "multiple";
  name: string;
  value: string;
  id: string;
  valuesToToggle: string[];
  onChange: (value: string) => void;
}
export const ToggleGroupDouble: FC<ToggleGroupDoubleProps> = ({
  size,
  type,
  name,
  value,
  valuesToToggle,
  id,
  onChange,
}) => {
  return (
    <XStack alignItems="center" justifyContent="space-between">
      <Label size={size} htmlFor={id} textWrap="wrap" width={100}>
        {name}
      </Label>

      <ToggleGroup
        id={id}
        type={type as any} // since this demo switches between loosen types
        size={size}
        disableDeactivation={type === "single" ? true : undefined}
        onValueChange={onChange}
        value={value}
        margin={1}
      >
        <ToggleGroup.Item value={valuesToToggle[0]} width={100}>
          <Text>{valuesToToggle[0]}</Text>
        </ToggleGroup.Item>
        <ToggleGroup.Item value={valuesToToggle[1]} width={100}>
          <Text>{valuesToToggle[1]}</Text>
        </ToggleGroup.Item>
      </ToggleGroup>
    </XStack>
  );
};
