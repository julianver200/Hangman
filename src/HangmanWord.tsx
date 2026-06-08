interface HangmanWordProps{
    reveal?: boolean;
    guessedLetters: string[],
    wordToGuess: string
}

const HangmanWord = ({ reveal, guessedLetters, wordToGuess}: HangmanWordProps) => {
  
  return (
    // Added flex, centering, and a gap between letters
    <div className='flex gap-4 font-bold text-4xl uppercase mt-5'>
       {wordToGuess.split("").map((l, index) => {
        const isGuessed = guessedLetters.includes(l);
            return (
                <span key={index} className="border-b-4 border-black w-[50px] text-center">
                  <span 
                  className={`
                              ${isGuessed || reveal ? "visible" : "invisible"}
                              ${
                                !isGuessed && reveal 
                                  ? "text-red-500" 
                                  : isGuessed
                                    ? "text-green-500" 
                                    : "text-black"
                              }
                            `}
                   >
                      {l}
                  </span>
                </span>
            );
        })}
    </div>
  )
}

export default HangmanWord