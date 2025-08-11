"use server";

import Link from "next/link";

export default async function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Jung-AI</h1>
      <p className="text-lg">
        Explore the symbolic interpretation of tarot with AI and Jungian
        archetypes.
      </p>
      <div className="flex gap-4">
        <Link href="/draw" className="px-4 py-2 bg-blue-500 text-white rounded">
          Draw a Card
        </Link>
      </div>
    </section>
  );
}
