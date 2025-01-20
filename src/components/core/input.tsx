"use client";

import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { type, className, ...rest } = props;

    return (
      <input
        ref={ref}
        type={type}
        className={InputStyles({ className })}
        {...rest}
      ></input>
    );
  }
);

const InputStyles = tv({
  base: [
    "peer flex h-11 w-full grow rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm leading-6 text-neutral-700 placeholder-neutral-400/70 transition-colors duration-100 focus:border-blue-400 focus:outline-none focus:outline focus:outline-2 focus:-outline-offset-1 focus:ring focus:ring-blue-300 focus:ring-opacity-40 aria-invalid:border-red-500 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:placeholder-neutral-500 dark:focus:border-blue-300 dark:aria-invalid:border-red-600",
  ],
});

Input.displayName = "Input";

export default Input;
