const keys = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

interface HangmanKeyboardProps {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void; // Pass the function type here
}

const HangmanKeyboard = ({disabled, activeLetters, inactiveLetters, addGuessedLetter}:HangmanKeyboardProps) => {

  return (
    <div className="w-[80%] mx-auto grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2 mt-5  ">
        {keys.map((k, index) => {
          const isActive = activeLetters.includes(k);
          const isInactive = inactiveLetters.includes(k);
         

          return(
          <button 
            key={index}
            disabled={isActive || isInactive|| disabled} 
            className={`p-4 font-bold text-lg uppercase border-[3px] border-black transition-colors
              ${isActive ? "bg-blue-500 text-white border-blue-500" : "bg-white text-black"}
              ${isInactive ? "opacity-30 cursor-not-allowed" : "hover:bg-slate-300"}
            `}
            onClick={() => {addGuessedLetter(k)}}
          >
         
              {k}
          </button>
          )
        })}
    </div>
  )
}

export default HangmanKeyboard