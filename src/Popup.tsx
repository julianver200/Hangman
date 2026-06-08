import React from "react";

interface PopupProps {
  message: string;
  resetGame: () => void;
}

const Popup = ({ message, resetGame }: PopupProps) => {
  const isWinner = message === "Winner! Nice job."; 
  const isLoser = message === "You Lost! Try again."; 

  // If the game is still active, completely remove it from the screen
  if (!isWinner && !isLoser) return null;

  return (
    // 1. Dark, blurred full-screen backdrop overlay
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* 2. The physical popup card layout */}
      <div className={`p-8 rounded-2xl shadow-2xl border-4 text-center max-w-sm w-full flex flex-col items-center gap-5 transform transition-all bg-white animate-fade-in
        ${isWinner ? "border-green-500 shadow-green-100" : ""}
        ${isLoser ? "border-red-500 shadow-red-100" : ""}
      `}>
        
        {/* 3. Text block themed to the winner or loser outcome */}
        <h2 className={`font-black text-4xl uppercase tracking-wide
          ${isWinner ? "text-green-600" : ""}
          ${isLoser ? "text-red-600" : ""}
        `}>
          {isWinner ? "Winner!" : "Game Over"}
        </h2>

        <p className="text-slate-600 font-medium text-lg leading-snug">
          {message}
        </p>

        {/* 4. Action Button block */}
        <button
          onClick={resetGame}
          className={`mt-2 text-white font-extrabold text-lg py-3 px-8 rounded-lg uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 w-full
            ${isWinner ? "bg-green-600 hover:bg-green-700 shadow-green-200" : ""}
            ${isLoser ? "bg-red-600 hover:bg-red-700 shadow-red-200" : ""}
          `}
        >
          Play Again 🔄
        </button>
        
      </div>
    </div>
  );
};

export default Popup;