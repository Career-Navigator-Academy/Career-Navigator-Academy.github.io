import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import draft from "../resources/bulb.png";

function FullStack() {
  return (
    <>
      <Box
        sx={{
          color: "#303030",

          py: { md: 7, xs: 5 },
        }}
      >
        <Box sx={{ py: 3, px: { md: 15, xs: 2, lg: 25 } }}>
          <Typography variant="h3" textAlign="center">
            Is Full-Stack Web Development the right choice for you? Let's get to
            know more.
          </Typography>
        </Box>

        <Box sx={{ py: 4, px: { md: 15, xs: 2, lg: 25 } }} textAlign="center">
          <Typography variant="p">
            Full-stack web development refers to the practice of working with
            both the front-end (client-side) and back-end (server-side) of a web
            application. A full-stack web developer is skilled in a range of
            technologies that enable them to handle the entire development
            process, from designing user interfaces and implementing features on
            the client side to managing databases and server logic on the back
            end.
          </Typography>
        </Box>

        <Box sx={{ p: { md: 10, xs: 2, lg: 20 }, bgcolor: "#9CFC97" }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ pb: 2, fontWeight: 500 }}
          >
            Key Aspects Of Full-Stack Web Development
          </Typography>
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Front-End Development :
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Languages and Technologies:
              </span>{" "}
              HTML, CSS, JavaScript
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Frameworks/Libraries: </span>{" "}
              React, Angular, Vue.js
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Responsibilities: </span>{" "}
              Creating the user interface, handling user interactions, and
              ensuring a positive user experience.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Back-End Development :
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Languages and Technologies:
              </span>{" "}
              Node.js, Python (Django, Flask), Ruby (Ruby on Rails), Java
              (Spring), PHP (Laravel)
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Databases: </span> MySQL,
              PostgreSQL, MongoDB, Firebase
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Responsibilities: </span>{" "}
              Implementing server logic, managing databases, handling user
              authentication, and serving data to the front end.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Database Management:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Database Systems:</span> SQL
              (Structured Query Language) for relational databases, NoSQL
              databases like MongoDB for non-relational data.
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Responsibilities: </span>{" "}
              Designing and managing databases, ensuring data integrity, and
              optimizing database performance.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Server Management:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Server Deployment:</span>{" "}
              Platforms like AWS, Heroku, or DigitalOcean
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Responsibilities: </span>{" "}
              Configuring servers, managing hosting environments, and ensuring
              the scalability and reliability of the application.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Version Control/Git:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Tools:</span> Git, GitHub,
              GitLab
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Responsibilities: </span>{" "}
              Tracking changes to the codebase, collaborating with other
              developers, and maintaining code version history.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Web Architecture and APIs:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>RESTful APIs, GraphQL</span>
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Responsibilities: </span>{" "}
              Designing and consuming APIs, understanding how data flows between
              the front end and back end.
            </li>
          </ul>
        </Box>

        <Grid
          container
          columnSpacing={4}
          rowSpacing={2}
          my={2}
          sx={{ px: { md: 15, xs: 2, lg: 25 } }}
        >
          <Grid item md={6} xs={12} my="auto">
            <Box
              component="img"
              src={draft}
              alt="idea bulb"
              sx={{ width: { md: "45px", xs: "35px" } }}
            />{" "}
            <br />
            <Typography variant="p">
              Full-stack developers need to be versatile, understanding both the
              user interface and experience (UI/UX) as well as the server-side
              logic and database management. This holistic approach allows them
              to create fully functional and dynamic web applications.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/*  */}
      </Box>

      <Box
        sx={{ py: { md: 7, xs: 4 }, px: { md: 7, xs: 2 }, bgcolor: "white" }}
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
              src="npm.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="express.png"
              sx={{ width: { md: "110%", xs: "80%" } }}
            />
          </Grid>

          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="API.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="node.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="npm.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="mongodb.png"
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
              Get started with FullStack web development
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

export default FullStack;
