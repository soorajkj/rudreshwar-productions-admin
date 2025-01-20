"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof SeparatorStyles>
>((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(SeparatorStyles({ orientation, className }))}
      {...rest}
    />
  );
});

const SeparatorStyles = tv({
  base: [
    "pointer-events-none relative flex flex-1 shrink-0 items-center bg-neutral-200 dark:bg-neutral-800",
  ],
  variants: {
    orientation: {
      horizontal: ["h-px w-full"],
      vertical: ["h-full w-px"],
    },
  },
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
