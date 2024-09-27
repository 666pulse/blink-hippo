import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

function WalletConn() {
  const { wallet, connect, disconnect, connecting, connected } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  return (
    <header>
      {/* 其他头部内容 */}
      <button onClick={handleClick}>
        {connecting ? '连接中...' : connected ? '断开连接' : '连接钱包'}
      </button>
    </header>
  );
}

export default WalletConn;