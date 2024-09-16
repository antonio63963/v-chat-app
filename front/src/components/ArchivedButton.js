import React from "react";
import { Stack, Button, Divider } from "@mui/material";
import { ArchiveBox } from "phosphor-react";

function ArchivedButton({ onClick }) {
  return (
    <Stack spacing={1} sx={{ pt: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <ArchiveBox size={24} />
        <Button onClick={onClick}>Archived</Button>
      </Stack>
      <Divider sx={{  width: "100%" }} />
    </Stack>
  );
}

export default ArchivedButton;
