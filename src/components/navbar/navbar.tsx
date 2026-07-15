"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/shadcn/components/ui/card";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  // { href: "#portfolio", label: "Portfolio" },
  { href: "/projet", label: "Projets" },
  { href: "/about", label: "À propos" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    if (href === "/services") {
      return pathname === href || pathname.startsWith("/services/");
    }

    return pathname === href;
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4">
      <Card className="w-full max-w-5xl rounded-[2rem] border border-black/5 bg-white/90 p-0 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <CardHeader className="p-0">
            <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
              SAASTECH
            </Link>
          </CardHeader>

          <CardContent className="hidden items-center justify-between gap-5 p-0 md:flex">
            {links.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`transition-colors ${
                    active ? "font-semibold text-blue-500" : "text-black/70 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </CardContent>

          <CardFooter className="hidden bg-transparent p-0 md:flex">
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full border-0 bg-black shadow-none"
            >
              <Link href="/contact" onClick={closeMenu}>
                Contactez-nous
              </Link>
            </Button>
          </CardFooter>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </Button>
        </div>

        {isOpen ? (
          <div className="border-t border-black/10 px-4 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => {
                const active = isActiveLink(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-sm font-medium transition-colors ${
                      active ? "text-blue-500" : "text-black/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Button
              asChild
              variant="default"
              size="lg"
              className="mt-4 w-full rounded-full border-0 bg-black shadow-none"
            >
              <Link href="/contact" onClick={closeMenu}>
                Contactez-nous
              </Link>
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
}

export default Navbar;
