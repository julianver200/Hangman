import { useState, useEffect, useCallback } from "react";
import wordData from "./wordList.json";
import  Popup  from "./Popup.tsx";
import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import HangmanKeyboard from "./HangmanKeyboard.tsx";


export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordData.words[Math.floor(Math.random() * wordData.words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback((letter: string): void =>{
    if(guessedLetters.includes(letter)){
      return;
    }
    setGuessedLetters(cLetter => [...cLetter, letter] );
  },[guessedLetters]);
  
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter));
  const message = isLoser 
    ? "You Lost! Try again." 
    : isWinner 
    ? "Winner! Nice job." 
    : "Hangman";

   useEffect(() => {
    const handler = (e: KeyboardEvent) =>  {
        const key = e.key;
  
        if(!key.match(/^[a-z]$/)){return};
      e.preventDefault();
      addGuessedLetter(key);
    }
    document.addEventListener("keypress", handler);
     return () => {
        document.removeEventListener("keypress", handler);
     }
   }, [addGuessedLetter])
   
   
  return (
    <>
    
      <div className="flex flex-col items-center  min-h-screen pb-2">
        <Popup message={message}/>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord 
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess} 
        />
        <HangmanKeyboard
          activeLetters={guessedLetters} 
          inactiveLetters={incorrectLetters} 
          addGuessedLetter={addGuessedLetter} 
        />

      </div>
    </>
  );
}