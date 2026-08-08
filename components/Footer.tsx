import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-950 text-zinc-300">
      <div className="container-tight grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="text-xl font-black text-white">TOOL TITAN</div>
          <p className="mt-3 max-w-sm text-sm leading-6">Find the Right Tool. Every Time.</p>
        </div>
        <div>
          <p className="font-bold text-white">Explore</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/reviews">Reviews</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/guides">Buying Guides</Link>
            <Link href="/deals">Deals</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Information</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-500">
        © 2026 Tool Titan. All rights reserved.
      </div>
    </footer>
  );
}
