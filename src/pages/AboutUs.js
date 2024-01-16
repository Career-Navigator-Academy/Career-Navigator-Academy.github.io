import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Ready from "../sections/Ready";

export default function AboutUs() {
  return (
    <>
      <Box sx={{ p: { md: 12, xs: 4 } }}>
        <Typography variant="h5" align="center">
          Welcome to Career Navigator Academy, where we are dedicated to guiding
          and empowering individuals to achieve their dream careers. At Career
          Navigator Academy, we believe that with the right mentorship and
          practical experience, anyone can reach their full potential and embark
          on a successful career journey. Our unique approach focuses on
          hands-on projects and activities tailored to specific career tracks,
          ensuring that our participants are well-prepared to excel in their
          chosen fields.
        </Typography>
      </Box>

      <Grid
        container
        // sx={{ py: 7 }}
        columnSpacing={4}
        sx={{ p: { md: 12, xs: 4 }, bgcolor: "#00ABE7" }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12} my="auto">
          <Typography variant="h5" sx={{ fontWeight: 500, py: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="p" align="center">
            At Career Navigator Academy, our mission is simple: to provide the
            guidance and resources necessary to help our participants navigate
            their career paths effectively. We understand that the journey to a
            successful career can be challenging, but with the right support and
            practical experience, it becomes achievable for everyone. We are
            committed to nurturing talent, fostering growth, and instilling
            confidence in our participants as they pursue their dreams.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ p: { md: 12, xs: 4 }, bgcolor: "#F2F3D9" }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 500, py: 3 }}>
          What Sets Us Apart ?
        </Typography>
        <Typography variant="h6" align="center" sx={{ py: 2 }}>
          Practical Hands-On Approach
        </Typography>
        <Typography variant="p" align="center">
          We firmly believe that learning by doing is the most effective way to
          prepare for a successful career. That's why our academy places a
          strong emphasis on practical, real-world projects and activities.
          Participants don't just acquire theoretical knowledge; they apply it
          in practical scenarios, developing essential skills and competencies
          along the way.
        </Typography>
        {/*  */}
        <Typography variant="h6" align="center" sx={{ py: 2 }}>
          Career Tracks
        </Typography>
        <Typography variant="p" align="center">
          Career Navigator Academy offers a variety of career tracks, each
          tailored to specific industries and professions. Whether you aspire to
          become a software developer, graphic designer, entrepreneur, or pursue
          any other career path, we have a track designed to meet your unique
          needs. Our goal is to provide you with a clear roadmap to your dream
          career.
        </Typography>
        {/*  */}
        <Typography variant="h6" align="center" sx={{ py: 2 }}>
          Expert Mentors
        </Typography>
        <Typography variant="p" align="center">
          Our experienced mentors are at the heart of Career Navigator Academy.
          They bring years of industry expertise and a passion for nurturing
          talent. Through one-on-one guidance, mentorship sessions, and
          continuous support, our mentors empower participants to overcome
          challenges and reach their career goals.
        </Typography>
        {/*  */}
        <Typography variant="h6" align="center" sx={{ py: 2 }}>
          Individualized Growth
        </Typography>
        <Typography variant="p" align="center">
          We understand that everyone's journey is unique. That's why we offer
          individualized growth plans within each career track. We identify your
          strengths and areas for improvement, tailoring our guidance to help
          you reach your full potential.
        </Typography>
      </Box>
      <Ready />
    </>
  );
}
