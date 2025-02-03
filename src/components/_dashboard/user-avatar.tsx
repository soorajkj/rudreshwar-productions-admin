"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Avatar from "@/components/core/avatar";

export default function UserAvatar() {
  const { data: session } = useSession();

  return (
    <Avatar.AvatarRoot>
      <Avatar.AvatarImage src={session?.user?.image || ""} alt="" />
      <Avatar.AvatarFallback>
        {session?.user?.email?.charAt(0).toUpperCase()}
      </Avatar.AvatarFallback>
    </Avatar.AvatarRoot>
  );
}
