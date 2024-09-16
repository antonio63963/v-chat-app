import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import { CircleDashed } from "phosphor-react";

function HeaderChatsList() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
      <Typography variant="h5">Chats</Typography>
      <IconButton>
        <CircleDashed />
      </IconButton>
    </Stack>
  );
}

export default HeaderChatsList;
