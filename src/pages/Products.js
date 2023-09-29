import { Box, Typography } from "@mui/material";
import React from "react";
import "../App.css";

export default function Products() {
  return (
    <Box sx={{ py: { md: 17, xs: 5 } }} className="pp" align="center">
      <Typography
        className="div"
        sx={{ pb: { md: 5, xs: 1 } }}
        justifyContent="center"
        display="flex"
        variant="h1"
      >
        Coming Soon
      </Typography>

      <Typography sx={{ p: 5 }} textAlign="center" variant="h5">
        Welcome to our project showcase, where we proudly display the collective
        fruits of our teamwork! Here, you'll discover a treasure trove of
        remarkable projects and the extraordinary technological solutions we
        craft with passion and expertise.
      </Typography>
    </Box>
  );
}
