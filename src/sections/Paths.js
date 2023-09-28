import React from "react";
import { Box, Typography, Grid, Button, Card } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Paths() {
  return (
    <Box
      className="path"
      sx={{
        color: "#303030",
        bgcolor: "#C6E5F9",
        py: { md: 10, xs: 5 },
        px: { md: 15, xs: 2 },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 500, textAlign: "center" }}>
        <span style={{ color: "#0A77C1" }}>Career</span> Paths
      </Typography>
      <Grid container columnSpacing={2} justifyContent="center" paddingTop={7}>
        <Grid item md={4} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <Card className="card" sx={{ p: 5, color: "f4f4f4" }}>
            <Typography sx={{ pb: 2 }}>Software Engineering</Typography>
            <Typography>
              Software engineering is the systematic process of designing,
              developing, testing, and maintaining software applications and
              systems.
            </Typography>
            <Button className="containedblack">
              Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
            </Button>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <Card className="card" sx={{ p: 5 }}>
            <Typography sx={{ pb: 2 }}>Front-End Development</Typography>
            <Typography>
              Front-end development, often referred to as "client-side
              development," is the practice of creating the user interface and
              user experience of a website or web application.
            </Typography>
            <Button className="containedblack">
              Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
            </Button>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <Card className="card" sx={{ p: 5 }}>
            <Typography sx={{ pb: 2 }}>Back-End Development</Typography>
            <Typography>
              Back-end development is the part of software engineering that
              deals with the server-side of applications, handling data, logic,
              and infrastructure to make the front-end user interface work
              seamlessly.
            </Typography>
            <Button className="containedblack">
              Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
            </Button>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <Card className="card" sx={{ p: 5 }}>
            <Typography sx={{ pb: 2 }}>Technical Writing</Typography>
            <Typography>
              Technical writing is a style of writing that simplifies complex
              technical information for easy understanding by non-experts, often
              used in manuals, reports, and guides across different industries.
            </Typography>
            <Button className="containedblack">
              Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
            </Button>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <Card className="card" sx={{ p: 5 }}>
            <Typography sx={{ pb: 2 }}>UI/UX </Typography>
            <Typography>
              UI (User Interface) is the visual design of a digital product,
              while UX (User Experience) focuses on optimizing the overall user
              interaction and satisfaction with the product.
            </Typography>
            <Button className="containedblack">
              Enroll <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
