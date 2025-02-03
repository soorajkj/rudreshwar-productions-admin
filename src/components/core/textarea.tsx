import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof TextareaStyles> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ disabled, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(TextareaStyles({ className }))}
        disabled={disabled}
        {...props}
      />
    );
  }
);

const TextareaStyles = tv({
  base: [
    "disabled:bg-gray-50 flex min-h-32 w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm leading-6 transition-colors duration-100 placeholder:text-gray-500 disabled:placeholder:text-gray-500",
    "focus-visible:border-primary-400 focus-visible:ring-primary-600/20",
    "aria-invalid:focus-visible:border-error-400 aria-invalid:focus-visible:ring-error-600/20 aria-invalid:border-error-300",
  ],
});

Textarea.displayName = "Textarea";

export default Textarea;
