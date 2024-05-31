"use client";
import React, { useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MenuItem } from "@mui/material";
import { UserContext } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { account } from "@/appwrite/config";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();

  if (!userContext) {
    throw new Error("UserContext must be used within a ContextProvider");
  }

  const { user, setUser } = userContext;

  const handleSignOut = async () => {
    try {
      await account.deleteSessions();
      setUser(null);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            XeroCode
          </Typography>
          {user ? (
            <Button onClick={handleSignOut} color="inherit">
              Logout
            </Button>
          ) : (
            <Button href="/login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
