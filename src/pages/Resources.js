import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Resources() {
  return (
    <Box sx={{ px: { md: 25, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,

            mb: 5,
          }}
        >
          Resources
        </Typography>
      </Box>
      <Grid container columnSpacing={8}>
        <Grid item md={6} sx={{ p: 2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box
              component="img"
              alt="a laptop and cofee mug"
              src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              sx={{ width: "100%" }}
            />
            <Typography variant="body2">September 29th 2023</Typography>
            <Link to="/navigating-the-software-development-galaxy">
              <Typography variant="h6">
                Navigating the Software Development Galaxy
              </Typography>
            </Link>
          </motion.div>
        </Grid>
        {/*  */}
      </Grid>
    </Box>
  );
}
