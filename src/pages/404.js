import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function PageNotFound() {
  return (
    <Box sx={{ py: { md: 10, xs: 2 } }} className="pnf">
      <Grid
        justifyContent="center"
        alignContent="center"
        display="flex"
        container
        sx={{ px: { md: 5, xs: 0 } }}
        columnSpacing={{ md: 7, xs: 0 }}
      >
        <Grid item md={4} xs={12}>
          <Box
            component="img"
            src="https://img.freepik.com/free-photo/close-up-profile-view-pensive-upset-african-american-man-look-distance-thinking-personal-problems-thoughtful-sad-biracial-male-feel-depressed-lost-thoughts-pondering-having-dilemma_657921-170.jpg?size=626&ext=jpg"
            sx={{
              width: { md: "100%", xs: "100%" },
              borderRadius: "35px",
              ml: { md: 12, xs: 0 },
              mt: { md: 3, xs: 3 },
            }}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <Box
            sx={{
              px: { md: 10, xs: 2 },
              pt: { md: 3, xs: 4 },
            }}
          >
            <Box>
              <Typography
                variant="h1"
                display={{ md: "block", xs: "none" }}
                className="div"
              >
                Opps! Somehow you got lost
              </Typography>
              {/*  */}
              <Typography
                variant="h2"
                display={{ md: "none", xs: "block" }}
                className="div"
              >
                Opps! Somehow you got lost
              </Typography>
            </Box>
          </Box>
          <Box sx={{ ml: { md: 10, xs: 2 }, mt: { md: 5, xs: 2 } }}>
            <Button
              component="a"
              href="/"
              sx={{
                textTransform: "none",
                p: 1,
              }}
              variant="contained"
              className="contained"
            >
              Go back home <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
