"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

export default function WalletConnect() {
  const [wallet, setWallet] = useState<PhantomWalletAdapter | null>(null);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    const loadWallet = async () => {
      if ("solana" in window) {
        const phantomWallet = new PhantomWalletAdapter();
        setWallet(phantomWallet);
      }
    };
    loadWallet();
  }, []);

  const handleConnect = async () => {
    if (!wallet) {
      window.open("https://phantom.app/", "_blank");
      return;
    }

    try {
      await wallet.connect();
      const key = wallet.publicKey;
      if (key) {
        setPublicKey(key);
      }
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const handleDisconnect = async () => {
    if (!wallet) return;

    try {
      await wallet.disconnect();
      setPublicKey(null);
    } catch (error) {
      console.error("Failed to disconnect wallet", error);
    }
  };

  return (
    <Button
      className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full whitespace-nowrap px-6 py-3"
      onClick={publicKey ? handleDisconnect : handleConnect}
    >
      <WalletIcon className="mr-3 h-5 w-5 inline-block" />
      <span>
        {publicKey
          ? `Disconnect ${publicKey.toString().slice(0, 4)}...${publicKey
              .toString()
              .slice(-4)}`
          : wallet
          ? "Connect Solana Wallet"
          : "Install Phantom Wallet"}
      </span>
    </Button>
  );
}
