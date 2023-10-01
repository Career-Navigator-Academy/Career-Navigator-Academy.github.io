import React from "react";
import logo from "../resources/logonew.png";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Button, Grid, TextField } from "@mui/material";

const BottomNav = () => {
  return (
    <Box
      className="footer"
      sx={{ mt: { md: 15, xs: 7 }, mb: 5, mx: { md: 15, xs: 1 } }}
      justifyContent="center"
      textAlign={{ md: "initial", xs: "center" }}
    >
      <Divider sx={{ mx: { md: 7, xs: 2 } }} orientation="horizontal" />

      <Box>
        <Grid container sx={{ py: 4, px: { md: 7, xs: 2 } }}>
          <Grid item xs={12} md={3} sx={{ mb: { md: 0, xs: 3 } }}>
            <Box component="img" src={logo} sx={{ width: "70px" }} />
            <Typography
              justifyContent={{ md: "initial", xs: "center" }}
              sx={{ pr: { md: 15, xs: 0 } }}
              variant="body2"
            >
              Your career journey starts here.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mb: { md: 0, xs: 3 } }}>
            <Typography sx={{ color: "#303030" }} variant="p">
              Quick Links
            </Typography>{" "}
            <br />
            <Typography
              sx={{ textDecoration: "none", color: "#383838" }}
              component="a"
              href="/programs"
              variant="body2"
            >
              Programs
            </Typography>{" "}
            <br />
            <Typography
              sx={{ textDecoration: "none", color: "#383838" }}
              component="a"
              href="/resources"
              variant="body2"
            >
              Resources
            </Typography>{" "}
            <br />
            <Typography
              sx={{ textDecoration: "none", color: "#383838" }}
              component="a"
              href="/contact"
              variant="body2"
            >
              Contact
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} sx={{ mb: { md: 0, xs: 3 } }}>
            <Typography sx={{ color: "#303030" }} variant="p">
              Follow Us
            </Typography>{" "}
            <br />
            <FontAwesomeIcon
              style={{ fontSize: "20px", margin: "5px" }}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: "20px", margin: "5px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "20px", margin: "5px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "20px", margin: "5px" }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              helperText="Subscribe to our newsletter"
              label="Enter your email"
              variant="outlined"
              name="subscribe"
              required
              fullWidth
            />
            <Button sx={{ m: 1 }} variant="contained">
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ mx: { md: 7, xs: 2 } }} orientation="horizontal" />
        <Box
          textAlign="center"
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography
            sx={{ textDecoration: "none", color: "#383838" }}
            component="a"
            href="/"
            variant="p"
          >
            2023 Career Navigator Academy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomNav;
