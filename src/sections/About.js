import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import pic from "../resources/freepik.jpg";
import boy from "../resources/boy2.jpg";
import students from "../resources/africa.jpg";

export default function About() {
  return (
    <Box className="about">
      <Container
        sx={{
          py: { md: 12, xs: 5 },
          display: { md: "block", xs: "none" },
          color: "#fff",
        }}
      >
        <Typography
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
        </Typography>

        <Grid container alignItems="center" columnSpacing={4} sx={{ py: 7 }}>
          <Grid item md={6}>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              What is the program about?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              We firmly believe that learning by doing is the most effective way
              to prepare for a successful career.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              Our mission is to provide the guidance and resources necessary to
              help our participants navigate their career paths effectively. We
              are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
          </Grid>
          <Grid item md={6} justifyContent="center" display="center">
            <Box
              component="img"
              src={pic}
              sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "30px" }}
            />
          </Grid>
        </Grid>

        {/* Grid 2 */}

        <Grid container alignItems="center" columnSpacing={4} sx={{ py: 7 }}>
          <Grid item md={6} justifyContent="center" display="center">
            <Box
              component="img"
              src={students}
              sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "30px" }}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              How long is the program ?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              4 Acive months of rigorous training
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              We understand that the journey to a successful career can be
              challenging, but with the right support and practical experience,
              it becomes achievable for everyone.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
          </Grid>
        </Grid>

        {/* Grid 3 */}

        <Grid container alignItems="center" columnSpacing={4} sx={{ py: 7 }}>
          <Grid item md={6}>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              What happens after the program?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Welcome to the real world
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              We find/ create real world opportunities for participants to
              enagage in real world jobs, show their skill, land internship
              roles and even get job opportunities. Want to start your own
              business/ venture? We will guide and support you through your
              journey.
            </Typography>
          </Grid>
          <Grid item md={6} justifyContent="center" display="center">
            <Box
              component="img"
              src={boy}
              sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "30px" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Mobile */}

      <Container
        className="aboutmobile"
        sx={{
          py: 10,
          display: { md: "none", xs: "block" },
          color: "#fff",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 500, textAlign: "center", pb: 7 }}
        >
          About The <span style={{ color: "#C6E5F9" }}>Programme</span>
        </Typography>

        <Grid container columnSpacing={4}>
          <Grid item xs={12} justifyContent="center" display="center">
            <Box
              component="img"
              src={pic}
              sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "30px" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: { md: 9, xs: 3 } }}>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              What is the program about?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500, pt: 3 }}>
              We firmly believe that learning by doing is the most effective way
              to prepare for a successful career.
            </Typography>
            <Typography variant="h6" sx={{ color: "#C6E5F9", pt: 3 }}>
              Our mission is to provide the guidance and resources necessary to
              help our participants navigate their career paths effectively. We
              are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="h6" sx={{ color: "#C6E5F9", pt: 3 }}>
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
          </Grid>
        </Grid>

        {/* Grid 2 */}

        <Grid container columnSpacing={4} sx={{ py: 12 }}>
          <Grid item xs={12} justifyContent="center" display="center">
            <Box
              component="img"
              src={students}
              sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "30px" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: { md: 9, xs: 3 } }}>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              How long is the program ?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500, pt: 3 }}>
              4 Acive months of rigorous training
            </Typography>
            <Typography variant="h6" sx={{ color: "#C6E5F9", pt: 3 }}>
              We understand that the journey to a successful career can be
              challenging, but with the right support and practical experience,
              it becomes achievable for everyone.
            </Typography>
            <br style={{ marginBottom: 18 }} />
            <Typography variant="h6" sx={{ color: "#C6E5F9", pt: 3 }}>
              We are committed to nurturing talent, fostering growth, and
              instilling confidence in our participants as they pursue their
              dreams.
            </Typography>
          </Grid>
        </Grid>

        {/* Grid 3 */}

        <Grid container columnSpacing={4}>
          <Grid item xs={12} justifyContent="center" display="center">
            <Box
              component="img"
              src={boy}
              sx={{ width: { md: "100%", xs: "100%" }, borderRadius: "30px" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: { md: 9, xs: 3 } }}>
            <Typography variant="p" sx={{ color: "#C6E5F9" }}>
              What happens after the program?
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500, pt: 3 }}>
              Welcome to the real world
            </Typography>
            <Typography variant="h6" sx={{ color: "#C6E5F9", pt: 3 }}>
              We find/ create real world opportunities for participants to
              enagage in real world jobs, show their skill, land internship
              roles and even get job opportunities. Want to start your own
              business/ venture? We will guide and support you through your
              journey.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
