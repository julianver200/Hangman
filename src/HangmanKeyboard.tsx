import { useEffect } from "react";

const keys = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

interface HangmanKeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void; // Pass the function type here
}

const HangmanKeyboard = ({addGuessedLetter}:HangmanKeyboardProps) => {

  return (
    <div className="w-[80%] mx-auto grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2 mt-5 ">
        {keys.map((k, index) => {
          // const isActive = activeLetters.includes(k);
          // const isInactive = inactiveLetters.includes(k);
          // const isGuessed = isActive || isInactive;

          return(
          <button key={index} 
            className="uppercase p-4 border-[3px] border-black hover:bg-slate-300
              bg-white"
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