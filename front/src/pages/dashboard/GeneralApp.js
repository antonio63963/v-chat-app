import React, { Suspense, lazy } from "react";
import Chats from "./Chats/Chats";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";

const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <Stack className="general-app" direction="row" sx={{ width: "100%", height: '100%', minHeight: '100vh' }}>
      <Chats />
      <Box
        className="chat-content"
        sx={{ width: "100%" }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
