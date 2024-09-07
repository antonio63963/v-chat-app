import { Box, Stack, Avatar } from "@mui/material";
import {faker} from '@faker-js/faker';
import { useTheme } from "@mui/material/styles";
import logo from "../../../assets/Images/logo.ico";


import LogoApp from "../../../components/LogoApp";
import NavigationSidebar from "./NavigationSidebar";

const SidebarApp = () => {
  const theme = useTheme();

  return (
    <Box
      className="sidebar_app"
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: 100,
        height: "max-content",
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
        <NavigationSidebar />
        <Avatar className='sidebar_avatar' src={faker.image.avatar()} />
        <Avatar className='sidebar_avatar' src={faker.image.avatar()} />
      </Stack>
    </Box>
  );
};

export default SidebarApp;
