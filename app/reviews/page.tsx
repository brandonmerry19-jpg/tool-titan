import Link from "next/link";

const reviews = [
  { title: "Best Cordless Drills for Homeowners", tag: "Power Tools", text: "A practical guide to choosing the right drill for common home projects." },
  { title: "Best Impact Drivers", tag: "Power Tools", text: "What to look for in torque, speed, comfort, and battery platforms." },
  { title: "Best Tool Sets for Beginners", tag: "Hand Tools", text: "A simple starting point for building a useful home toolbox." },
];

export default function ReviewsPage() {
  return (
    <main className="container-tight py-16">
      <p className="font-bold text-yellow-700">TOOL REVIEWS</p>
      <h1 className="mt-2 text-4xl font-black md:text-5xl">Reviews that help you decide.</h1>
      <p className="mt-4 max-w-2xl text-zinc-600">Our review system is designed around practical use, trade-offs, value, and who the product is actually for.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <article key={r.title} className="rounded-2xl border p-6 hover:shadow-soft">
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-900">{r.tag}</span>
            <h2 className="mt-5 text-xl font-black">{r.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{r.text}</p>
            <Link href="/guides" className="mt-6 inline-block font-bold">Read more →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
