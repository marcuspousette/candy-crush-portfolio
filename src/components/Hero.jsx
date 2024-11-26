import React from 'react';
import swirlBall from '../assets/swirlBall-2x.png';
import ball from '../assets/Purple glass ball with swirls 2x.png';
import { Box, Stack, Button, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import CheckIcon from '@mui/icons-material/Check';

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
          <CustomButton>Ta kontakt</CustomButton>
          <Button variant="outlined" color="primary">
            Se Projekt
          </Button>
        </Stack>
        <Stack direction={{ xs: 'col', md: 'row' }} spacing={2}>
          <Stack direction={'row'} spacing={1}>
            <CheckIcon color="primary" />
            <Typography variant="body1" color="text.secondary">
              1 000+ timmar kodat
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={1}>
            <CheckIcon color="primary" />

            <Typography variant="body1" color="text.secondary">
              Certifierad webbutvecklare
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box sx={{ width: { sm: '100%', md: '50%' }, position: 'relative' }}>
        <Box
          component={'img'}
          src={swirlBall}
          alt="Ball"
          width={'100%'}
          sx={{
            zIndex: '-1',
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        />

        <Box
          component={'img'}
          src={ball}
          alt="Ball"
          width={'100%'}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
          }}
        />

        <Box
          component={'img'}
          src={ball}
          alt="Ball"
          width={'130%'}
          sx={{
            position: 'absolute',
            left: '-31%',
            top: '-10%',
            zIndex: '1',
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        />
      </Box>
    </Stack>
  );
}
