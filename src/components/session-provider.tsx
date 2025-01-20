"use client";

import * as React from "react";
import { Session } from "@/types/auth";
import { LayoutProps } from "@/types/layout";

interface SessionProviderProps extends LayoutProps {
  session: Session;
}

export const SessionContext = React.createContext<Session>(null);

export default function SessionProvider(props: SessionProviderProps) {
  const { session, children } = props;

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
