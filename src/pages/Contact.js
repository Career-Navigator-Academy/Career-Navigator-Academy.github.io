import { Box, Grid, TextField } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box
      sx={{ px: { md: 25, xs: 3 }, py: { md: 15, xs: 5 } }}
      columnSpacing={8}
    >
      <Grid container>
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
          />
        </Grid>
      </Grid>
    </Box>
  );
}
