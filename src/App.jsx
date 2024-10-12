import styled from "styled-components";
import ErrorMessage from "./components/ErrorMessage";
import GuessesLeft from "./components/GuessesLeft";
import InputForm from "./components/InputForm";
import { useGuess } from "./contexts/GuessContext";

const Circle = styled.div`
  width: 15rem;
  height: 15rem;
  display: grid;
  place-content: center;
  font-size: 3.2rem;
  margin: 4rem auto;

  border-radius: 50%;
  background-color: #ddd;
`;

export default function App() {
  const { randomNumber, guessedNumber } = useGuess();
  console.log(randomNumber);

  return (
    <div>
      <div>
        <h2>Number Guesser</h2>
        <h4>Guess the number between 1 and 20</h4>

        <Circle>
          <h1>{randomNumber === guessedNumber ? randomNumber : "?"}</h1>
        </Circle>

        <InputForm />
        <ErrorMessage />
        <GuessesLeft />
      </div>
    </div>
  );
}
