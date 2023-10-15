import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

export default function Partner() {
  return (
    <Box sx={{ px: { md: 25, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}>
      <Grid container>
        <Grid item md={4} xs={12} sx={{ py: { xs: 3, md: 0 } }}>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                sx={{ py: 2 }}
                gutterBottom
                variant="h6"
                component="div"
              >
                Donate to Career Navigator Academy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join us in making a difference! Your donation to Career
                Navigator Academy will empower us to reach even more individuals
                on their journey to success. Together, we can create brighter
                futures and open doors of opportunity. Give today and help us
                help more people.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Donate</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} xs={12} sx={{ py: { xs: 3, md: 0 } }}>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ py: 2 }}
                variant="h6"
                component="div"
              >
                Become a Partner
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your partnership and sponsorship would mean the world to us.
                When you partner with us, you're not just a sponsor; you're a
                valued member of our community. Your brand will shine brightly
                as we proudly highlight you as our esteemed partners. Together,
                we can make a real impact on people's lives and the world of
                career development.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Parter</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4} xs={12} sx={{ py: { xs: 3, md: 0 } }}>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ py: 2 }}
                variant="h6"
                component="div"
              >
                Hire Our Alumni
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Looking for top talent to drive your organization forward? Look
                no further! Our alumni are your secret weapon for success.{" "}
                <br /> With a proven track record of excellence, they are ready
                to kick-start your team's journey to greatness. Hire our alumni
                and watch your business thrive!"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Hire</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
          sx={{ py: { xs: 3, md: 0 }, mt: { md: 5, xs: 0 } }}
        >
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ py: 2 }}
                variant="h6"
                component="div"
              >
                Sponsor a Student
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Change a life with your support. Join us in sponsoring a student
                and help unlock their potential. Your contribution can make
                dreams come true. Together, we can create a brighter future.
                Sponsor a student now!"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sponsor</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
          sx={{ py: { xs: 3, md: 0 }, mt: { md: 5, xs: 0 } }}
        >
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ py: 2 }}
                variant="h6"
                component="div"
              >
                Host a Training program
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Partner with us. Harness our expertise to deliver an impactful
                training program that your audience will love. We bring the
                knowledge, experience, and resources to make it a success.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Host</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
