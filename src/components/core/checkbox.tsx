"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";
import Icon from "@/components/core/icon";

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof CheckboxStyles>
>(({ size = "md", className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(CheckboxStyles({ size, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Icon icon="Check" className="size-4/5" strokeWidth={3.5} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

const CheckboxStyles = tv({
  base: [
    "peer shrink-0 overflow-hidden rounded border border-gray-300 focus-visible:border-violet-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/20 disabled:cursor-not-allowed disabled:bg-gray-050 data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-050 disabled:data-[state=checked]:text-gray-300",
  ],
  variants: {
    size: {
      sm: ["size-4"],
      md: ["size-5"],
    },
  },
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
