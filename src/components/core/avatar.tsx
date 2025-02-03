"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

interface AvatarRootProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof AvatarRootStyles> {}

const AvatarRoot = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarRootProps
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(AvatarRootStyles({ className }))}
      {...rest}
    >
      {children}
      <span className="absolute left-7 top-0 size-3 rounded-full border-2 border-white bg-green-500"></span>
    </AvatarPrimitive.Root>
  );
});

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof AvatarFallbackStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(AvatarFallbackStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    VariantProps<typeof AvatarImageStyles>
>((props, ref) => {
  const { src, className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      src={src}
      className={cn(AvatarImageStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarRootStyles = tv({
  base: [
    "relative inline-flex aspect-square size-10 shrink-0 items-center justify-center rounded-full border-gray-300 bg-gray-100",
  ],
});

const AvatarFallbackStyles = tv({
  base: [
    "bg-gray-50 flex h-full w-full items-center justify-center rounded-full font-semibold text-gray-500",
  ],
});

const AvatarImageStyles = tv({
  base: ["static block aspect-square h-full w-full overflow-clip rounded-full"],
});

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const Avatar = { AvatarRoot, AvatarFallback, AvatarImage };

export default Avatar;
