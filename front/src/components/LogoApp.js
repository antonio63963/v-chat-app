import { Box } from "@mui/material";
import {useTheme} from "@mui/material/styles";

const LogoApp = ({logo}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius.small,
        padding: 1
      }}
    >
      <img src='/logo.svg' alt="Logo" style={{maxWidth: '24px'}} />
    </Box>
  );
};

export default LogoApp;
