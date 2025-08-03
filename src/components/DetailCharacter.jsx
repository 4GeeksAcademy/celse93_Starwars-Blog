import { Avatar, Box, Typography, Divider } from "@mui/material";
import { getCharacterReq } from "../api/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const DetailCharacter = () => {
  const [character, setCharacter] = useState({});
  let { id } = useParams();

  const refreshData = () => {
    getCharacterReq(id).then((data) => {
      setCharacter(data);
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
              {character.name}
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
            <Typography variant="subtitle2">{character.name}</Typography>
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
              Birth Year
            </Typography>
            <Typography variant="subtitle2">{character.birth_year}</Typography>
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
              Gender
            </Typography>
            <Typography variant="subtitle2">{character.gender}</Typography>
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
              Height
            </Typography>
            <Typography variant="subtitle2">{character.height}</Typography>
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
              Skin Color
            </Typography>
            <Typography variant="subtitle2">{character.skin_color}</Typography>
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
              Eye Color
            </Typography>
            <Typography variant="subtitle2">{character.eye_color}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
