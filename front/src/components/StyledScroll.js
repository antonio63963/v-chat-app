import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

const StyledScroll = styled("div")((theme) => ({
  flexGrow: 1,
  height: "100%",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor:
    theme.theme.palette.mode === "dark" ? "#161C24 #212B36" : null,
  transition: "all 1s easy",

  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 20,
    border: "3px solid lightgrey",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#000",
  },
}));

export default StyledScroll;

function CustomScrollbar({ timer, children }) {
  const [isShownScrollbar, setIsShownScrollbar] = useState(false);
  let timerId;
  let mouseY;
  let mouseX;

  const onMouseMove = (e) => {
    mouseY = e.clientY;
    setIsShownScrollbar(true);
    if (!timerId) {
      // the first timer difine the stop move poin by Y axis
      // the second timer check is mousemove end
      timerId = setTimeout(() => {
        mouseY = e.clientY;
        mouseX = e.clientX;
        clearTimeout(timerId);
        timerId = null;

        timerId = setTimeout(() => {
          if (mouseY === e.clientY && mouseX === e.clientX) {
            setIsShownScrollbar(false);
          } else {
            setIsShownScrollbar(true);
          }
          clearTimeout(timerId);
          timerId = null;
        }, timer);
      }, timer);
    }
  };

  useEffect(() => {}, []);
  return (
    <StyledScroll
      sx={{ overflowY: isShownScrollbar ? "auto" : "hidden" }}
      onMouseMove={onMouseMove}
    >
      {children}
    </StyledScroll>
  );
}

export { CustomScrollbar };
