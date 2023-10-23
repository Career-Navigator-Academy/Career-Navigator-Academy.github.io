import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pic from "../resources/lp.jpg";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <Box
      sx={{
        py: { md: 10, sm: 7, xs: 5 },
        px: { md: 15, sm: 5, xs: 2 },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,

            mb: 5,
          }}
        >
          News & Updates
        </Typography>
      </Box>
      <Grid container columnSpacing={4}>
        <Grid item md={6} sm={12} xs={12}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={pic}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="subtitle1"
                  color="text.secondary"
                >
                  November 2023 - March 2024
                </Typography>
                <Typography variant="h5" component="div">
                  Software Development Path Now Open
                </Typography>
                <Typography variant="p" component="div" sx={{ mt: 2 }}>
                  The application is now open! Embark on your software
                  development journey today. Join a thriving community of
                  ambitious individuals and enhance your skills through our
                  rigorous curriculum.
                </Typography>
                <Link to="/apply">
                  <Button variant="contained" sx={{ borderRadius: 20, mt: 2 }}>
                    Apply
                  </Button>
                </Link>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        {/*  */}
        {/* <Grid item md={6} sm={12} xs={12} sx={{ mt: { md: 0, sm: 3, xs: 3 } }}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={pic}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="subtitle1"
                  color="text.secondary"
                >
                  November 2023 - March 2024
                </Typography>
                <Typography variant="h5" component="div">
                  Software Development Path Now Open
                </Typography>
                <Typography variant="p" component="div" sx={{ mt: 2 }}>
                  The application is now open! Embark on your software
                  development journey today. Join a thriving community of
                  ambitious individuals and enhance your skills through our
                  rigorous curriculum.
                </Typography>
                <Button variant="contained" sx={{ borderRadius: 20, mt: 2 }}>
                  Apply
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
}
