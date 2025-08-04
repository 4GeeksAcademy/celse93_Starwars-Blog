import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { FavoritesContext } from "../FavoritesContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

  return (
    <>
      <AppBar sx={{ color: "yellow", bgcolor: "black" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton size="large" edge="start" color="inherit" component="div">
            <Avatar
              src="src/assets/starwarslogo.png"
              sx={{ width: 130, height: 80 }}
            />
          </IconButton>
          <Box sx={{ minWidth: 120 }}>
            <Button
              variant="contained"
              sx={{ color: "black", bgcolor: "yellow" }}
              onClick={handleClick}
            >
              <Typography>Favorites</Typography>
              <Typography
                sx={{
                  bgcolor: "black",
                  color: "yellow",
                  borderRadius: "50%",
                  ml: 1,
                  width: 25,
                }}
              >
                {favorites.length}
              </Typography>
              <ArrowDropDownIcon />
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
      <hr></hr>
    </>
  );
};
