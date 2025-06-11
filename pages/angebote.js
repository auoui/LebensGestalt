import Layout from '../components/Layout'

export default function Angebote() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Angebote</h1>
        <ul className="list-disc list-inside">
          <li>Held*innenreise</li>
          <li>Selbstfindungs-Workshops</li>
          <li>Komplimente-Workshops</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Termine</h2>
        <p>Hier folgen bald aktuelle Termine. Bleib dran!</p>
      </div>
    </Layout>
  )
}