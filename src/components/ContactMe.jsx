import { Stack, Typography, Box, Container } from '@mui/material';
import React from 'react';
import Header from './Header';
import CustomButton from './CustomButton';

const linkedinProfile =
  'https://www.linkedin.com/in/marcus-pousette-a99590108/';
export default function ContactMe() {
  return (
    <Box id="contact">
      <Header id="5" text="Kontakta mig" isLight={false} />

      <Container maxWidth="sm">
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h3" color="text.primary" gutterBottom>
            Nå ut till mig på Linkedin!
          </Typography>
          <Typography variant="body1" color="text.primary">
            Vill du samarbeta eller veta mer om mina projekt? Kontakta mig gärna
            på LinkedIn – jag ser fram emot att höra från dig!
          </Typography>
          <CustomButton
            onClick={() => window.open(linkedinProfile, '_blank')}
            sx={{ marginTop: 6 }}
          >
            Till Linkedin
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  );
}
