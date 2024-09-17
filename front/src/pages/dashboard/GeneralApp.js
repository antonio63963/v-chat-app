import React, { Suspense, lazy } from "react";
import Chats from "./Chats/Chats";
import { Stack, Box } from "@mui/material";

const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <Stack className="general-app" direction="row" sx={{ width: "100%" }}>
      <Chats />
      <Box
        className="chat-content"
        sx={{ width: "100%", backgroundColor: "#000" }}
      >
        COntent
      </Box>
    </Stack>
  );
};

export default GeneralApp;
