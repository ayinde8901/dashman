import { Box, useTheme } from "@mui/material";
import { tokens } from "../scenes/Theme";

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360; // Calculate angle based on progress

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
             conic-gradient(${colors.blueAccent[500]} 0deg ${angle}deg, transparent ${angle}deg 360deg),
             ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
