"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem"; // Correct import
import { useContext } from "react";
import { UserContext } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { account } from "@/appwrite/config";

const Navbar: React.FC = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Navbar must be used within a ContextProvider");
  }

  const { user, setUser } = context;
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await account.deleteSessions();
      setUser(undefined);
      router.push("/login");
    } catch (err) {
      console.log(err);
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
