import { getAllCharactersReq } from "../api/api";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";
import { FavoritesContext } from "../FavoritesContext";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addFavorites, deleteFavorites, isFavorite } =
    useContext(FavoritesContext);
  let navigate = useNavigate();

  const refreshData = () => {
    getAllCharactersReq().then((data) => {
      setCharacters(data);
    });
  };

  useEffect(refreshData, []);

  console.log(favorites);
  console.log(isFavorite);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        {characters.map((character) => (
          <Card key={character.uid} sx={{ minWidth: 300, mr: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://placehold.co/600x400"
              title="character"
            ></CardMedia>
            <CardContent>
              <Typography>{character.name}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate(`/people/${character.uid}`);
                }}
                size="small"
                variant="outlined"
              >
                Learn more!
              </Button>
              <IconButton>
                <FavoriteIcon
                  sx={{
                    color: isFavorite(character.uid, character.name)
                      ? "red"
                      : "black",
                  }}
                  onClick={
                    isFavorite(character.uid, character.name)
                      ? () => deleteFavorites(character.name)
                      : () => addFavorites(character.uid, character.name)
                  }
                  fontSize="medium"
                />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
