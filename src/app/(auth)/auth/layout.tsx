import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "@/utils/session";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout(props: LayoutProps) {
  const session = await getServerSession();

  if (session) redirect("/dashboard");

  return (
    <div className="flex h-full min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
