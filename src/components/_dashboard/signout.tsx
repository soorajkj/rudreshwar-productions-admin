"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";

export default function Signout() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => router.refresh(),
          },
        });
      }}
    >
      Signout
    </Button>
  );
}
