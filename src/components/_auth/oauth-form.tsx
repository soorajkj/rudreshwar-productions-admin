"use client";

import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import Button from "@/components/core/button";

export default function OAuthForm() {
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("google");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <Button type="submit" variant="outline" block={true}>
        Sign in with Google
      </Button>
    </form>
  );
}
