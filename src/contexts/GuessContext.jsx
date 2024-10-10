import { createContext, useContext, useRef, useState } from "react";

const GuessContext = createContext();

const GuessProvider = function ({ children }) {
  const { current } = useRef(Math.floor(Math.random() * 20) + 1);

  const [guessedNumber, setGuessedNumber] = useState(undefined);
  const [chances, setChances] = useState(6);

  function handleGuessedNumber(g) {
    setGuessedNumber(g);
  }
  function handleChances() {
    setChances((c) => c - 1);
  }

  return (
    <GuessContext.Provider
      value={{
        randomNumber: current,
        guessedNumber,
        handleGuessedNumber,
        chances,
        handleChances,
      }}
    >
      {children}
    </GuessContext.Provider>
  );
};

function useGuess() {
  const context = useContext(GuessContext);

  if (context === undefined) throw new Error("GuessContext was used outside the GuessProvider");

  return context;
}

export { GuessProvider, useGuess };
