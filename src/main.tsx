import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/theme";
import { App } from "@/components";
import "@/styles/index.css";
import { ElapsedTimeProvider } from "./contexts/ElapsedTimeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ElapsedTimeProvider>
        <App />
      </ElapsedTimeProvider>
    </ThemeProvider>
  </StrictMode>
);
