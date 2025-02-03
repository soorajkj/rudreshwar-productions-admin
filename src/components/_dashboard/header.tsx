"use client";

import Container from "@/components/core/container";
import HeaderActions from "@/components/dashboard/header-actions";
import HeaderLogo from "@/components/dashboard/header-logo";
import HeaderNavigation from "@/components/dashboard/header-navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex-none bg-white shadow-sm transition-colors duration-500">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <div className="flex flex-1 items-center gap-6">
            <HeaderLogo />
            <HeaderNavigation />
          </div>
          <div className="flex items-end justify-end">
            <HeaderActions />
          </div>
        </div>
      </Container>
    </header>
  );
}
