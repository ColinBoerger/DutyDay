import { AlignCenter, AlignLeft, AlignRight } from "@tamagui/lucide-icons";
import type { SizeTokens } from "tamagui";
import { Label, ToggleGroup, XStack, YStack } from "tamagui";
import React, { FC } from "react";

interface ToggleGroupComponentProps {
  size: SizeTokens;
  type: "single" | "multiple";
  orientation: "vertical" | "horizontal";
  name: string;
}
export const ToggleGroupComponent: FC<ToggleGroupComponentProps> = ({
  size,
  type,
  orientation,
  name,
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

      {/* @ts-ignore */}
      <ToggleGroup
        orientation={orientation}
        id={id}
        type={type as any} // since this demo switches between loosen types
        size={size}
        disableDeactivation={type === "single" ? true : undefined}
      >
        <ToggleGroup.Item value="left" aria-label="Left aligned">
          <AlignLeft />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center" aria-label="Center aligned">
          <AlignCenter />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" aria-label="Right aligned">
          <AlignRight />
        </ToggleGroup.Item>
      </ToggleGroup>
    </XStack>
  );
};
