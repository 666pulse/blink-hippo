'use client';
import './globals.css'
import '@solana/wallet-adapter-react-ui/styles.css';

import { Inter } from 'next/font/google'
import { Metadata } from 'next';

import { useMemo } from 'react';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WalletConn from '@/components/WalletConn'

// export const metadata: Metadata = {
//   title: 'Blink Hippo',
//   description: 'Connect and play',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <html lang="en">
      <body>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <div className="min-h-2 bg-gradient-to-b from-[#00B294] to-[#00B294] text-white flex flex-col">
                  <header className="p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                          <Image src="/hippo.jpg" alt="Logo" width={40} height={40} />
                          <span className="ml-2 text-xl font-bold">Blink Hippo</span>
                        </Link>
                      </div>

                      <nav className="flex items-center space-x-4">
                        <Link href="https://twitter.com" style={{color: "#F1F1F1"}}>
                          <Twitter size={20} />
                        </Link>

                        <Link href="/miner" style={{color: "#F1F1F1"}}>
                          Miner
                        </Link>

                        <WalletConn/>
                      </nav>
                    </div>
                    <div className="border-b-2 border-white opacity-50"></div>
                  </header>
                </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
