import Link from "next/link";
import { Code2, Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { services } from "@/src/data/services";
import { siteConfig } from "@/src/data/site";

export default function Footer() {
  const { contact, social } = siteConfig;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:mb-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">{siteConfig.name}</h3>
            <p className="mb-6 text-gray-400">{siteConfig.tagline}</p>
            <div className="flex gap-4">
              <Link
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <Share2 className="h-5 w-5" />
              </Link>
              <Link
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="Twitter"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="GitHub"
              >
                <Code2 className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Entreprise</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projet" className="text-gray-400 transition hover:text-white">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/#expertises" className="text-gray-400 transition hover:text-white">
                  Expertises
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-sm text-gray-400 transition hover:text-white sm:break-normal"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a
                  href={contact.phoneHref}
                  className="text-gray-400 transition hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-gray-400">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-gray-400 sm:text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/contact" className="text-sm text-gray-400 transition hover:text-white">
                Contact
              </Link>
              <Link href="/services" className="text-sm text-gray-400 transition hover:text-white">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
