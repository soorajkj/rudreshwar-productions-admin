"use client";

import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { type, className, ...rest } = props;

    return (
      <input
        ref={ref}
        type={type}
        className={cn(InputStyles({ className }))}
        {...rest}
      />
    );
  }
);

const InputStyles = tv({
  base: [
    "h-10 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent px-3 py-1 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-300 focus-visible:border-violet-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/20 disabled:cursor-not-allowed disabled:bg-gray-050 disabled:placeholder:text-gray-500 aria-invalid:border-red-300 aria-invalid:focus-visible:ring-red-500/20",
  ],
});

Input.displayName = "Input";

export default Input;
