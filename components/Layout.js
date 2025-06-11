import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-rose-50 to-amber-100 text-gray-800 font-light">
      <header className="p-6 flex flex-col md:flex-row justify-between items-center shadow-sm bg-white/70 backdrop-blur-md">
        <h1 className="text-2xl font-semibold tracking-wide">Mutige Schritte</h1>
        <nav className="flex gap-4 mt-4 md:mt-0 text-lg">
          <Link href="/">Start</Link>
          <Link href="/heldinnenreise">Held*innenreise</Link>
          <Link href="/angebote">Angebote</Link>
          <Link href="/komplimente">Komplimente</Link>
        </nav>
      </header>
      <main className="p-8">{children}</main>
    </div>
  )
}