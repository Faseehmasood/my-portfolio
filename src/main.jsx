import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./Provider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <App />
  </ThemeProvider>
);
