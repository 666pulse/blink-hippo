"use client";

import Image from "next/image";
// import Link from "next/link";
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

      <div className="absolute bottom-10 right-10 w-1/3 max-w-sm">
        <Image
          src="/hippo.jpg"
          alt=""
          width={300}
          height={300}
          className="pb-10"
          style={{
            animation: 'shaking 1s ease-in-out infinite'
            // animation: 'shaking 1.2s ease-in-out infinite, pendulum 4s linear infinite'
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes pendulum {
            0% {
                transform: rotate(0deg);
            }

            25% {
                transform: rotate(180deg);
            }

            50% {
                transform: rotate(0deg);
            }

            75% {
                transform: rotate(-180deg);
            }

            100% {
                transform: rotate(0deg);
            }
        }

        @keyframes shaking {
            10%,
            90% {
                transform: translate3d(-10px, 0, 0);
            }

            20%,
            80% {
                transform: translate3d(20px, 0, 0);
            }

            30%,
            70% {
                transform: translate3d(-5px, 0, 0);
            }

            40%,
            60% {
                transform: translate3d(6px, 0, 0);
            }

            50% {
                transform: translate3d(-2px, 0, 0);
            }
        }
      `}</style>
    </>
  );
}
