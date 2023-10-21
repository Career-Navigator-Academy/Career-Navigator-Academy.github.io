import { Box, TextField } from "@mui/material";
import React from "react";

import { useLongAnswerInput } from "react-google-forms-hooks";

export default function LongAnswerInput({ id }) {
  const { register } = useLongAnswerInput(id);

  return (
    <Box sx={{ pb: 2 }}>
      <TextField
        {...register()}
        variant="outlined"
        //name="whyShouldAccept"
        multiline
        rows={4}
        fullWidth
        required
      />
    </Box>
  );
}
