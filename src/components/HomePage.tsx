"use client";

import Image from "next/image";
import Link from "next/link";
import WalletConn from "@/components/WalletConn";

export default function HomePage() {
  return (
    <>
      <main
        className="flex-grow flex flex-col items-center justify-center"
        style={{ height: "50em" }}
      >
        <WalletConn />
      </main>

      <div className="absolute bottom-0 right-0 w-1/3 max-w-sm">
        <Image src="/hippo.jpg" alt="" width={300} height={300} />
      </div>
    </>
  );
}
