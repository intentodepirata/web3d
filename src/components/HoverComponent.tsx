import { useMouseOverlay } from "@/contexts/MouseOverlayContexts";
import { Box } from "@mui/material";

export default function HoverComponent() {
  const { isHovered, mouseX, mouseY } = useMouseOverlay();

  return (
    isHovered && (
      <Box
        sx={{
          position: "fixed",
          top: `${mouseY}px`,
          left: `${mouseX}px`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "8px",
          borderRadius: "4px",
          pointerEvents: "none",
        }}
      >
        Drop a insign
      </Box>
    )
  );
}
