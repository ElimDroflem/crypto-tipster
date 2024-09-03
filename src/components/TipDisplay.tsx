import { Tip } from "../app/page";
import { ArrowUp, ArrowDown } from "lucide-react";

interface TipDisplayProps {
  tip: Tip; // Use Tip directly as a type, not typeof Tip
  onVote: (tipId: number, voteType: "up" | "down") => void;
  isLoggedIn: boolean;
}

export default function TipDisplay({
  tip,
  onVote,
  isLoggedIn,
}: TipDisplayProps) {
  const handleVote = (voteType: "up" | "down") => {
    if (!isLoggedIn) {
      alert("Please connect your wallet to vote.");
      return;
    }
    onVote(tip.id, voteType);
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-purple-400">
          {tip.user}
        </span>
        <span className="text-sm font-bold text-yellow-400">{tip.pair}</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-600 p-2 rounded">
          <span className="text-xs text-gray-400">Entry</span>
          <p className="font-semibold">{tip.entry}</p>
        </div>
        <div className="bg-gray-600 p-2 rounded">
          <span className="text-xs text-gray-400">Target</span>
          <p className="font-semibold">{tip.target}</p>
        </div>
        <div className="bg-gray-600 p-2 rounded">
          <span className="text-xs text-gray-400">Stop Loss</span>
          <p className="font-semibold">{tip.stopLoss}</p>
        </div>
      </div>
      <p className="text-sm mb-4">{tip.analysis}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={() => handleVote("up")}
            className="p-1 rounded hover:bg-gray-600"
          >
            <ArrowUp className="h-5 w-5 text-green-400" />
          </button>
          <button
            onClick={() => handleVote("down")}
            className="p-1 rounded hover:bg-gray-600"
          >
            <ArrowDown className="h-5 w-5 text-red-400" />
          </button>
        </div>
        <div className="text-sm">
          <span className="text-green-400 mr-2">↑ {tip.upvotes || 0}</span>
          <span className="text-red-400">↓ {tip.downvotes || 0}</span>
        </div>
      </div>
    </div>
  );
}
