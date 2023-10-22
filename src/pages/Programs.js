import { Box, Grid, Typography, Button } from "@mui/material";
import "../App.css";
import React from "react";
import girl from "../resources/pod.jpg";
import draft from "../resources/bulb.png";
import prog from "../resources/freepik.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          columnSpacing={{ md: 4, xs: 0 }}
        >
          <Grid item md={7} sm={7} xs={12} justifyContent="center" my="auto">
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
              <Box sx={{ pl: { md: 10, sm: "5", xs: 0 } }}>
                <Box
                  component="img"
                  src={draft}
                  sx={{
                    width: { md: "50px", xs: "35px" },
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    mb: "20px",
                    fontWeight: 500,
                    fontSize: { md: 75, xs: 50 },
                  }}
                >
                  Let us hold your hands through your
                  <span style={{ color: "#0A77C1" }}> career journey</span>
                </Typography>
                <Box>
                  <Typography
                    variant="p"
                    style={{ color: "#404040", position: "" }}
                  >
                    "We are wholeheartedly dedicated to transforming you into
                    the absolute best version of yourself through immersive
                    hands-on training and attentive mentoring."
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ ml: { md: 10, xs: 0 }, mt: { md: 5, xs: 2 } }}>
                <Button
                  component="a"
                  href="/apply"
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
            </motion.div>
          </Grid>
          <Grid item md={5} xs={12} sm={5} justifyContent="center" my="auto">
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
                src={girl}
                alt="A girl sitting on a chair with a podcast microphone"
                sx={{
                  width: { md: "70%", sm: "90%", xs: "100%" },
                  borderRadius: "35px",
                  mt: { md: 0, xs: 4 },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: { md: 10, xs: 7 } }} className="progs">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            mb: { md: 5, xs: 3 },
            px: { md: 0, xs: 1 },
          }}
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
          sx={{ py: 7, px: { md: 10, xs: 3 } }}
        >
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            justifyContent="center"
            display="center"
          >
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
                src={prog}
                alt="a girl sitting in front of a desktop with headphones on"
                sx={{
                  width: { md: "100%", xs: "100%" },
                  borderRadius: "30px",
                }}
              />
            </motion.div>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
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
              <Typography variant="p" sx={{ color: "#303030" }}>
                What is the program about?
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Career Navigator Mentorship
              </Typography>
              <br />
              <Typography variant="p" sx={{ color: "#303030" }}>
                Our mission is to provide the guidance and resources necessary
                to help our participants navigate their career paths
                effectively. We are committed to nurturing talent, fostering
                growth, and instilling confidence in our participants as they
                pursue their dreams.
              </Typography>
              <br style={{ marginBottom: 18 }} />
              <Typography variant="p" sx={{ color: "#303030" }}>
                We are committed to nurturing talent, fostering growth, and
                instilling confidence in our participants as they pursue their
                dreams.
              </Typography>
              <Box sx={{ ml: { md: 0, xs: 0 }, mt: { md: 5, xs: 2 } }}>
                <Link to="/apply">
                  <Button
                    sx={{
                      textTransform: "none",
                      p: 1,
                    }}
                    variant="contained"
                    className="containedlight"
                  >
                    Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
