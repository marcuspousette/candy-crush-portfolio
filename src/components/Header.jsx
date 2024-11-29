import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function Header({ id, text, isLight }) {
  const getHeaderColor = () => {
    return isLight ? 'text.dark' : 'text.primary';
  };

  return (
    <Stack
      direction={'row'}
      spacing={2}
      alignItems={'center'}
      sx={{ marginBottom: 8 }}
    >
      <Typography color="primary" variant="h5">
        0{id}.
      </Typography>
      <Typography color={getHeaderColor()} variant="h5">
        {text}
      </Typography>
    </Stack>
  );
}
