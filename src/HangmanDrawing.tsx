import React from 'react';

// 1. Define the Body Parts (Static JSX elements)
const HEAD = (
  <div className="w-[50px] h-[50px] absolute border-[5px] rounded-full border-black top-[50px] right-[-22px]" />
);

const BODY = (
  <div className="w-[1px] h-[110px] absolute border-[3px] border-black top-[100px] right-0" />
);

const RIGHT_ARM = (
  <div className="w-[1px] h-[60px] absolute border-[3px] border-black top-[105px] right-[-20px] rotate-[-45deg]" />
);

const LEFT_ARM = (
  <div className="w-[1px] h-[60px] absolute border-[3px] border-black top-[105px] right-[20px] rotate-45" />
);

const RIGHT_LEG = (
  <div className="w-[1px] h-[60px] absolute border-[3px] border-black top-[200px] right-[-20px] rotate-[-45deg]" />
);

const LEFT_LEG = (
  <div className="w-[1px] h-[60px] absolute border-[3px] border-black top-[200px] right-[20px] rotate-[45deg]" />
);

// Order of appearance as the user guesses incorrectly
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

// 2. Define Types
interface HangmanDrawingProps {
  numberOfGuesses: number;
}

// 3. Component Definition
const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative mt-5">
      {/* Dynamically render body parts based on incorrect guesses */}
      {BODY_PARTS.slice(0, numberOfGuesses)}

      {/* Gallows Structure */}
      <div className="w-[5px] h-[50px] bg-black absolute top-0 right-0" />
      <div className="w-[200px] h-[5px] bg-black ml-[120px]" />
      <div className="h-[300px] w-[5px] bg-black ml-[120px]" />
      <div className="w-[250px] h-[8px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;