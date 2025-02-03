import React from "react";
import Link from "next/link";
import Button from "@/components/core/button";

export default function AuthError() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <Button block={true} asChild>
        <Link href={"/"}>Back to Login</Link>
      </Button>
    </div>
  );
}
