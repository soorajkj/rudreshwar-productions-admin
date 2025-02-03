"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils/classes";

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-neutral-900 mb-4 flex h-10 items-center rounded-lg px-1",
      className
    )}
    {...props}
  />
));

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "data-[state=active]:text-neutral-050 data-[state=active]:bg-secondary text-neutral-500 inline-flex h-8 items-center justify-center gap-1 whitespace-nowrap rounded px-3 text-sm font-medium leading-6 transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 disabled:opacity-60 data-[state=active]:font-medium",
      className
    )}
    {...props}
  />
));

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));

TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = { TabsRoot, TabsList, TabsTrigger, TabsContent };

export default Tabs;
