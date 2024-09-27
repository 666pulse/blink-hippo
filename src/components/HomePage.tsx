'use client'

import Image from 'next/image'
import Link from 'next/link'
import WalletConn from '@/components/WalletConn'

export default function HomePage() {
  return (
    <>
      <main className="flex-grow flex flex-col items-center justify-center" style={{height: "50em"}}>
        {/* <Link
          href="/"
          className="bg-[#F1F1F1] text-[#00B294] px-8 py-3 rounded-full text-lg font-semibold"
        >
        </Link> */}

        <WalletConn/>
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