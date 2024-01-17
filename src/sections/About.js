import React from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";

import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box className="about">
      <Container
        sx={{
          py: { md: 12, xs: 5 },
          // display: { md: "block", xs: "none" },
          color: "#fff",
        }}
      >
        {/* <Typography
          variant="h2"
          sx={{ fontWeight: 500, textAlign: "center", mb: 5 }}
        >
          About The{" "}
          <span
            style={{
              color: "linear-gradient(to right, #F2C94C, #F2994A)",
            }}
          >
            Programme
          </span>
        </Typography> */}

        <Grid container alignItems="center" columnSpacing={4} sx={{ py: 7 }}>
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
              <Typography variant="p" sx={{ color: "#C6E5F9" }}>
                What is the program about?
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, marginTop: "10px" }}
              >
                We firmly believe that learning by doing is the most effective
                way to a successful career.
              </Typography>
              <br />
              <Typography variant="p" sx={{ color: "#C6E5F9" }}>
                The program is carefully crafted to empower you with the
                essential skills and create avenues for growth in your chosen
                career path. Our commitment is to guide you every step of the
                way, ensuring that you embark on a successful journey toward
                success.
              </Typography>
              <br />
              <Link to="/about">
                <Button
                  sx={{
                    color: "white",
                    textTransform: "none",
                    textDecoration: "underline",
                    marginTop: "10px",
                  }}
                >
                  Learn more <KeyboardDoubleArrowRightIcon />
                </Button>
              </Link>
            </motion.div>
          </Grid>

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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwcGVyc29uJTIwb24lMjBhJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                alt="girl sitting in front of a desktop with headphones on"
                sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "10px" }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
