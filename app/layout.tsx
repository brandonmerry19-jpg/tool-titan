import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tooltitan.example"),
  title: {
    default: "Tool Titan | Find the Right Tool. Every Time.",
    template: "%s | Tool Titan",
  },
  description:
    "Tool reviews, comparisons, buying guides, and deals to help you choose the right tool with confidence.",
  openGraph: {
    title: "Tool Titan",
    description: "Find the Right Tool. Every Time.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
