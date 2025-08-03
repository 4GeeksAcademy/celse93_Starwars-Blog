import { Box, Typography } from "@mui/material";
import { Characters } from "./Characters";
import { Planets } from "./Planets";
import React, { useState, useEffect } from "react";

export const Dashboard = () => {


  return (
    <>
      <Box sx={{ mt: 5 }} >
        <Box sx={{ my: 2 }} >
          <Typography color="warning" variant="h4" gutterBottom>Characteres</Typography>
          <Characters />
        </Box>
        <Box sx={{ mt: 2 }} >
          <Typography color="warning" variant="h4" gutterBottom>Planets</Typography>
          <Planets />
        </Box>
      </Box>
    </>
  );
};
