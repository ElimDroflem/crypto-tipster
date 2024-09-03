import TipForm from "@/components/TipForm";
import RecentTips from "@/components/RecentTips";
import TopPerformers from "@/components/TopPerformers";
import UserStats from "@/components/UserStats";
import WalletConnect from "@/components/WalletConnect";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CryptoTipster
        </h1>
        <WalletConnect />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TipForm />
          <RecentTips />
        </div>
        <div>
          <TopPerformers />
          <UserStats />
        </div>
      </div>
    </div>
  );
}
