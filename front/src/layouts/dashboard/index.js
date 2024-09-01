import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import logo from "../../assets/Images/logo.ico";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Box
        p={2}
        sx={{
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: 100,
          height: "100vh",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 64,
              height: 64,
              borderRadius: theme.radius.small,
            }}
          >
            <img src={logo} alt="Logo" />
          </Box>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
