'use client'

import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

function WalletConn() {

  // const { wallet, publicKey, connect, disconnect, connecting, connected } =
  const { publicKey, disconnect, connecting, connected } =
    useWallet();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [readable, setReadable] = useState<string | null>(null);

  const { setVisible } = useWalletModal();

  useEffect(() => {
    if (publicKey) {
      setWalletAddress(publicKey.toBase58());

      if (walletAddress) {
        setReadable(
          `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`,
        );
      }
    } else {
      setWalletAddress(null);
    }
  }, [publicKey]);

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-[#F1F1F1] text-[#00B294] px-4 py-2 rounded-full text-sm font-semibold"
      >
        {connecting ? "Connecting..." : connected ? `${readable}` : "Connect"}
      </button>
    </div>
  );
}

export default WalletConn;
