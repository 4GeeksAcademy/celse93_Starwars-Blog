import {
  AppBar,
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../FavoritesContext";
import DeleteIcon from "@mui/icons-material/Delete";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const { favorites, deleteFavorites } = useContext(FavoritesContext);

  const handleClick = (e) => {
    setAnchorEl(e.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(favorites);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton size="large" edge="start" color="inherit" component="div">
            <Avatar src="src/assets/react.svg" />
          </IconButton>
          <Box sx={{ minWidth: 120 }}>
            <Button variant="contained" color="info" onClick={handleClick}>
              Favorites
            </Button>
            <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
              {favorites.map((favorite) => (
                <MenuItem key={`${favorite.uid}-${favorite.name}`}>
                  {favorite.name}{" "}
                  <DeleteIcon
                    fontSize="medium"
                    onClick={() => (
                      deleteFavorites(favorite.name),
                      console.log(favorite.uid),
                      console.log(favorite.name)
                    )}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
