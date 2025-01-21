import React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
