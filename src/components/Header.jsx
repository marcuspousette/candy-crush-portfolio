import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Header({ id, text }) {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"center"}
      sx={{ marginBottom: 4 }}
    >
      <Typography color="primary" variant="h5">
        0{id}.
      </Typography>
      <Typography color="text.primary" variant="h5">
        {text}
      </Typography>
    </Stack>
  );
}
