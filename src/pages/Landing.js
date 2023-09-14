import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import girl from "../resources/girl1.png";
import draft from "../resources/bulb.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Landing() {
  return (
    <Box>
      <Box>
        <Grid
          container
          sx={{ px: { md: 5, xs: 3 } }}
          columnSpacing={{ md: 2, xs: 0 }}
        >
          <Grid item md={6} xs={12}>
            <Box sx={{ pl: { md: 10, xs: 0 }, pt: { md: 10, xs: 4 } }}>
              <Box
                component="img"
                src={draft}
                sx={{ width: { md: "50px", xs: "35px" } }}
              />
              <Typography
                variant="h1"
                sx={{
                  mb: "20px",
                  fontWeight: 500,
                  fontSize: { md: 75, xs: 55 },
                }}
              >
                Your career journey starts{" "}
                <span style={{ color: "#0A77C1" }}>here</span>
              </Typography>
              <Typography variant="p">
                Are you ready to embark on a journey towards your dream career?
                Career Navigator Academy is here to guide you every step of the
                way. With our practical approach, diverse career tracks, expert
                mentors, and personalized growth plans, you'll have the tools
                and support needed to succeed in your chosen field.
              </Typography>
            </Box>
            <Box sx={{ ml: { md: 10, xs: 0 }, mt: { md: 5, xs: 2 } }}>
              <Button
                sx={{
                  textTransform: "none",
                  p: 1,
                }}
                variant="contained"
              >
                Get Started <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src={girl}
              sx={{ width: { md: "590px", xs: "100%" } }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Second Section */}
      <Box sx={{ bgcolor: "#0A77C1", mt: 5 }}></Box>
    </Box>
  );
}
