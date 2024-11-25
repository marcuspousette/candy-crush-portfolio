import React from 'react';
import swirlBall from '../assets/swirlBall-2x.png';
import ball from '../assets/Purple glass ball with swirls 2x.png';
import { Box, Stack, Button, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: { xs: 'auto', md: 'calc(80vh - 64px)' }, paddingTop: 8 }}
      spacing={{ xs: 4, md: 4 }}
    >
      <Stack sx={{ zIndex: '2', width: { sm: '100%', md: '50%' } }} spacing={2}>
        <Typography
          color="text.primary"
          variant="h2"
          component="h1"
          sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, fontWeight: '400' }}
        >
          Smarta lösningar som driver resultat.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            fontWeight: '400',
          }}
        >
          Jag hjälper företag att öka sin försäljning med smarta webblösningar
          utan att behöva investera i dyra system.
        </Typography>
        <Stack direction={'row'} spacing={2}>
          <Button variant="contained">Ta kontakt</Button>
          <Button variant="outlined" color="inherit">
            Se Projekt
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ width: { sm: '100%', md: '50%' }, position: 'relative' }}>
        <img
          src={swirlBall}
          alt="Ball"
          width={'100%'}
          style={{ zIndex: '-1' }}
        />
        <img
          src={ball}
          alt="Ball"
          width={'130%'}
          style={{
            position: 'absolute',
            left: '-31%',
            top: '-10%',
            zIndex: '1',
          }}
        />
      </Box>
      {/* <img
        src={swirlBall}
        alt="Marcus Pousette"
        width={'50%'}
        style={{
          position: 'absolute',
          left: '50%',
          top: '64px',
          minHeight: 'calc(100vh - 64px)',
          zIndex: -2,
        }}
      /> */}
    </Stack>
  );
}
