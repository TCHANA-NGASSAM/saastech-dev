"use client";
import { Button } from "@/src/shadcn/components/ui/button";

import {
  Card,
  CardContent, 
  CardFooter,
  CardHeader,
} from "@/src/shadcn/components/ui/card";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col items-center pt-4 fixed top-0 left-0 w-full z-50">
      <Card className="w-2/3 h-15 rounded-4xl flex flex-row items-center justify-between p-0 px-4 bg-white/90 backdrop-blur-sm shadow-lg">
        <CardHeader className="p-0">
          <Link href="/" className="font-bold text-xl">
            SAASTECH
          </Link>
        </CardHeader>
        <CardContent className="flex items-center justify-between flex-row gap-5 p-0">
          <Link href={"/"}>Accueil</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"#portfolio"}>Portfolio</Link>
          <Link href={"/projet"}>Projets</Link>
          <Link href={"/about"}>À propos</Link>
        </CardContent>
        <CardFooter className="p-0 bg-transparent">
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-4xl border-0 bg-black shadow-none"
            // asChild
          >
            <Link href={"/contact"}>Contactez-nous</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Navbar;
