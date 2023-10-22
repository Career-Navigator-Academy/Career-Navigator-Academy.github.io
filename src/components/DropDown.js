import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import { useDropdownInput } from "react-google-forms-hooks";

export default function DropdownInput({ id }) {
  const { register, options } = useDropdownInput(id);

  return (
    <FormControl fullWidth variant="outlined" sx={{ pb: 2 }}>
      <Select {...register()}>
        {options.map((o) => {
          return (
            <MenuItem key={o.label} value={o.label} id="dropdown">
              {o.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
