export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-4 top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl sm:right-10 sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-4 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl sm:left-10 sm:h-72 sm:w-72" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
