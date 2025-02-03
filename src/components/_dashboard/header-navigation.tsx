"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/utils/classes";
import NavigationMenu from "@/components/core/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Casting",
    href: "/dashboard/casting",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Enquiries",
    href: "/dashboard/enquiries",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Agents",
    href: "/dashboard/agents",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export default function HeaderNavigation() {
  return (
    <NavigationMenu.NavigationMenuRoot>
      <NavigationMenu.NavigationMenuList>
        <NavigationMenu.NavigationMenuItem>
          <NavigationMenu.NavigationMenuTrigger>
            Components
          </NavigationMenu.NavigationMenuTrigger>
          <NavigationMenu.NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.NavigationMenuContent>
        </NavigationMenu.NavigationMenuItem>
        <NavigationMenu.NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenu.NavigationMenuLink
              className={NavigationMenu.NavigationMenuTriggerStyle({})}
            >
              Documentation
            </NavigationMenu.NavigationMenuLink>
          </Link>
        </NavigationMenu.NavigationMenuItem>
        <NavigationMenu.NavigationMenuItem>
          <Link href="/dashboard/temp" legacyBehavior passHref>
            <NavigationMenu.NavigationMenuLink
              className={NavigationMenu.NavigationMenuTriggerStyle({})}
            >
              Template
            </NavigationMenu.NavigationMenuLink>
          </Link>
        </NavigationMenu.NavigationMenuItem>
      </NavigationMenu.NavigationMenuList>
    </NavigationMenu.NavigationMenuRoot>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={"/"}
          className={cn(
            "hover:bg-gray-50 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-gray-900">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenu.NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
