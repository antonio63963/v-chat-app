import { styled, alpha, useTheme } from "@mui/material/styles";
import { MagnifyingGlass } from "phosphor-react";

const Search = styled("div")(({ theme }) => ({
  borderRadius: 32,
  backgroundColor: alpha(theme.palette.background.default, 1),
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
}));

const SeacrchTextField = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  fontSize: 14,
  flexGrow: 1,
  padding: "8px 12px",
  background: "none",
  color:
    theme.palette.mode === "light"
      ? theme.palette.background.primiry
      : theme.palette.grey[0],
}));

function SearchInput({ value, onChange }) {
  const theme = useTheme();
  console.log("THEME: ", theme);
  return (
    <Search className="SearchInput">
      <MagnifyingGlass size={24} color={theme.palette.primary.main} />
      <SeacrchTextField value={value} onChange={onChange} />
    </Search>
  );
}

export default SearchInput;
