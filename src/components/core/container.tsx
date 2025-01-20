import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

interface ContainerProps
  extends React.ComponentPropsWithRef<"div">,
    VariantProps<typeof ContainerStyles> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cn(ContainerStyles({ className }))} {...rest}>
      {children}
    </div>
  );
}

const ContainerStyles = tv({
  base: ["container mx-auto w-full max-w-screen-xl px-4"],
});
