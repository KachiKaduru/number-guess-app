import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { GuessProvider } from "./contexts/GuessContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuessProvider>
      <App />
    </GuessProvider>
  </StrictMode>
);
