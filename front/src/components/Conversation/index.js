import React from "react";
import { Box, Stack } from "@mui/material";

function Conversation() {
  return (
    <Stack className="conversation" sx={{ height: "100vh" }}>
      <Box
        className="conversation-header"
        sx={{ height: 100, width: "100%", background: "#eee" }}
      ></Box>
      <Box className="conversation-content" sx={{ flexGrow: 1 }}></Box>
      <Box
        className="conversation-footer"
        sx={{ height: 100, width: "100%", background: "#eee" }}
      ></Box>
    </Stack>
  );
}

export default Conversation;
