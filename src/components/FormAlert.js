import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function FormAlert() {
  return (
    <Box sx={{ px: { md: 25, xs: 2 }, py: { md: 10, xs: 5 } }}>
      <Typography variant="h4">
        Thank you! your form has been submitted successfully 🎉
      </Typography>

      <Link to="/">
        <Button variant="contained" sx={{ mt: 4 }}>
          Go back home
        </Button>
      </Link>
    </Box>
  );
}
