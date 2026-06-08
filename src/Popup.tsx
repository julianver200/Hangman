
interface PopupProps {
  message: string;
  resetGame: () => void;
}

const Popup = ({message, resetGame}:PopupProps) => {
  const isWinner = message === "Winner! Nice job."; 
  const isLoser = message === "You Lost! Try again."; 


  return (
    <div className={` flex flex-row gap-2 pt-3 font-bold text-2xl
      ${isWinner ? " text-green-700" : ""}
      ${isLoser ? " text-red-700" : ""}
      ${!isWinner && !isLoser ? "bg-white text-black" : ""}
    `}>
      <p className="font-bold text-2xl">
        {message}
      </p>
      {(isWinner || isLoser) &&
       <button
          onClick={resetGame}
          className="bg-black text-white font-bold text-base py-1 px-6 rounded uppercase tracking-wider hover:bg-slate-800 transition-colors self-center"
        >
          Reset
        </button>
      }
    </div>
  )
}
    
export default Popup 