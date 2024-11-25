import { Button, Box } from '@mui/material';
import React from 'react';

export default function NotFound() {
  return (
    <Box>
      <h1>404 error</h1>
      <p>Den här sidan finns inte...</p>
      <Button>Gå tillbaka</Button>
    </Box>
  );
}
