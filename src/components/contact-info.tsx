import { siteConfig } from "@/src/data/site";
import { Card } from "@/src/shadcn/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

type ContactInfoProps = {
  variant?: "page" | "compact";
};

export default function ContactInfo({ variant = "page" }: ContactInfoProps) {
  const { contact } = siteConfig;

  return (
    <Card
      className={
        variant === "page"
          ? "overflow-hidden border-0 shadow-xl shadow-gray-200/50 rounded-2xl"
          : "border border-gray-200 shadow-sm"
      }
    >
      <div className={variant === "page" ? "bg-linear-to-br px-4 pt-6 sm:px-8 sm:pt-8" : "p-6 pb-0 sm:p-8 sm:pb-0"}>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Nos coordonnées</h2>
        <p className="mt-1 text-gray-600">N&apos;hésitez pas à nous contacter</p>
      </div>

      <div className="space-y-5 p-4 sm:space-y-6 sm:p-8">
        <ul className="space-y-6">
          <li className="group flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-gray-900">Adresse</p>
              <p className="text-sm text-gray-600">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </p>
            </div>
          </li>

          <li className="group flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-gray-900">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-sm text-gray-600 transition-colors hover:text-blue-700 sm:break-normal"
              >
                {contact.email}
              </a>
            </div>
          </li>

          <li className="group flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-gray-900">Téléphone</p>
              <a
                href={contact.phoneHref}
                className="text-sm text-gray-600 transition-colors hover:text-blue-700"
              >
                {contact.phone}
              </a>
            </div>
          </li>

          <li className="group flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-gray-900">Horaires</p>
              <p className="text-sm text-gray-600">{contact.hours}</p>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
