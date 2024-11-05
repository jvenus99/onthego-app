"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box, useTheme } from "@mui/material";

interface DropdownMenuProps {
  iconComponent: React.ReactNode;
  items: string[];
}

export default function DropdownMenu(props: DropdownMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {props.iconComponent}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
            height: "auto",
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {props.items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{
              color: theme.palette.primary.main,
              p: "12px !important",
            }}
          >
            <Box sx={{ margin: "16px" }}>{item}</Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
