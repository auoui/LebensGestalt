
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Smooth scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [router.pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-4 flex justify-between items-center">
        <div></div>
        <nav className="space-x-4 text-sm">
          <Link href="/">Start</Link>
          <Link href="/heldenreise">Held*innenreise</Link>
          <Link href="/angebote">Angebote</Link>
          <Link href="/komplimente">Komplimente</Link>
          <Link href="/mehr-ueber-mich">Mehr über mich</Link>
        </nav>
      </header>

      <main className="px-4 py-8 max-w-4xl mx-auto">{children}</main>

      <footer className="mt-20 py-6 text-center text-xs text-gray-500">
        <p>Kontakt & Anmeldung</p>
        <p>Fine Belger Platzhalter</p>
        <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de" className="underline">fine.belger@posteo.de</a></p>
      </footer>
    </div>
  );
}
