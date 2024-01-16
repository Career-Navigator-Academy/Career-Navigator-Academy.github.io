import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import draft from "../resources/bulb.png";

function Frontend() {
  return (
    <>
      <Box
        sx={{
          color: "#303030",

          py: { md: 7, xs: 5 },
          px: { md: 15, xs: 2 },
        }}
      >
        <Box sx={{ py: 3 }}>
          <Typography variant="h3" textAlign="center">
            Is Front-End Web Development the right choice for you? Let's get to
            know more.
          </Typography>
        </Box>

        <Box sx={{ py: 3 }}>
          <Typography variant="p">
            Front-end web development refers to the process of creating and
            implementing the visual and interactive elements of a website that
            users interact with directly. It involves the use of languages such
            as HTML (Hypertext Markup Language), CSS (Cascading Style Sheets),
            and JavaScript to build the structure, style, and functionality of a
            website's user interface.
          </Typography>
        </Box>

        <Box sx={{ py: 3 }}>
          <Typography variant="p">
            Front-end developers focus on designing and developing the
            client-side of a website, ensuring that it is visually appealing,
            user-friendly, and responsive across various devices and browsers.
            They work on aspects such as layout, navigation, buttons, forms, and
            other elements that users interact with directly.
          </Typography>
        </Box>

        <Grid container columnSpacing={4} rowSpacing={2} my={2}>
          <Grid item md={6} xs={12} my="auto">
            <Box
              component="img"
              src={draft}
              alt="idea bulb"
              sx={{ width: { md: "45px", xs: "35px" } }}
            />{" "}
            <br />
            <Typography variant="p">
              In addition to the core technologies like HTML, CSS, and
              JavaScript, front-end developers often use frameworks and
              libraries such as React, Angular, or Vue.js to streamline the
              development process and enhance the functionality of the web
              applications they build. They also need to consider factors like
              user experience (UX) and user interface (UI) design principles to
              create a seamless and enjoyable browsing experience for users.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150040432.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/*  */}
      </Box>

      <Box
        sx={{ py: { md: 7, xs: 4 }, px: { md: 0, xs: 2 }, bgcolor: "white" }}
      >
        <Grid
          sx={{ px: { md: 0, xs: 2 } }}
          container
          columnSpacing={{ md: 4, xs: 2 }}
          my="auto"
          mx="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="html.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="css.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="js.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="bootstrap.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="sass.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="jquery.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="react.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="redux.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="git.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: 0 }}>
        <Grid
          container
          columnSpacing={5}
          sx={{ bgcolor: "#6C3A5C", color: "#EDEAE8" }}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148986366.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            my="auto"
            sx={{ mx: { xs: 2, md: 0 }, my: { xs: 3, md: "auto" } }}
          >
            <Typography variant="h6">Career Navigator Academy</Typography>
            <Typography
              variant="h4"
              sx={{ pt: 3, color: "#fff", fontWeight: 500 }}
            >
              What Do I Gain
            </Typography>
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Industry-recognized certificates
                </Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">Active mentoring</Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">On-demand skills</Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">Paying opportunities</Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Recommendations and referrals
                </Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />

            <Divider orientation="horizontal" dark />
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        columnSpacing={4}
        rowSpacing={2}
        my={2}
        sx={{
          color: "#303030",

          px: { md: 15, xs: 2 },
        }}
      >
        <Grid item md={6} xs={12} my="auto">
          <Box sx={{ py: 3 }}>
            <Typography variant="p">
              At Career Navigator Academy, we go beyond merely equipping you
              with the essential skills for a successful career; we also provide
              opportunities to kickstart your journey toward success.
            </Typography>
          </Box>
          <Link to="/apply">
            <Button variant="contained">
              Get started with frontend web development
            </Button>
          </Link>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            component="img"
            src="https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Frontend;
