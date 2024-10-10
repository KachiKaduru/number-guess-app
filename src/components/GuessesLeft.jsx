import { useGuess } from "../contexts/GuessContext";

export default function GuessesLeft() {
  const { chances, randomNumber, guessedNumber } = useGuess();

  if (chances === 0 && guessedNumber !== randomNumber)
    return <p>You are out of trials and have failed 😢</p>;

  return <p>you have {chances} trials left</p>;
}
