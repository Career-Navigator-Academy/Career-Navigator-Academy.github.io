import { Box, Grid, Typography, Button } from "@mui/material";
import "../App.css";
import React from "react";
import girl from "../resources/girl1.png";
import draft from "../resources/bulb.png";
import pic from "../resources/student1.png";
import swirl from "../resources/swirl.png";
import swirl2 from "../resources/swirl2.png";
import boy from "../resources/boy.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Landing() {
  return (
    <Box>
      <Box>
        <Grid
          justifyContent="center"
          alignContent="center"
          display="flex"
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
              <Typography variant="p" style={{ color: "#303030" }}>
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
      <Box
        sx={{
          bgcolor: "#0A77C1",
          pt: { md: 15, xs: 5 },
          px: { md: 15, xs: 2 },
          color: "#fff",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 500, textAlign: "center" }}>
          About The <span style={{ color: "#C6E5F9" }}>Program</span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={swirl}
            alt="Swirl Image"
            style={{
              width: "100px",
              height: "auto",
            }}
          />
        </Box>

        <Grid container columnSpacing={4}>
          <Grid item md={6} xs={12} justifyContent="center" display="center">
            <Box
              component="img"
              src={pic}
              sx={{ width: { md: "100%", xs: "100%" } }}
            />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: { md: 9, xs: 3 } }}>
            <Typography variant="h4" sx={{ py: 2, fontWeight: 500 }}>
              We firmly believe that learning by doing is the most effective way
              to prepare for a successful career.
            </Typography>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              Our mission is simple: to provide the guidance and resources
              necessary to help our participants navigate their career paths
              effectively. We understand that the journey to a successful career
              can be challenging, but with the right support and practical
              experience, it becomes achievable for everyone. We are committed
              to nurturing talent, fostering growth, and instilling confidence
              in our participants as they pursue their dreams.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
            <Box sx={{ mt: { md: 5, xs: 2 } }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#C6E5F9",
                  color: "#303030",
                  p: 1,
                }}
                variant="outlined"
              >
                Get Started <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Third Section */}

      <Box
        sx={{
          color: "#303030",
          pt: { md: 15, xs: 5 },
          px: { md: 15, xs: 2 },
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 500, textAlign: "center" }}>
          Advance Your <span style={{ color: "#0A77C1" }}>Career</span> With Our
          Vast Paths
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={swirl2}
            alt="Swirl Image"
            style={{
              width: "100px",
              height: "auto",
            }}
          />
        </Box>

        <Grid container columnSpacing={4}>
          <Grid item md={6} xs={12} sx={{ mt: { md: 15, xs: 3 } }}>
            <Box
              component="img"
              src={draft}
              sx={{ width: { md: "50px", xs: "35px" } }}
            />
            <Typography variant="h4" sx={{ py: 2, fontWeight: 500 }}>
              We firmly believe that learning by doing is the most effective way
              to prepare for a successful career.
            </Typography>
            <Typography variant="p" sx={{ color: "#303030" }}>
              Our mission is simple: to provide the guidance and resources
              necessary to help our participants navigate their career paths
              effectively. We understand that the journey to a successful career
              can be challenging, but with the right support and practical
              experience, it becomes achievable for everyone. We are committed
              to nurturing talent, fostering growth, and instilling confidence
              in our participants as they pursue their dreams.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="p" sx={{ color: "#303030" }}>
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
            <Box sx={{ mt: { md: 5, xs: 2 } }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#C6E5F9",
                  color: "#303030",
                  p: 1,
                }}
                variant="outlined"
              >
                Get Started <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} justifyContent="center" display="center">
            <Box
              component="img"
              src={boy}
              sx={{ width: { md: "400px", xs: "100%" } }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
