import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

type TitleStyleProps = VariantProps<typeof TitleStyles>;

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<TitleStyleProps, "level" | "weight"> {
  variant: `${NonNullable<TitleStyleProps["level"]>}/${NonNullable<
    TitleStyleProps["weight"]
  >}`;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { children, variant, className, ...rest } = props;

  const [level, weight] = variant.split("/") as [
    TitleStyleProps["level"],
    TitleStyleProps["weight"],
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = `h${level}`;

  return (
    <Comp
      ref={ref}
      className={cn(TitleStyles({ level, weight, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
});

type TextStyleProps = VariantProps<typeof TextStyles>;
type TextElement = keyof Pick<
  React.JSX.IntrinsicElements,
  "p" | "code" | "strong" | "span" | "small" | "mark" | "kbd"
>;

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Omit<TextStyleProps, "size" | "weight"> {
  variant?: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<
    TextStyleProps["weight"]
  >}`;
  as?: TextElement;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { as: Tag = "p", children, className, variant, ...rest } = props;

  const [size, weight] = variant?.split("/") as [
    TextStyleProps["size"],
    TextStyleProps["weight"],
  ];

  return (
    <Tag
      ref={ref}
      className={cn(TextStyles({ size, weight, className }))}
      {...rest}
    >
      {children}
    </Tag>
  );
});

const TitleStyles = tv({
  base: [],
  variants: {
    level: {
      1: "text-7xl",
      2: "text-6xl",
      3: "text-5xl",
      4: "text-4xl",
      5: "text-3xl",
      6: "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

const TextStyles = tv({
  base: [],
  variants: {
    size: {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

Title.displayName = "Title";
Text.displayName = "Text";

const Typography = { Title, Text };

export default Typography;
