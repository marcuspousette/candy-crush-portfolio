import React from 'react';
import Hero from './Hero';
import ReviewSection from './ReviewSection';
import Statistics from './Statistics';
import Projects from './Projects';
import { Box, Container } from '@mui/material';
import AboutMe from './AboutMe';

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
    </Box>
  );
}
