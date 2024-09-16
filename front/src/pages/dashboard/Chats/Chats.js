import { Box, IconButton, Input, Stack, Typography } from "@mui/material";
import React from "react";
import { CircleDashed } from "phosphor-react";

import HeaderChatsList from "./components/HeaderChatsList.js";
import SearchInput from "../../../components/SearchInput.js";
import { useTheme } from "@mui/material/styles";

export default function Chats() {
  const theme = useTheme();
  console.log(theme)
  return (
    <Box
      className="chats"
      sx={{
        width: 320,
        backgroundColor: "#f8faff",
        minHeight: "100vh",
        boxShadow: "0 0 2px rgba(0, 0, 0, .25)",
      }}
      p={3}
    >
      <Stack direction="column">
        
        <HeaderChatsList />
        <SearchInput theme={theme} />
      </Stack>
    </Box>
  );
}
