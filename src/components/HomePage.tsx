'use client'

import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WalletConn from '@/components/WalletConn'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">Blink Cat</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/how-to-play" className="text-sm hover:text-yellow-300">
            How to play
          </Link>
          <Link href="https://twitter.com" className="text-yellow-300">
            <Twitter size={20} />
          </Link>

          <WalletConn/>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <Link
          href="/connect"
          className="bg-yellow-300 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Connect
        </Link>

      </main>
      <div className="absolute bottom-0 right-0 w-1/3 max-w-sm">
        <Image
          src="/placeholder.svg"
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}