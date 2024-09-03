import React from "react";

interface VoteButtonsProps {
  tipId: string;
  isWalletConnected: boolean;
  onVote: (tipId: string, voteType: "up" | "down" | null) => void;
  currentVote: "up" | "down" | null;
}

export default function VoteButtons({
  tipId,
  isWalletConnected,
  onVote,
  currentVote,
}: VoteButtonsProps) {
  const handleVote = (voteType: "up" | "down") => {
    console.log(`Vote button clicked: ${voteType}`);
    if (!isWalletConnected) {
      alert("Please connect your wallet to vote.");
      return;
    }

    // Toggle vote if clicking the same button
    onVote(tipId, currentVote === voteType ? null : voteType);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleVote("up")}
        className={`p-2 rounded ${
          currentVote === "up" ? "bg-green-500" : "bg-gray-200"
        } hover:bg-green-600 text-white`}
      >
        Up Vote
      </button>
      <button
        onClick={() => handleVote("down")}
        className={`p-2 rounded ${
          currentVote === "down" ? "bg-red-500" : "bg-gray-200"
        } hover:bg-red-600 text-white`}
      >
        Down Vote
      </button>
    </div>
  );
}
