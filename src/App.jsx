import ErrorMessage from "./components/ErrorMessage";
import GuessesLeft from "./components/GuessesLeft";
import InputForm from "./components/InputForm";
import { useGuess } from "./contexts/GuessContext";

export default function App() {
  const { randomNumber, guessedNumber } = useGuess();
  console.log(randomNumber);

  return (
    <div>
      <div>
        <h2>Guess the number between 1 and 20</h2>

        <div>
          <h1>{randomNumber === guessedNumber ? randomNumber : "?"}</h1>
        </div>

        <InputForm />
        <ErrorMessage />
        <GuessesLeft />
      </div>
    </div>
  );
}
