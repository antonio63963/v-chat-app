import { Box, Stack, Avatar, Switch } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useTheme, styled } from "@mui/material/styles";

import logo from "../../../assets/Images/logo.ico";

import LogoApp from "../../../components/LogoApp";
import NavigationSidebar from "./NavigationSidebar";
import useSettings from '../../../hooks/useSettings';



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        // ...theme.applyStyles('dark', {
        //   backgroundColor: '#177ddc',
        // }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: 12,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 40 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    // ...theme.applyStyles('dark', {
    //   backgroundColor: 'rgba(255,255,255,.35)',
    // }),
  },
}));

const SidebarApp = () => {
  const theme = useTheme();

  const {onToggleMode} = useSettings();

  return (
    <Box
      className="sidebar_app"
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: 100,
        minHeight: "100vh",
        height: "max-content",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        spacing={3}
        direction="column"
        alignItems="center"
        sx={{ width: "100%", height: "max-content", minHeight: "100vh" }}
      >
        <LogoApp logo={logo} />
        <NavigationSidebar />
        <Stack
          className="sidebar_bottom"
          spacing={4}
          alignItems="center"
          sx={{ flexGrow: 1, justifyContent: 'flex-end' }}
    
        >
          <AntSwitch onChange={onToggleMode} />
          <Avatar
            className="sidebar_avatar"
            
            src={faker.image.avatar()}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SidebarApp;
