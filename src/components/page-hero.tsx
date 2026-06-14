export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 pb-16 pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
