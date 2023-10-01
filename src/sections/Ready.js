import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Ready() {
  return (
    <Box
      sx={{
        py: { md: 7, xs: 7 },
        px: { md: 0, xs: 1 },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            mb: 5,
          }}
        >
          Ready To Join Us?
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{ py: 2, textAlign: "center" }}
        justifyContent="center"
        display="flex"
      >
        Join the community of other amazing like minded people
      </Typography>
      <Box justifyContent="center" display="flex">
        <Button
          component="a"
          href="/apply"
          variant="contained"
          className="contained"
        >
          Join Us Now
        </Button>
      </Box>
    </Box>
  );
}
