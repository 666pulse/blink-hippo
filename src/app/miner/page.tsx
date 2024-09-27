'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState, useEffect } from 'react';

export default function MinerPage() {
  const { publicKey, connected } = useWallet();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (publicKey) {
      setWalletAddress(publicKey.toBase58());
    } else {
      setWalletAddress(null);
    }
  }, [publicKey]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">矿工页面</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">钱包连接</h2>
          <WalletMultiButton />
        </div>

        {connected && walletAddress && (
          <p className="mb-4">
            钱包地址：{walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
          </p>
        )}

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">矿工状态</h3>
          <p>状态：{connected ? '已连接' : '未连接'}</p>
          {/* 这里可以添加更多矿工相关的信息和功能 */}
        </div>
      </div>
    </div>
  );
}