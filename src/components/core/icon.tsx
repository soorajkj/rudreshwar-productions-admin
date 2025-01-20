import * as React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { icons as lucideIcons, LucideProps } from "lucide-react";

export const icons = { ...lucideIcons };
export type IconTypes = keyof typeof icons;

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: IconTypes;
  label?: string;
}

export default function Icon(props: IconProps) {
  const { icon, label, ...rest } = props;
  const IconElement = icons[icon];

  return (
    <React.Fragment>
      <IconElement aria-hidden={true} focusable={false} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </React.Fragment>
  );
}
