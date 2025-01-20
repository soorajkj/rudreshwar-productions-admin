"use client";

import React from "react";
import Icon, { IconTypes } from "./core/icon";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";
import ToggleGroup from "@/components/core/toggle-group";

const Icons: { [key: string]: IconTypes } = {
  light: "Sun",
  dark: "Moon",
  system: "Laptop",
};

export default function ThemeChanger() {
  const { themes, theme, setTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) return null;

  return (
    <ToggleGroup.ToggleGroupRoot
      type="single"
      value={theme}
      onValueChange={(value) => setTheme(value)}
      className="gap-0 divide-x divide-neutral-800 rounded-md border border-neutral-800"
    >
      {themes.map((theme, i) => (
        <ToggleGroup.ToggleGroupItem
          key={i}
          value={theme}
          className="inline-flex size-7 items-center justify-center"
        >
          <Icon icon={Icons[theme]} className="size-4" />
        </ToggleGroup.ToggleGroupItem>
      ))}
    </ToggleGroup.ToggleGroupRoot>
  );
}
