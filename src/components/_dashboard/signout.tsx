"use client";

import { FormEvent } from "react";
import { signOut } from "next-auth/react";
import Button from "@/components/core/button";

export default function Signout() {
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signOut();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleFormSubmit}
      autoComplete="off"
    >
      <Button type="submit" size="sm">
        Signout
      </Button>
    </form>
  );
}
