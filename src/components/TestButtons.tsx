import React from "react";

export default function TestButtons() {
  const handleClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked`);
    alert(`${buttonType} button clicked`);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleClick("Up")}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Up Vote
      </button>
      <button
        onClick={() => handleClick("Down")}
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Down Vote
      </button>
    </div>
  );
}
