import { getCreatureReq } from "../api/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router";

export const DetailCreature = () => {
  const [creature, setCreature] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  const refreshData = () => {
    getCreatureReq(id).then((data) => {
      setCreature(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ mt: "15px" }}>
        <Card sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={creature.image}
            title="creature"
          ></CardMedia>
          <CardContent>
            <Typography>{creature.name}</Typography>
            <Typography>{creature.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                navigate("/");
              }}
              size="small"
              variant="outlined"
            >
              Return
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
