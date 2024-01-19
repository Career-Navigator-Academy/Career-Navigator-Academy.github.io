import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import draft from "../resources/bulb.png";

function Backend() {
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
            Is Back-End Web Development the right choice for you? Let's get to
            know more.
          </Typography>
        </Box>

        <Box sx={{ py: 4, px: { md: 15, xs: 2 } }} textAlign="center">
          <Typography variant="p">
            Back-end web development involves the server-side of web
            applications. While front-end development focuses on the user
            interface and user experience in the browser, the back end deals
            with the server, application, and database that work together to
            deliver and manage the content that users interact with on the front
            end.
          </Typography>
        </Box>

        <Box sx={{ p: { md: 10, xs: 2 }, bgcolor: "#F2E5D7" }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ pb: 2, fontWeight: 500 }}
          >
            Key Aspects Of Back-End Development
          </Typography>
          <ul>
            <li>
              <span style={{ fontWeight: 500 }}>Server-Side Logic:</span>{" "}
              Back-end developers write code that runs on the server, handling
              tasks such as data processing, user authentication, and business
              logic.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 500 }}>Database Management: </span>{" "}
              Back-end developers work with databases to store, retrieve, and
              update data. They design and optimize database structures to
              ensure efficient and secure data storage.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 500 }}>
                APIs (Application Programming Interfaces):{" "}
              </span>{" "}
              Back-end developers create APIs that allow different software
              components to communicate. This enables the front end to request
              and receive data from the server.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 500 }}>Security: </span> Back-end
              developers implement security measures to protect user data,
              prevent unauthorized access, and secure the overall integrity of
              the system.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 500 }}>
                Server Configuration and Deployment:
              </span>{" "}
              Back-end developers are responsible for configuring servers,
              choosing hosting environments, and deploying applications to
              ensure they run smoothly in a production environment.
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
              Common back-end programming languages include Java, Python, Ruby,
              PHP, and Node.js. Frameworks such as Django (Python), Ruby on
              Rails (Ruby), and Express.js (Node.js) provide tools and
              structures to streamline back-end development.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_482257-33556.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
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
              src="js.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
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
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="git.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="sql.png"
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
              Get started with Backend web development
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

export default Backend;
