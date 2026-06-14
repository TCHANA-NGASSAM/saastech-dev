"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { navLinks } from "@/src/data/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavbarProps = {
  variant?: "default" | "overlay";
};

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass =
    variant === "overlay"
      ? "text-gray-800 hover:text-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-3 sm:pt-4">
      <nav
        className={`mx-auto flex w-[min(94%,48rem)] items-center justify-between gap-3 rounded-3xl px-3 py-2.5 shadow-lg backdrop-blur-sm sm:rounded-4xl sm:px-4 sm:py-3 md:w-2/3 ${
          variant === "overlay" ? "bg-white/90" : "bg-white/95"
        }`}
        aria-label="Navigation principale"
      >
        <Link href="/" className="truncate text-lg font-bold sm:text-xl">
          SAASTECH
        </Link>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`text-sm font-medium ${linkClass}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="rounded-4xl border-0 bg-black shadow-none sm:size-default"
          >
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-black/40 lg:hidden"
            aria-label="Fermer le menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-4 top-[4.75rem] z-50 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:inset-x-6 lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="h-12 w-full rounded-full bg-black">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Contactez-nous
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
