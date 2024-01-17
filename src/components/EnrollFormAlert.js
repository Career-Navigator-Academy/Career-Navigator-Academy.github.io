import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function EnrollFormAlert() {
  return (
    <Box sx={{ px: { md: 0, xs: 2 }, py: { md: 10, xs: 5 } }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Thank you! your form has been submitted successfully 🎉
      </Typography>
      <Typography variant="p">
        You are making remarkable progress in your chosen career field, and you
        are on the path to becoming the best. Our dedicated mentors will
        carefully review your application and will reach out to you via email.
        Keep a close eye on your inbox for their response!
      </Typography>
      <br />
      <Link to="/">
        <Button variant="contained" sx={{ mt: 4 }}>
          Go back home
        </Button>
      </Link>
    </Box>
  );
}
