import { ArrowUpRight, Bookmark } from "lucide-react";
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
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {project.price}
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
            aria-label="Bookmark project"
          >
            <Bookmark className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            {project.category}
          </p>
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
            <p className="text-xs text-slate-500">{project.company}</p>
          </div>
          <Button className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900">
            Voir
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjetCard;
