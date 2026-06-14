import type { MetadataRoute } from "next";
import { projects } from "@/src/data/projects";
import { services } from "@/src/data/services";
import { siteConfig } from "@/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = ["", "/services", "/contact", "/projet"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projet/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
