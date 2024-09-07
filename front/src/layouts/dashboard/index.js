import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SidebarApp from "./components/SidebarApp";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <SidebarApp />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
