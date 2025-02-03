"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";
import Icon from "@/components/core/icon";

const RadioGroupRoot = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof RadioGroupItemStyles>
>(({ size = "md", className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(RadioGroupItemStyles({ size, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Icon icon="Circle" className="size-2 fill-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

const RadioGroupItemStyles = tv({
  base: [
    "aspect-square rounded-full border border-gray-300 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-050 data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600 disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-050 disabled:data-[state=checked]:text-gray-300",
  ],
  variants: {
    size: {
      sm: ["size-4"],
      md: ["size-5"],
    },
  },
});

RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroup = { RadioGroupRoot, RadioGroupItem };

export default RadioGroup;
