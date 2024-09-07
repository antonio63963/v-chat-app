import { Box, Stack, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../../assets/Images/logo.ico";


import LogoApp from "../../../components/LogoApp";
import ActionsSidebar from "./ActionsSidebar";

const SidebarApp = () => {
  const theme = useTheme();

  return (
    <Box
      className="sidebar_app"
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: 100,
        height: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        spacing={3}
        direction="column"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <LogoApp logo={logo} />
        <ActionsSidebar />
      </Stack>
    </Box>
  );
};

export default SidebarApp;
