import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ChatElement from "./ChatElement";

function TitledListChat({ title, chatList }) {
  const theme = useTheme();

  return (
    <Stack spacing={1}>
      <Typography
        variant="subtitle2"
        color={theme.palette.grey[500]}
        sx={{ pt: 2 }}
      >
        {title}
      </Typography>
      {chatList.map((c) => {
        return (
          <ChatElement
            key={c.id}
            userName={c.name}
            img={c.img}
            lastMsg={c.msg}
            isOnline={c.online}
          />
        );
      })}
    </Stack>
  );
}

export default TitledListChat;
