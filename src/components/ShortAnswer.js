import { Box, Grid, TextField } from "@mui/material";
import React from "react";

import { useShortAnswerInput } from "react-google-forms-hooks";

export default function ShortAnswerInput({ id }) {
  const { register } = useShortAnswerInput(id);

  return (
    <Box sx={{ pb: 2 }}>
      <TextField
        {...register()}
        //label
        variant="outlined"
        // name="name"
        fullWidth
      />
    </Box>
  );
}
