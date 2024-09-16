import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import HeaderChatsList from "./components/HeaderChatsList.js";
import SearchInput from "../../../components/SearchInput.js";
import ArchivedButton from "../../../components/ArchivedButton.js";
import TitledListChat from "./components/TitledListChat.js";

import { ChatList } from "../../../data/index.js";

export default function Chats() {
  const theme = useTheme();

  return (
    <Box
      className="chats"
      sx={{
        width: 320,
        backgroundColor: "#f8faff",
        boxShadow: "0 0 2px rgba(0, 0, 0, .25)",
      }}
    >
      <Stack
        direction="column"
        p={3}
        sx={{ height: "100vh", overflowY: "scroll" }}
      >
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
    </Box>
  );
}
