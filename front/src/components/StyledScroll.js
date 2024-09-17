import { styled } from "@mui/material/styles";

const StyledScroll = styled("div")((theme) => ({
  flexGrow: 1,
  height: "100%",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor:
    theme.theme.palette.mode === "dark" ? "#161C24 #212B36" : null,

  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 20,
    border: "3px solid lightgrey",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#000",
  },
}));

export default StyledScroll;
