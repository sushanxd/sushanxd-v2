import Head from 'next/head'
import Link from 'next/link'
import ProfileHeader from '../components/ProfileHeader'

const projects = [
  {
    title: "Brand Identity",
    category: "design",
    slug: "brand_identity",
    thumbnail: "/img/brand_identity_1.jpg"
  },
  {
    title: "Nepal Trip",
    category: "photography",
    slug: "nepal_trip",
    thumbnail: "/img/nepal_trip_1.jpg"
  },
  {
    title: "Event Reel",
    category: "videography",
    slug: "event_reel",
    thumbnail: "/img/event_reel_1.jpg"
  }
]

export default function Home() {
  return (
    <>
      <Head><title>Sushan's Portfolio</title></Head>
      <main className="max-w-4xl mx-auto px-4 py-6">
        <ProfileHeader />
        <div className="flex justify-center gap-4 text-sm font-medium mt-6 mb-4">
          <button className="hover:underline">All</button>
          <button className="hover:underline">Design</button>
          <button className="hover:underline">Photography</button>
          <button className="hover:underline">Videography</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <Link key={index} href={`/project/${project.category}/${project.slug}`}>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover rounded aspect-square hover:opacity-90 transition"
              />
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-700">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>
            I’m Sushan — a visual storyteller, Graphics designer, photographer, and videographer.
          </p>

        </div>
      </main>
    </>
  )
}
