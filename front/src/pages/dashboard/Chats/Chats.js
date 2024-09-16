import React, {useState, useEffect} from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { faker } from "@faker-js/faker";

import HeaderChatsList from "./components/HeaderChatsList.js";
import SearchInput from "../../../components/SearchInput.js";
import { useTheme } from "@mui/material/styles";
import ArchivedButton from "../../../components/ArchivedButton.js";
import ChatElement from "./components/ChatElement.js";

export default function Chats() {
  const theme = useTheme();
  const [pinnedChats, setPinnedChats] = useState([])
  console.log(theme);

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
        <ArchivedButton onClick={() => {}} />
        <Stack>
          <Stack>
            <Typography
              variant="subtitle2"
              color={theme.palette.grey[500]}
              sx={{ py: 2 }}
            >
              Pinned
            </Typography>
          </Stack>
          <ChatElement
            img={faker.image.avatar()}
            userName={"Mich Jibran"}
            lastMsg={"Hi there!"}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
