import React from "react";
import { Box, Badge, Stack, Typography } from "@mui/material";
import UserAvatar from "../../../../components/UserAvatar";
import { useTheme } from "@mui/material/styles";

function getTimeNow() {
  const date = new Date();
  const hours = date.getHours();
  const minnutes = date.getMinutes();
  return `${hours}:${minnutes}`;
}

function ChatElement({ img, userName, lastMsg, time, unread, isOnline }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        cursor: "pointer",
        borderRadius: 1,
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        px: 1.5,
        py: 1,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <UserAvatar img={img} isOnline={isOnline} />
          <Stack direction="column" spacing={0.3}>
            <Typography variant="subtitle2">{userName}</Typography>
            <Typography variant="caption" sx={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexShrink: 1}}>{lastMsg}</Typography>
          </Stack>
        </Stack>
        {/* tail */}
        <Stack spacing={1.5} alignItems="center" alignSelf="start">
          <Typography sx={{ fontWeight: 600, fontSize: 12 }}>{time}</Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ChatElement;
