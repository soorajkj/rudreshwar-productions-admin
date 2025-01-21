import React from "react";
import Container from "@/components/core/container";
import Header from "@/components/dashboard/header";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <main className="my-8 flex-1">
        <Container>{props.children}</Container>
      </main>
    </div>
  );
}
