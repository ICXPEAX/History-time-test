import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";

const rootElement = document.querySelector<HTMLElement>('.historyDates');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Element with class "historyDates" not found');
}