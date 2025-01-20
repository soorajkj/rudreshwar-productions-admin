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
  width?: "auto" | "full";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      intent,
      size,
      shape,
      width,
      disabled,
      className,
      ...rest
    } = props;
    const COMPONENT = asChild ? SLOT : DEFAULT_ELEMENT;

    return (
      <COMPONENT
        ref={ref}
        className={cn(
          ButtonStyles({
            intent,
            size,
            shape,
            width,
            disabled,
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
    "relative isolate box-border inline-flex items-center justify-center gap-x-2 border border-transparent font-medium no-underline transition-colors duration-300 before:absolute after:absolute",
  ],
  variants: {
    intent: {
      primary: [
        "transform rounded-lg bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80",
      ],
      secondary: [
        "bg-neutral-100 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800",
      ],
      warning: [],
      danger: [],
    },
    size: {
      "extra-small":
        "h-8 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.1)-1px)] text-xs/4 lg:text-[0.800rem]/4",
      small:
        "h-9 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-sm/5 lg:text-sm/5",
      medium:
        "h-10 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing.2)-1px)] text-base lg:text-sm/6",
      large:
        "h-10 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base sm:h-11 sm:px-[calc(theme(spacing.5)-1px)] lg:text-base/7 [&>[data-slot=icon]]:mx-[-3px] sm:[&>[data-slot=icon]]:size-5",
      "square-petite": "size-9 shrink-0 [&_[data-slot=icon]]:text-current",
    },
    shape: {
      square:
        "rounded-lg before:rounded-[calc(theme(borderRadius.lg)-1px)] after:rounded-[calc(theme(borderRadius.lg)-1px)] dark:after:rounded-lg",
      circle:
        "rounded-[9999px] before:rounded-[9998px] after:rounded-[9998px] dark:after:rounded-[9999px]",
    },
    disabled: {
      false: "forced-colors:disabled:text-[GrayText]",
      true: "cursor-default opacity-60 forced-colors:disabled:text-[GrayText]",
    },
    isPending: {
      true: "cursor-default",
    },
    width: {
      auto: "w-auto",
      full: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    shape: "square",
    width: "auto",
  },
});
