import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { getSpecieReq } from "../api/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const DetailSpecie = () => {
  const [specie, setSpecie] = useState({});
  let { species, id } = useParams();
  let navigate = useNavigate();

  const refreshData = () => {
    getSpecieReq(species, id).then((data) => {
      setSpecie(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ mt: "15px", justifyContent: "center", display: "flex" }}>
        <Card sx={{ width: 500, mr: 2 }}>
          <CardMedia sx={{ height: 250 }} image={specie.image} title="specie" />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              {specie.name}
            </Typography>
            <Typography>{specie.description}</Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              size="small"
              variant="contained"
              sx={{ color: "black", bgcolor: "yellow" }}
            >
              Return
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
