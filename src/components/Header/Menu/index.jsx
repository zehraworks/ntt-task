import React from "react";
import More from "./More";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

export default function Menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="container w-5/6 sm:w-full mx-auto">
      <div className="hidden sm:flex justify-between items-center py-3 text-sm">
        <div>
          <Button
            aria-describedby={id}
            variant="text"
            size="small"
            onClick={handleClick}
          >
            Menu Item
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ display: "flex", padding: "15px" }}>
              <Stack>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
              </Stack>
              <Stack>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
                <Typography sx={{ p: 2 }}>The content</Typography>
              </Stack>
              <img
                className="p-4 hidden xl:block"
                src="/subMenuMega.png"
                alt=""
              />
            </Box>
          </Popover>
        </div>
        <p>Menu Item</p>
        <p>Menu Item</p>
        <p>Menu Item</p>

        <More className="hidden sm:flex lg:hidden" />

        <p className="sm:hidden lg:flex">Menu Item</p>
        <p className="sm:hidden lg:flex">Menu Item</p>
        <p className="sm:hidden lg:flex">Menu Item</p>
      </div>
    </div>
  );
}
