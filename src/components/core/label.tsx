"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof LabelStyles>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(LabelStyles({ className }))}
      {...rest}
    >
      {children}
    </LabelPrimitive.Root>
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;

const LabelStyles = tv({
  base: [
    "inline-block text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed",
  ],
});
