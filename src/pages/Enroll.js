import React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const Enroll = () => {
  return (
    <Box sx={{ px: { md: 25, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}>
      <Typography variant="h4">Application Form</Typography>
      <Box
        component="form"
        action="https://formspree.io/f/xqkvwrpk"
        method="POST"
      >
        <Grid container columnSpacing={4}>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
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
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                fullWidth
                required
              />
            </motion.div>
          </Grid>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
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
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                fullWidth
                required
              />
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12} sx={{ p: 2 }}>
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
              <TextField
                label="Phone Number"
                variant="outlined"
                name="phone"
                fullWidth
                required
              />
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12} sx={{ p: 2 }}>
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
              <TextField
                label="Age"
                variant="outlined"
                type="number"
                name="age"
                fullWidth
                required
              />
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12} sx={{ p: 2 }}>
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
              <FormControl fullWidth variant="outlined">
                <InputLabel>Gender</InputLabel>
                <Select label="Gender" name="gender" required>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
          </Grid>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
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
              <FormControl fullWidth variant="outlined">
                <InputLabel>Career Path</InputLabel>
                <Select required name="career" label="Career Path">
                  <MenuItem value="frontend">Front-End Development</MenuItem>
                  <MenuItem value="backend">Back-End Development</MenuItem>
                  <MenuItem value="technical writing">
                    Technical Writing
                  </MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
          </Grid>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
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
              <TextField
                label="How did you hear about us?"
                variant="outlined"
                name="hearAboutUs"
                fullWidth
                required
              />
            </motion.div>
          </Grid>

          <Grid item md={12} xs={12} sx={{ p: 2 }}>
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
              <TextField
                label="Why should we accept you into the program?"
                variant="outlined"
                name="whyShouldAccept"
                multiline
                rows={4}
                fullWidth
                required
              />
            </motion.div>
          </Grid>
          <Button
            sx={{ ml: 4 }}
            type="submit"
            variant="contained"
            color="primary"
            className="contained"
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Enroll;
