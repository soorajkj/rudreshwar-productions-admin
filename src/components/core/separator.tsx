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
    "pointer-events-none relative flex flex-1 shrink-0 items-center gap-2 text-xs font-medium text-gray-600",
  ],
  variants: {
    orientation: {
      horizontal: [
        "before:h-px before:w-full before:flex-1 before:bg-gray-200 after:h-px after:w-full after:flex-1 after:bg-gray-200",
      ],
      vertical: ["h-full w-px"],
    },
  },
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
