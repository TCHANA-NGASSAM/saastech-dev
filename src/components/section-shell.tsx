import { cn } from "@/src/shadcn/lib/utils";

const variantStyles = {
  default: "bg-white text-foreground",
  muted: "bg-gray-50 text-foreground",
  dark: "bg-slate-900 text-white",
  gradient: "bg-gradient-to-r from-blue-600 to-blue-800 text-white",
  accent: "bg-blue-600 text-white",
} as const;

type SectionShellProps = {
  id?: string;
  variant?: keyof typeof variantStyles;
  /** Séparateur visuel entre sections de même fond — garde un padding haut/bas complet */
  divider?: boolean;
  size?: "default" | "lg" | "compact";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const sizeStyles = {
  default: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-28",
  compact: "py-14 sm:py-16 lg:py-20",
} as const;

const dividerBorder = {
  default: "border-t border-gray-100",
  muted: "border-t border-gray-200/80",
  dark: "border-t border-white/10",
  gradient: "border-t border-white/10",
  accent: "border-t border-white/15",
} as const;

/** Grille standard pour cartes et contenus de section */
export const SECTION_GRID =
  "grid gap-8 sm:gap-10 lg:gap-12";

/** Grille 5 services : 3 en haut, 2 centrés en bas (lg+) */
export const SERVICE_GRID = `${SECTION_GRID} md:grid-cols-2 lg:grid-cols-6`;

export function getServiceGridItemClass(index: number) {
  return cn(
    "lg:col-span-2",
    index === 3 && "lg:col-start-2",
    index === 4 && "lg:col-start-4",
  );
}

/** Espacement interne des cartes marketing */
export const MARKETING_CARD =
  "gap-0 overflow-hidden border border-gray-200 bg-white py-0 shadow-sm";
export const MARKETING_CARD_HEADER = "gap-3 px-6 pt-6 pb-3";
export const MARKETING_CARD_CONTENT = "px-6 pb-5";
export const MARKETING_CARD_FOOTER =
  "border-t border-gray-100 bg-white px-6 pb-6 pt-4";

export function SectionShell({
  id,
  variant = "default",
  divider = false,
  size = "default",
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-4 sm:scroll-mt-28 sm:px-6 lg:px-8",
        variantStyles[variant],
        sizeStyles[size],
        divider && dividerBorder[variant],
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-14 lg:mb-16",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      <h2
        className={cn(
          "mb-4 text-3xl font-bold tracking-tight sm:mb-5 sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed text-muted-foreground sm:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
