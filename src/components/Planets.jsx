import { getAllPlanetsReq } from "../api/api";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";
import { FavoritesContext } from "../FavoritesContext";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { favorites, addFavorites, deleteFavorites, isFavorite } =
    useContext(FavoritesContext);
  let navigate = useNavigate();

  const refreshData = () => {
    getAllPlanetsReq().then((data) => {
      setPlanets(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        {planets.map((planet) => (
          <Card key={planet.uid} sx={{ minWidth: 300, mr: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://placehold.co/600x400"
              title="planet"
            ></CardMedia>
            <CardContent>
              <Typography>{planet.name}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate(`/planets/${planet.uid}`);
                }}
                size="small"
                variant="outlined"
              >
                Learn more!
              </Button>
              <IconButton>
                <FavoriteIcon
                  sx={{
                    color: isFavorite(planet.uid, planet.name)
                      ? "red"
                      : "black",
                  }}
                  fontSize="medium"
                  onClick={
                    isFavorite(planet.uid, planet.name)
                      ? () => {
                          deleteFavorites(planet.name);
                        }
                      : () => {
                          addFavorites(planet.uid, planet.name);
                        }
                  }
                />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
