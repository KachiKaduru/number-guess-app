import { useGuess } from "../contexts/GuessContext";

export default function ErrorMessage() {
  const { guessedNumber, randomNumber } = useGuess();

  if (guessedNumber === undefined) return null;

  return (
    <div>
      <p>{guessedNumber > randomNumber && "It is lower"}</p>
      <p>{guessedNumber < randomNumber && "It is higher"}</p>
      <p>{guessedNumber === randomNumber && "That's correct"}</p>
    </div>
  );
}
