import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box
      sx={{ px: { md: 25, xs: 3 }, py: { md: 15, xs: 5 } }}
      columnSpacing={8}
    >
      <Typography sx={{ p: 2 }}>
        Do you have any suggestions, complaints, or requests? We value your
        feedback, so please take a moment to complete the form below, and we
        will promptly respond to your message.
      </Typography>
      <Grid
        container
        component="form"
        action="https://formspree.io/f/xvojdegl"
        method="POST"
      >
        <Grid item md={6} xs={12} sx={{ p: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        <Grid item md={6} xs={12} sx={{ p: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            // value={formData.name}
            // onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        <Grid item md={12} xs={12} sx={{ p: 2 }}>
          <TextField
            label="Message"
            variant="outlined"
            name="message"
            // value={formData.name}
            // onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
          />
        </Grid>
        <Button type="submit" sx={{ ml: 2 }} variant="contained">
          Submit
        </Button>
      </Grid>
    </Box>
  );
}
