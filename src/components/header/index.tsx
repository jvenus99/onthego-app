"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CloseOutlined, MoreVert, Notifications } from "@mui/icons-material";
import Image from "next/image";

import "./styles.css";
import DropdownMenu from "../shared/dropdown-menu";

const navItems = [
  "pesquisa",
  "créditos",
  "campanhas",
  "equipe",
  "configurações",
];

const menuAccountItems = ["Logout"];

const user = {
  name: "Adriano Lima",
  email: "adriano.lima@quintoandar.com.br",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="container-title-menu-mobile">
        <Image src="/acme.png" width={24} height={24} alt="Acme Corporation" />
        <Typography variant="h6" sx={{ my: 2 }}>
          ACME Corporation
        </Typography>
      </div>
      <Divider
        sx={{ color: (theme) => theme.palette.divider, borderWidth: "2px" }}
      />
      <List>
        {navItems.map((item, index) => (
          <div key={index}>
            <ListItem key={item} sx={{ height: "50px" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item}
                  sx={{
                    textTransform: "uppercase",
                    color: (theme) => theme.palette.secondary.light,
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider
              sx={{
                color: (theme) => theme.palette.divider,
                borderWidth: "1px",
              }}
            />
          </div>
        ))}
      </List>
      <div className="container-footer-menu-mobile">
        <Typography variant="subtitle1" sx={{ my: 2 }}>
          <b>{user.name}</b>
        </Typography>
        <Typography
          variant="caption"
          sx={{ my: 2, color: (theme) => theme.palette.secondary.light }}
        >
          {user.email}
          <Divider
            sx={{
              color: (theme) => theme.palette.divider,
              borderWidth: "1px",
              mt: "12px !important",
            }}
          />
        </Typography>
        <List>
          {menuAccountItems.map((item, index) => (
            <div key={index}>
              <ListItem key={item} sx={{ height: "50px" }}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      textTransform: "initial",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        height: "auto",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid",
          borderColor: (theme) => theme.palette.secondary.light,
        }}
      >
        <Toolbar>
          <Image
            className="logo"
            src="/logo.svg"
            alt="logo-onthego"
            width={32}
            height={32}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            {mobileOpen ? <CloseOutlined /> : <MenuIcon />}
          </IconButton>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              flexGrow: 1,
            }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerToggle}
            sx={{
              mr: "6px !important",
              display: { md: "none" },
              float: "right",
            }}
          >
            <Notifications />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex", gap: "12px" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: (theme) => theme.palette.secondary.light }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              flexGrow: 1,
            }}
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
            }}
          >
            <div className="container-title-menu">
              <Image
                src="/acme.png"
                width={24}
                height={24}
                alt="Acme Corporation"
              />
              <Typography variant="h6" sx={{ my: 2 }}>
                ACME Corporation
              </Typography>
            </div>
            <div className="container-footer-menu">
              <Typography variant="subtitle1" sx={{ my: 2 }}>
                <b>{user.name}</b>
              </Typography>
              <Typography
                variant="caption"
                sx={{ my: 2, color: (theme) => theme.palette.secondary.light }}
              >
                {user.email}
              </Typography>
            </div>
            <DropdownMenu iconComponent={<MoreVert />} items={["Logout"]} />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="top"
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              top: "56px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {mobileOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor da sombra
            zIndex: (theme) => theme.zIndex.drawer - 1, // Coloca a sombra abaixo do drawer
          }}
          onClick={handleDrawerToggle} // Fecha o drawer ao clicar na sombra
        />
      )}
    </Box>
  );
}
