import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "@/utils/session";
import Container from "@/components/core/container";
import Header from "@/components/dashboard/header";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout(props: LayoutProps) {
  const session = await getServerSession();

  if (!session) redirect("/auth/signin");

  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <main className="my-8 flex-1">
        <Container>{props.children}</Container>
      </main>
    </div>
  );
}
