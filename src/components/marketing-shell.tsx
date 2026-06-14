import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/sections/footer";

type MarketingShellProps = {
  children: React.ReactNode;
  navVariant?: "default" | "overlay";
  className?: string;
};

export default function MarketingShell({
  children,
  navVariant = "default",
  className = "bg-white",
}: MarketingShellProps) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Navbar variant={navVariant} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
