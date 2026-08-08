import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-black">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-yellow-400 text-lg">T</span>
          <span className="text-xl tracking-tight">TOOL TITAN</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
          <Link href="/reviews">Reviews</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/guides">Best Tools</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <Link href="/about" className="rounded-lg bg-black px-4 py-2 text-sm font-bold text-white">
          About
        </Link>
      </div>
    </header>
  );
}
