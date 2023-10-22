import { Box, Grid, Typography, Button } from "@mui/material";
import "../App.css";
import React from "react";
import girl from "../resources/girl.jpg";
import draft from "../resources/bulb.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import About from "../sections/About";
import { TypeAnimation } from "react-type-animation";
import Join from "../sections/Join";
import Paths from "../sections/Paths";
import Ready from "../sections/Ready";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <Box>
      <Box className="land" sx={{ pb: 7 }}>
        <Grid
          justifyContent="center"
          alignContent="center"
          display="flex"
          container
          sx={{ px: { md: 5, xs: 3 } }}
          columnSpacing={{ md: 2, sm: 2, xs: 0 }}
        >
          <Grid item md={4} sm={4} xs={12} justifyContent="center" my="auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Box
                component="img"
                alt="Smiling girl"
                src={girl}
                sx={{
                  width: { md: "90%", xs: "100%" },
                  borderRadius: "35px",
                  ml: { md: 12, xs: 0 },
                  mt: { md: 3, xs: 3 },
                }}
              />
            </motion.div>
          </Grid>
          <Grid item md={8} sm={8} xs={12} justifyContent="center" my="auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Box sx={{ pl: { md: 10, xs: 0 }, pt: { md: 10, xs: 4 } }}>
                <Box
                  component="img"
                  src={draft}
                  alt="idea bulb"
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
                  Your career journey starts <br />
                  <TypeAnimation
                    sequence={["here", 2000, "now", 2000, "with us", 1500]}
                    style={{ color: "#0A77C1" }}
                    repeat={Infinity}
                    speed={1}
                    deletionSpeed={1}
                  />
                </Typography>
                <Box>
                  <Typography
                    variant="p"
                    style={{ color: "#383838", position: "" }}
                  >
                    Are you ready to embark on a journey towards your dream
                    career? Career Navigator Academy is here to guide you every
                    step of the way. With our practical approach, diverse career
                    tracks, expert mentors, and personalized growth plans,
                    you'll have the tools and support needed to succeed in your
                    chosen field.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  ml: { md: 10, xs: 0 },
                  mt: { md: 5, xs: 2 },
                }}
              >
                <Link to="/apply">
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
                </Link>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <About />
      <Paths />
      <Join />
      <Ready />
    </Box>
  );
}
