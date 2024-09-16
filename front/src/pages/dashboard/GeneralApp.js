import React, { Suspense, lazy } from "react";
import Chats from "./Chats/Chats";

const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <>
      <Chats />
    </>
  );
};

export default GeneralApp;
