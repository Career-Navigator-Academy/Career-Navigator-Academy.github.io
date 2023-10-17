import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import third from "../resources/bulb.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <Box
      className="why"
      sx={{
        py: { md: 7, xs: 7 },
      }}
    >
      <Box sx={{ zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            mb: 5,
            color: "#fff",
          }}
        >
          Benefits
        </Typography>
      </Box>

      <Box
        sx={{ py: { md: 5, x: 1 }, mx: { md: 10, xs: 1 } }}
        alignItems="center"
      >
        <Grid container columnSpacing={2} sx={{ color: "#fff" }}>
          <Grid item md={4} sm={12} xs={12} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "start", xs: "center" },
              }}
            >
              <img
                src={third}
                alt="Your alt text here"
                style={{
                  width: "12%",
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{ fontWeight: 500, textAlign: { md: "start", xs: "center" } }}
            >
              Discover the practical expertise that will guide you towards your
              dream career, enhancing your skillset and unlocking your true
              potential.
            </Typography>
            <Box
              justifyContent={{ md: "flex-start", xs: "center", sm: "center" }}
              display="flex"
              sx={{ pt: 5 }}
            >
              <Link to="/apply">
                <Button variant="contained" className="containedlight">
                  Get Started <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />{" "}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            sm={12}
            xs={12}
            display="flex"
            align="center"
            justifyContent="center"
            sx={{ zIndex: 1, pt: { md: 0, xs: 7 } }}
          >
            <Grid container>
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{ p: 2 }}
                className="cardtext"
              >
                <Box className="circle">
                  <Typography className="text" variant="h5">
                    01
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Skill Development
                </Typography>
                <Typography>
                  Acquire valuable skills and knowledge from mentors.
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{ p: 2 }}
                className="cardtext"
              >
                <Box className="circle">
                  <Typography className="text" variant="h5">
                    02
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Networking
                </Typography>
                <Typography>
                  Expand your professional network through connections.
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{ p: 2 }}
                className="cardtext"
              >
                <Box className="circle">
                  <Typography className="text" variant="h5">
                    03
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Access to Resources
                </Typography>
                <Typography>
                  Access resources, such as books, courses, or industry
                  contacts, that can accelerate your career growth.
                </Typography>
              </Grid>

              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{ p: 2 }}
                className="cardtext"
              >
                <Box className="circle">
                  <Typography className="text" variant="h5">
                    04
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Career Advancement
                </Typography>
                <Typography>
                  Mentors can Fast-track your career advancement by helping you
                  make informed decisions and avoid common pitfalls.
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{ p: 2 }}
                className="cardtext"
              >
                <Box className="circle">
                  <Typography className="text" variant="h5">
                    05
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Feedback and Evaluation
                </Typography>
                <Typography>
                  Regular feedback from a mentor can help you identify areas for
                  improvement and track your progress.
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{ p: 2 }}
                className="cardtext"
              >
                <Box className="circle">
                  <Typography className="text" variant="h5">
                    07
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Job Opportunities
                </Typography>
                <Typography variant="p">
                  Mentors may recommend you for job openings or introduce you to
                  potential employers.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
