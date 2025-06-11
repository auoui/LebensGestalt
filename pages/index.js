import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Fine Belger</h2>
        <p className="text-lg mb-6">
          Selbstfindung, Held*innenreise, Workshops, Gestalttherapie i.A.
        </p>
        <p className="text-md italic mb-4">
          „Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. [...]“ (Fine)
        </p>
        <a className="inline-block bg-fuchsia-300 hover:bg-fuchsia-400 text-white px-5 py-3 rounded-full shadow-md transition-all" href="mailto:fine.belger@posteo.de">
          Kontakt & Anmeldung
        </a>
      </section>
    </Layout>
  )
}