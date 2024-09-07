import React from "react";
import { IconButton } from "@mui/material";

import FilledIconButton from "./FilledIconButton";

function ActiveIconButton({ icon, onClick, isActive }) {
  return (
    <>
      {isActive ? (
        <FilledIconButton icon={icon} />
      ) : (
        <IconButton onClick={onClick}>{icon}</IconButton>
      )}
    </>
  );
}

export default ActiveIconButton;
