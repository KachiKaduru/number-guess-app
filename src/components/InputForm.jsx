import { useState } from "react";
import { useGuess } from "../contexts/GuessContext";

export default function InputForm() {
  const { handleGuessedNumber, handleChances } = useGuess();
  const [guess, setGuess] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    handleGuessedNumber(Number(guess));
    handleChances();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" max={"20"} value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button>guess</button>
    </form>
  );
}
