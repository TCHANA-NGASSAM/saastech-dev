import ServiceCard from "@/src/components/service-card";
import { getServiceGridItemClass, SERVICE_GRID } from "@/src/components/section-shell";
import { services } from "@/src/data/services";

type ServicesGridProps = {
  showFeatures?: boolean;
  linkLabel?: string;
};

export default function ServicesGrid({
  showFeatures = false,
  linkLabel,
}: ServicesGridProps) {
  return (
    <div className={SERVICE_GRID}>
      {services.map((service, index) => (
        <div key={service.slug} className={getServiceGridItemClass(index)}>
          <ServiceCard
            service={service}
            showFeatures={showFeatures}
            linkLabel={linkLabel}
          />
        </div>
      ))}
    </div>
  );
}
