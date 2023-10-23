import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardHeader, Grid, Avatar } from "@mui/material";
import logo from "../resources/logo.png";
import { Link } from "react-router-dom";

export default function Partner() {
  return (
    <Box
      sx={{
        px: { md: 25, xs: 2 },
        py: { md: 15, xs: 5 },
        mb: 10,
        color: "#fff",
      }}
    >
      <Grid container>
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          sx={{ py: { xs: 3, md: 0 }, zIndex: 1 }}
          m="auto"
          justifyContent="center"
        >
          <Card
            variant="outlined"
            className="partner"
            sx={{ maxWidth: 345, bgcolor: "#F5BB00", color: "#fff", zIndex: 1 }}
          >
            <CardHeader
              sx={{ p: 3 }}
              avatar={
                <Avatar
                  sx={{ bgcolor: "#000", width: 50, height: 50 }}
                  aria-label="recipe"
                  src={logo}
                >
                  C
                </Avatar>
              }
              title={
                <Typography
                  variant="body2"
                  color="#fff"
                  underline="none"
                  sx={{ fontWeight: "medium", zIndex: 1 }}
                >
                  Career Navigator Academy
                </Typography>
              }
              // subheader="September 14, 2016"
            />
            <CardContent sx={{ px: 4 }}>
              <Typography
                sx={{ pb: 2, fontWeight: 700, zIndex: 1 }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Donate to Career Navigator Academy
              </Typography>
              <Typography variant="body2" color="#F5F5F5">
                Join us in making a difference! Your donation to Career
                Navigator Academy will empower us to reach even more individuals
                on their journey to success. Together, we can create brighter
                futures and open doors of opportunity. Give today and help us
                help more people.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 3, py: 2 }}>
              <Link to="/partner/donate">
                <Button
                  variant="contained"
                  sx={{ borderRadius: 20 }}
                  size="small"
                >
                  Start Now
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} xs={12} sm={6} sx={{ py: { xs: 3, md: 0 } }}>
          <Card
            variant="outlined"
            className="partner"
            sx={{ maxWidth: 345, bgcolor: "#FF9B71", zIndex: 1 }}
          >
            <CardHeader
              sx={{ p: 3 }}
              avatar={
                <Avatar
                  sx={{ bgcolor: "#000", width: 50, height: 50 }}
                  aria-label="recipe"
                  src={logo}
                >
                  C
                </Avatar>
              }
              title={
                <Typography
                  variant="body2"
                  color="#fff"
                  underline="none"
                  sx={{ fontWeight: "medium", zIndex: 1 }}
                >
                  Career Navigator Academy
                </Typography>
              }
              // subheader="September 14, 2016"
            />
            <CardContent sx={{ px: 4 }}>
              <Typography
                gutterBottom
                sx={{ pb: 2, fontWeight: 700, color: "#fff" }}
                variant="h5"
                component="div"
              >
                Hire Our Alumni
              </Typography>
              <Typography variant="body2" color="#F5F5F5">
                Looking for top talent to drive your organization forward?
              </Typography>

              <Typography sx={{ mt: 1 }} variant="body2" color="#F5F5F5">
                Look no further! Our alumni are your secret weapon for success.{" "}
              </Typography>
              <Typography sx={{ mt: 2 }} variant="body2" color="#F5F5F5">
                With a proven track record of excellence, they are ready to
                kick-start your team's journey to greatness. Hire our alumni and
                watch your business thrive!"
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 3, py: 2 }}>
              <Link to="/partner/hire">
                <Button
                  variant="contained"
                  sx={{ borderRadius: 20 }}
                  size="small"
                >
                  Start Now
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          sx={{ py: { xs: 3, md: 0 }, mt: { md: 5, xs: 0 } }}
        >
          <Card
            variant="outlined"
            className="partner"
            sx={{ maxWidth: 345, zIndex: 1 }}
          >
            <CardHeader
              sx={{ p: 3 }}
              avatar={
                <Avatar
                  sx={{ bgcolor: "#000", width: 50, height: 50 }}
                  aria-label="recipe"
                  src={logo}
                >
                  C
                </Avatar>
              }
              title={
                <Typography
                  variant="body2"
                  color="#fff"
                  underline="none"
                  sx={{ fontWeight: "medium" }}
                >
                  Career Navigator Academy
                </Typography>
              }
              // subheader="September 14, 2016"
            />
            <CardContent sx={{ px: 4 }}>
              <Typography
                gutterBottom
                sx={{ pb: 2, fontWeight: 700, color: "#fff" }}
                variant="h6"
                component="div"
              >
                Host a Training program
              </Typography>
              <Typography variant="body2" color="#F5F5F5">
                Partner with us. Harness our expertise to deliver an impactful
                training program that your audience will love. We bring the
                knowledge, experience, and resources to make it a success.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 3, py: 2 }}>
              <Link to="/partner/host-an-event">
                <Button
                  variant="contained"
                  sx={{ borderRadius: 20 }}
                  size="small"
                >
                  Start Now
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
