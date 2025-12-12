import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css"; // seu CSS completo
import App from "./App.jsx"; // componente principal

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
