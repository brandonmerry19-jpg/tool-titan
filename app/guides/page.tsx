const guides = [
  "Best Cordless Drills for Homeowners",
  "Best Impact Drivers",
  "Best Tool Sets Under $200",
  "Best Pressure Washers",
  "Best Shop Vacuums",
  "Best Tool Chests for Garages",
];

export default function GuidesPage() {
  return (
    <main className="container-tight py-16">
      <p className="font-bold text-yellow-700">BUYING GUIDES</p>
      <h1 className="mt-2 text-4xl font-black md:text-5xl">Best tools for the job.</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {guides.map((g, i) => (
          <article key={g} className="rounded-2xl border p-6">
            <p className="text-sm font-bold text-zinc-500">GUIDE {String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 text-xl font-black">{g}</h2>
            <p className="mt-2 text-sm text-zinc-600">Coming soon as part of the Tool Titan editorial library.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
