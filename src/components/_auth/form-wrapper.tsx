import * as React from "react";
import { cn } from "@/utils/classes";

interface FormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function FormWrapper(props: FormWrapperProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cn("grid w-full max-w-sm gap-6", className)} {...rest}>
      {children}
    </div>
  );
}
