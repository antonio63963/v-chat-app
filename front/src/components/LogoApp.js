import { Box } from "@mui/material";
import {useTheme} from "@mui/material/styles";

const LogoApp = ({logo}) => {
  const theme = useTheme();

  return (
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
  );
};

export default LogoApp;
