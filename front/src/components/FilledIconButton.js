import React from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FilledIconButton({ icon, onClick }) {
  const theme = useTheme();

  return (
    <Box
      onClick={onClick}
      p={1}
      sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
    >
      <IconButton sx={{ width: 48, height: 48, color: theme.palette.grey[0] }}>
        {icon}
      </IconButton>
    </Box>
  );
}

export default FilledIconButton;
