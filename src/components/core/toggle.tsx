"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof ToggleStyles>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(ToggleStyles({ className }))}
      {...rest}
    >
      {children}
    </TogglePrimitive.Root>
  );
});

export const ToggleStyles = tv({
  base: null,
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
