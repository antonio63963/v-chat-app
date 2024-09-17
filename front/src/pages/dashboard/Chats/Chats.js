import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import HeaderChatsList from "./components/HeaderChatsList.js";
import SearchInput from "../../../components/SearchInput.js";
import ArchivedButton from "../../../components/ArchivedButton.js";
import TitledListChat from "./components/TitledListChat.js";

import { ChatList } from "../../../data/index.js";
import StyledScroll from "../../../components/StyledScroll.js";

export default function Chats() {
  const theme = useTheme();
console.log(theme.palette.mode)
  return (
    <Box
      className="chats"
      sx={{
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0, 0, 0, .25)",
      }}
    >
      <StyledScroll>
        <Stack direction="column" p={3} sx={{ flexGrow: 1, height: "100vh" }}>
          <HeaderChatsList />
          <SearchInput theme={theme} />
          <ArchivedButton onClick={() => {}} />
          <Stack>
            <TitledListChat
              title="Pinned"
              chatList={ChatList.filter((c) => c.pinned)}
            />

            <TitledListChat
              title="All"
              chatList={ChatList.filter((c) => !c.pinned)}
            />
          </Stack>
        </Stack>
      </StyledScroll>
    </Box>
  );
}
