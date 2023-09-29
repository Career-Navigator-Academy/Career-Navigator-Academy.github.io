import { Box, Grid, Typography, Button } from "@mui/material";
import "../App.css";
import React from "react";
import girl from "../resources/pod.jpg";
import draft from "../resources/bulb.png";
import prog from "../resources/freepik.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Programs() {
  return (
    <Box>
      <Box className="" sx={{ pb: 7 }}>
        <Grid
          justifyContent="center"
          alignContent="center"
          display="flex"
          container
          sx={{ px: { md: 5, xs: 3 } }}
          columnSpacing={{ md: 0, xs: 0 }}
        >
          <Grid item md={7} xs={12}>
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
                  fontSize: { md: 75, xs: 50 },
                }}
              >
                Lets us hold your hands through your
                <span style={{ color: "#0A77C1" }}> career journey</span>
              </Typography>
              <Box>
                <Typography
                  variant="p"
                  style={{ color: "#303030", position: "" }}
                >
                  "We are wholeheartedly dedicated to transforming you into the
                  absolute best version of yourself through immersive hands-on
                  training and attentive mentoring."
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ml: { md: 10, xs: 0 }, mt: { md: 5, xs: 2 } }}>
              <Button
                sx={{
                  textTransform: "none",
                  p: 1,
                }}
                variant="contained"
                className="contained"
              >
                Get Started <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box
              component="img"
              src={girl}
              sx={{
                width: { md: "400px", xs: "100%" },
                // height: { md: "590px", xs: "95%" },
                borderRadius: "35px",
                ml: { md: 12, xs: 0 },
                mt: { md: 3, xs: 3 },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: { md: 10, xs: 2 } }} className="progs">
        <Typography
          variant="h2"
          sx={{ fontWeight: 500, textAlign: "center", mb: 5 }}
        >
          Our{" "}
          <span
            style={{
              color: "linear-gradient(to right, #F2C94C, #F2994A)",
            }}
          >
            Programs
          </span>
        </Typography>

        <Grid
          container
          alignItems="center"
          columnSpacing={4}
          sx={{ py: 7, px: 10 }}
        >
          <Grid item md={6} justifyContent="center" display="center">
            <Box
              component="img"
              src={prog}
              sx={{
                width: { md: "100%", xs: "100%" },
                borderRadius: "30px",
              }}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant="p">What is the program about?</Typography>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Career Navigator Mentorship
            </Typography>
            <br />
            <Typography variant="p">
              Our mission is to provide the guidance and resources necessary to
              help our participants navigate their career paths effectively. We
              are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="p">
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
            <Box sx={{ ml: { md: 0, xs: 0 }, mt: { md: 5, xs: 2 } }}>
              <Button
                sx={{
                  textTransform: "none",
                  p: 1,
                }}
                variant="contained"
                className="contained"
              >
                Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
