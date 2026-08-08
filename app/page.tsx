import Link from "next/link";

const categories = [
  ["Power Tools", "Drills, saws, grinders and more.", "🔨"],
  ["Hand Tools", "Wrenches, sockets, screwdrivers and more.", "🧰"],
  ["Outdoor", "Pressure washers, blowers and lawn tools.", "🌿"],
  ["Automotive", "Garage tools for DIYers and mechanics.", "🚗"],
];

const guides = [
  ["Best Cordless Drills for Homeowners", "A practical starting point for choosing a drill."],
  ["DeWalt vs. Milwaukee", "What to consider when comparing two major tool platforms."],
  ["Best Tool Sets Under $200", "What matters most when you're building a starter kit."],
];

export default function Home() {
  return (
    <main>
      <section className="gold-gradient">
        <div className="container-tight grid gap-10 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-sm font-bold text-white">
              TOOL TITAN
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
              Find the Right Tool. Every Time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/75 md:text-xl">
              Honest reviews, clear comparisons, practical buying guides, and useful deals for DIYers, homeowners, mechanics, and pros.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/reviews" className="rounded-xl bg-black px-6 py-3 font-bold text-white hover:bg-zinc-800">
                Browse Reviews
              </Link>
              <Link href="/deals" className="rounded-xl border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white">
                See Deals
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-zinc-500">What are you looking for?</p>
            <div className="mt-3 flex rounded-2xl border border-zinc-200 bg-zinc-50 p-2">
              <input className="min-w-0 flex-1 bg-transparent px-3 py-3 outline-none" placeholder="Search drills, saws, tool sets..." />
              <button className="rounded-xl bg-black px-5 font-bold text-white">Search</button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Cordless drills", "Impact drivers", "Pressure washers", "Tool chests"].map((x) => (
                <Link key={x} href="/reviews" className="rounded-xl border p-3 font-semibold hover:border-black">
                  {x}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-bold text-yellow-600">SHOP BY CATEGORY</p>
            <h2 className="mt-2 text-3xl font-black">Start with what you need.</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {categories.map(([name, desc, icon]) => (
            <Link key={name} href="/reviews" className="rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-black hover:shadow-soft">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-5 text-xl font-black">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="container-tight py-16">
          <p className="font-bold text-yellow-400">BUYING GUIDES</p>
          <h2 className="mt-2 text-3xl font-black">Make a smarter purchase.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {guides.map(([title, desc]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{desc}</p>
                <Link href="/guides" className="mt-6 inline-block font-bold text-yellow-400">Read guide →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="rounded-3xl border bg-zinc-50 p-8 md:p-12">
          <p className="font-bold text-yellow-700">OUR STANDARD</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black">Help people first. Earn trust second. Monetize responsibly.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
            Tool Titan will recommend products because they fit the job—not simply because they offer the highest commission. Affiliate relationships will be disclosed clearly.
          </p>
        </div>
      </section>
    </main>
  );
}
