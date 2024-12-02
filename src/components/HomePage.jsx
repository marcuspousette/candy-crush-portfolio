import React from 'react';
import Hero from './Hero';
import ReviewSection from './ReviewSection';
import Statistics from './Statistics';
import Projects from './Projects';
import { Box, Container } from '@mui/material';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

export default function HomePage() {
  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <AboutMe />
      <Container>
        <Projects />
      </Container>
      <ReviewSection />
      <Container>
        <ContactMe />
      </Container>
    </Box>
  );
}
