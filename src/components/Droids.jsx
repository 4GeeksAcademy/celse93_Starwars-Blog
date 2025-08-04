import { getAllDroidssReq } from "../api/api";
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

export const Droids = () => {
  const [droids, setDroids] = useState([]);
  const { addFavorites, deleteFavorites, isFavorite } =
    useContext(FavoritesContext);
  let navigate = useNavigate();

  const refreshData = () => {
    getAllDroidssReq().then((data) => {
      setDroids(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        {droids.map((droid) => (
          <Card key={droid._id} sx={{ minWidth: 300, mr: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={droid.image}
              title="droid"
            ></CardMedia>
            <CardContent>
              <Typography>{droid.name}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate(`/droids/${droid._id}`);
                }}
                size="small"
                variant="contained"
                sx={{ color: "black", bgcolor: "yellow" }}
              >
                Learn more!
              </Button>
              <IconButton>
                <FavoriteIcon
                  sx={{
                    color: isFavorite(droid._id, droid.name)
                      ? "yellow"
                      : "black",
                  }}
                  fontSize="medium"
                  onClick={
                    isFavorite(droid._id, droid.name)
                      ? () => {
                          deleteFavorites(droid.name);
                        }
                      : () => {
                          addFavorites(droid._id, droid.name);
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
