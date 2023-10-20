import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <Typography
          variant="h6"
          sx={{ py: 2, textAlign: "center", color: "#404040" }}
          justifyContent="center"
          display="flex"
        >
          Join the community of other amazing like minded people
        </Typography>
        <Box justifyContent="center" display="flex">
          <Link to="/apply">
            <Button variant="contained" className="contained">
              Join Us Now
            </Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}
