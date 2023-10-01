import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Resources() {
  return (
    <Box sx={{ px: { md: 25, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            mb: 5,
          }}
        >
          Resources
        </Typography>
      </Box>
      <Grid container columnSpacing={8}>
        <Grid item md={6} sx={{ p: 2 }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527090975279-5d5ef18c6734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZnVzZWQlMjBibGFjayUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            sx={{ width: "100%" }}
          />
          <Typography variant="body2">September 29th 2023</Typography>
          <a href="/">
            <Typography variant="h6">
              Getting started with JavaScript libraries and frame works: lesson
              1
            </Typography>
          </a>
        </Grid>
        {/*  */}

        <Grid item md={6} sx={{ p: 2, pt: { md: 2, xs: 7 } }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527090975279-5d5ef18c6734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZnVzZWQlMjBibGFjayUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            sx={{ width: "100%" }}
          />
          <Typography variant="body2">September 29th 2023</Typography>
          <a href="/">
            <Typography variant="h6">
              Getting started with JavaScript libraries and frame works: lesson
              1
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
