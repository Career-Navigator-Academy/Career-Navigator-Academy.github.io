import { Box, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "../App.css";

export default function BottomNav() {
  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        px: 5,
        py: 10,
      }}
    >
      <Grid
        container
        justifyContent="center"
        display="flex"
        alignContent="center"
      >
        <Grid item md={3} xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 500, py: 1 }}>
            Links
          </Typography>
          <Box>
            <Typography variant="bod2">About</Typography> <br />
            <Typography variant="bod2">Products</Typography> <br />
            <Typography variant="bod2">Resouces</Typography> <br />
            <Typography variant="bod2">Programs</Typography> <br />
            <Typography variant="bod2">Contact</Typography> <br />
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 500, py: 1 }}>
            Resources
          </Typography>
          <Box>
            <Typography variant="bod2">Blogs</Typography> <br />
            <Typography variant="bod2">Courses</Typography> <br />
            <Typography variant="bod2">News</Typography> <br />
            <Typography variant="bod2">Articles</Typography> <br />
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 500, py: 1 }}>
            Join Us
          </Typography>
          <Box>
            <Button className="btn" variant="outlined" sx={{ mb: 2 }}>
              Join Us
            </Button>
            <br />
            <Button className="btn" variant="outlined">
              Partner with Us
            </Button>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 500, py: 1 }}>
            Newsletter
          </Typography>
          <Box>
            <TextField
              label="Subcribe"
              variant="outlined"
              sx={{ pr: 1, color: "#fff" }}
            />
            <Button variant="contained">Subscribe</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
