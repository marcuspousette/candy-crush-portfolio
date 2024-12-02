import React from 'react';
import { Box, Grid, Typography, Stack, Container, Paper } from '@mui/material';
import Header from './Header';
import macHero from '../assets/mac-hero-square.png';
import CustomButton from './CustomButton';

export default function AboutMe() {
  return (
    <Paper
      sx={{
        marginTop: 10,
        marginBottom: 10,
        padding: '80px 0px 140px 0px',
        backgroundColor: 'background.light',
      }}
      elevation={12}
      square
    >
      <Container>
        <Header id="2" text="Om mig" isLight={true} />
        <Grid
          container
          alignItems={'center'}
          justifyContent={'space-between'}
          spacing={4}
        >
          <Grid item sx={12} md={6} lg={4}>
            <Box component={'img'} src={macHero} width="100%" />
          </Grid>
          <Grid item sx={12} md={6} lg={6}>
            <Stack direction={'column'} spacing={4}>
              <Typography
                variant="h3"
                color={'text.dark'}
                sx={{ fontWeight: '600' }}
              >
                Marcus Pousette
              </Typography>
              <Typography variant="body1" color={'text.dark'}>
                Jag hjälper företag att öka sin försäljning med smarta
                webblösningar utan att behöva investera i dyra system.
              </Typography>
              <Stack direction={'row'} spacing={6}>
                <Box>
                  <Typography variant="h4" color={'text.dark'} gutterBottom>
                    1 000 +
                  </Typography>
                  <Typography variant="body1" color={'text.dark'}>
                    Timmar kodat
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" color={'text.dark'} gutterBottom>
                    20 +
                  </Typography>
                  <Typography variant="body1" color={'text.dark'}>
                    Projekt byggda
                  </Typography>
                </Box>
              </Stack>
              <CustomButton>Ta kontakt</CustomButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
