import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/theme";
import "@/styles/index.css";
import { ElapsedTimeProvider } from "./contexts/ElapsedTimeContext";
import { App } from "./components";
import { CameraProvider } from "./contexts/CameraContexts";
import { MeshProvider } from "./contexts/MeshContext";
import { MouseOverlayProvider } from "./contexts/MouseOverlayContexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CameraProvider>
        <ElapsedTimeProvider>
          <MeshProvider>
            <MouseOverlayProvider>
              <App />
            </MouseOverlayProvider>
          </MeshProvider>
        </ElapsedTimeProvider>
      </CameraProvider>
    </ThemeProvider>
  </StrictMode>
);
