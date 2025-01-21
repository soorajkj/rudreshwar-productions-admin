import Link from "next/link";
import Container from "@/components/core/container";
import Icon from "@/components/core/icon";
import Separator from "@/components/core/separator";
import Signout from "@/components/dashboard/signout";
import ThemeChanger from "@/components/theme-changer";

export default function Header() {
  return (
    <header className="sticky left-0 top-0 w-full bg-white/50 backdrop-blur-md dark:bg-neutral-950/50">
      <Container>
        <div className="flex h-14 items-center justify-between gap-6">
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center gap-2">
              <Icon icon="Film" className="size-5 text-white" />
              <span className="font-semibold uppercase text-white">
                Dashboard
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-end justify-end">
            <div className="flex items-center gap-4">
              <ThemeChanger />
              <Signout />
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex h-14 flex-1 items-center justify-start">
          <nav className="flex items-center gap-6">
            {["Home", "Docs", "Components", "Themes", "Ecosystem"].map(
              (menu, i) => (
                <span key={i} className="cursor-pointer text-sm font-medium">
                  {menu}
                </span>
              )
            )}
          </nav>
        </div>
      </Container>
      <Separator />
    </header>
  );
}
