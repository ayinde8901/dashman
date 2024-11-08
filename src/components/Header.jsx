import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../scenes/Theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);  // Ensure the mode is specified

  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
