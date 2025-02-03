"use client";

import React from "react";
import Link, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import _ from "lodash";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/utils/classes";

interface ActiveLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    NextLinkProps,
    VariantProps<typeof ActiveLinkStyles> {}

export default function ActiveLink(props: ActiveLinkProps) {
  const { className, href, ...rest } = props;
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(ActiveLinkStyles({ className }))}
      data-active={_.isEqual(pathname, href) ? true : false}
      {...rest}
    />
  );
}

const ActiveLinkStyles = tv({ base: ["data-[active=true]:text-primary-600"] });
