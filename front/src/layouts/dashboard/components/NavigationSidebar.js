import React, { useState } from "react";
import { Stack, IconButton, Divider, Box } from "@mui/material";
import { ChatCircleDots, Phone, Users, Gear } from "phosphor-react";
import FilledIconButton from "../../../components/FilledIconButton";
import ActiveIconButton from "../../../components/ActiveIconButton";

const nav_buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

function NavigationSidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Stack
      spacing={3}
      direction="column"
      alignItems="center"
      sx={{ width: "max-content" }}
    >
      {nav_buttons.map((b, idx) => {
        return (
          <ActiveIconButton
            key={idx}
            icon={b.icon}
            onClick={() => setSelectedIndex(idx)}
            isActive={idx === selectedIndex}
          />
        );
      })}

      <Divider sx={{ width: "100%" }} />

      <ActiveIconButton
        icon={<Gear />}
        onClick={() => setSelectedIndex(nav_buttons.length + 1)}
        isActive={selectedIndex === nav_buttons.length + 1}
      />
    </Stack>
  );
}

export default NavigationSidebar;
