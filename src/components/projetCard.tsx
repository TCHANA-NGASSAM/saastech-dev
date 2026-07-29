import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../shadcn/components/ui/card";
import { Button } from "../shadcn/components/ui/button";

type projects = {
  title: string;
  category: string;
  description: string;
  price: string;
  company: string;
  badge: string;
};

const ProjetCard = ({ project }: { project: projects }) => {
  return (
    <Card className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6 flex-col justify-between h-full">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {project.category.toUpperCase()}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            {project.title}
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            {project.description}
          </p>
        </div>

        <div className="my-6 border-t border-dashed border-slate-200" />

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {project.badge}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjetCard;
