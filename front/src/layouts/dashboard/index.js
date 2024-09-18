import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SidebarApp from "./components/SidebarApp";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Stack className="app" direction='row' sx={{height: '100%', minHeight: '100vh'}}>
      <SidebarApp />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
