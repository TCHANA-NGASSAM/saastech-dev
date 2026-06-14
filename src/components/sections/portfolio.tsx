import PortfolioClient from "./portfolio-client";
import { getFeaturedProjects } from "@/src/data/projects";

export default function Portfolio() {
  return <PortfolioClient caseStudies={getFeaturedProjects()} />;
}
