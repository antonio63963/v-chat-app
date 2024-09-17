import React, { Suspense, lazy } from "react";
import Chats from "./Chats/Chats";
import { Stack } from "@mui/material";

const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <Stack className="generalApp" direction="row" sx={{ width: "100%" }}>
      <Chats />
    </Stack>
  );
};

export default GeneralApp;
