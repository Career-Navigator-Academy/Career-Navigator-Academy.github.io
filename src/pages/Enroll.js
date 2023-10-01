import React, { useState } from "react";
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

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    career: "",
    hearAboutUs: "",
    whyShouldAccept: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <Box sx={{ px: { md: 25, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}>
      <Typography variant="h4">Application Form</Typography>
      <Box onSubmit={handleSubmit} component="form">
        <Grid container columnSpacing={4}>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={4} xs={12} sx={{ p: 2 }}>
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={4} xs={12} sx={{ p: 2 }}>
            <TextField
              label="Age"
              variant="outlined"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item md={4} xs={12} sx={{ p: 2 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Career Path</InputLabel>
              <Select
                required
                name="career"
                value={formData.career}
                label="Career Path"
                onChange={handleChange}
              >
                <MenuItem value="frontend">Front-End Development</MenuItem>
                <MenuItem value="backend">Back-End Development</MenuItem>
                <MenuItem value="technical writing">Technical Writing</MenuItem>
                <MenuItem value="UI/UX">UI/UX</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12} sx={{ p: 2 }}>
            <TextField
              label="How did you hear about us?"
              variant="outlined"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item md={12} xs={12} sx={{ p: 2 }}>
            <TextField
              label="Why should we accept you into the program?"
              variant="outlined"
              name="whyShouldAccept"
              value={formData.whyShouldAccept}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
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
