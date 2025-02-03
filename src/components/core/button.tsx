"use client";

import * as React from "react";
import { Slot as SLOT } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

const DEFAULT_ELEMENT = "button";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof ButtonStyles>, "disabled"> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      variant = "default",
      size = "md",
      iconOnly = false,
      block = false,
      className,
      ...rest
    } = props;
    const COMPONENT = asChild ? SLOT : DEFAULT_ELEMENT;

    return (
      <COMPONENT
        ref={ref}
        className={cn(
          ButtonStyles({
            variant,
            size,
            block,
            iconOnly,
            className,
          })
        )}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;

const ButtonStyles = tv({
  base: [
    "inline-flex grow items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent text-sm font-medium transition-colors",
  ],
  variants: {
    variant: {
      default: ["bg-violet-600 text-white hover:bg-violet-700"],
      destructive: ["bg-red-600 text-white hover:bg-red-700"],
      outline: ["border-gray-300 bg-white text-gray-700 hover:bg-gray-050"],
      secondary: ["bg-gray-950 text-white hover:bg-gray-900"],
      ghost: ["text-gray-600 hover:bg-gray-050 hover:text-gray-700"],
      link: ["text-gray-600 underline-offset-4 hover:underline"],
    },
    size: {
      sm: ["h-9"],
      md: ["h-10"],
      lg: ["h-11"],
      xl: ["h-12"],
    },
    block: {
      true: ["w-full"],
    },
    iconOnly: {
      true: ["aspect-square"],
    },
  },
});
