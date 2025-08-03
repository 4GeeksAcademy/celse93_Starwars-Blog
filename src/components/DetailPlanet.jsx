import { getPlanetReq } from "../api/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Avatar, Box, Typography, Divider } from "@mui/material";

export const DetailPlanet = () => {
  const [planet, setPlanet] = useState({});
  let { id } = useParams();

  const refreshData = () => {
    getPlanetReq(id).then((data) => {
      setPlanet(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ mt: "15px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "500px" }}>
            <Avatar
              sx={{ width: "450px", height: "400px" }}
              alt="Image"
              src="https://placehold.co/600x400"
            />
          </Box>
          <Box
            sx={{
              width: "500px",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              {planet.name}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              Repudiandae neque dolor iure doloremque. Placeat aut doloremque
              asperiores accusantium debitis aut. Blanditiis voluptatem vitae
              qui quidem in. Distinctio voluptatibus eveniet doloribus sequi non
              occaecati minus. Ipsa enim dolorum est dolores saepe expedita
              cupiditate.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mt: "20px", mb: "20px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "150px",
              mr: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Name
            </Typography>
            <Typography variant="subtitle2">{planet.name}</Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "150px",
              mr: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Climate
            </Typography>
            <Typography variant="subtitle2">{planet.climate}</Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "150px",
              mr: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Population
            </Typography>
            <Typography variant="subtitle2">{planet.population}</Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "150px",
              mr: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Orbital Period
            </Typography>
            <Typography variant="subtitle2">{planet.orbital_period}</Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "150px",
              mr: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Rotation Period
            </Typography>
            <Typography variant="subtitle2">{planet.rotation_period}</Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "150px",
              mr: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Diameter
            </Typography>
            <Typography variant="subtitle2">{planet.diameter}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
