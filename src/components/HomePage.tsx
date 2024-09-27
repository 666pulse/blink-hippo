'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center justify-center">
        <Link
          href="/"
          className="bg-yellow-300 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Connect
        </Link>
      </main>
      <div className="absolute bottom-0 right-0 w-1/3 max-w-sm">
        <Image
          src="/hippo.jpg"
          alt=""
          width={300}
          height={300}
        />
      </div>
    </>
  )
}