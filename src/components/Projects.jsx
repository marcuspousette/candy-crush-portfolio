import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard';
import spotifyClone from '../assets/Linkedin-spotify klon@2x.jpg';
import orderSumCard from '../assets/Linkedin-best-app - v2@2x.jpg';
import passGen from '../assets/Linkedin-pw-gen-v2.jpg';
import klarna from '../assets/Linkedin-klarna@2x.jpg';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const projects = [
  {
    img: spotifyClone,
    title: 'Spotify Klon',
    listOfTechStack: ['React', 'Node', 'API'],
    description: `A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.`,
    links: [
      { Icon: GitHubIcon, href: 'www.github.com' },
      { Icon: OpenInNewIcon, href: 'www.youtube.com' },
    ],
    rightAlign: true,
  },
  {
    img: orderSumCard,
    title: 'Beställningskortet',
    listOfTechStack: ['CSS', 'HTML', 'Responsivitet'],
    description: `Det här projektet är ett perfekt exempel på hur jag kan bidra i roller som Frontend Developer, UI/UX Developer, eller Web Developer i organisationer som värdesätter detaljerad och interaktiv design.`,
    links: [
      { Icon: GitHubIcon, href: 'www.github.com' },
      { Icon: OpenInNewIcon, href: 'www.youtube.com' },
    ],
    rightAlign: false,
  },
  {
    img: passGen,
    title: 'Password generator',
    listOfTechStack: ['Javascript', 'CSS', 'HTML', 'Responsivitet'],
    description: `Denna lösenordsgeneratorapp är en bra illustration av hur jag kan bidra till roller som Frontend Developer, UI/UX Developer eller Software Developer där säkerhet och användarvänlighet är prioriterat.`,
    links: [
      { Icon: GitHubIcon, href: 'www.github.com' },
      { Icon: OpenInNewIcon, href: 'www.youtube.com' },
    ],
    rightAlign: true,
  },
  {
    img: klarna,
    title: 'Beställningskortet',
    listOfTechStack: ['API', 'Node', 'API', 'Express'],
    description: `Jag har byggt en webbtjänst som integrerar Klarna Checkout API, utvecklad med Node.js och Express. Projektet inkluderar autentiska API-anrop för att skapa en fungerande checkout-lösning och simulera en verklig köpprocess med produkter hämtade från FakeStore API.`,
    links: [
      { Icon: GitHubIcon, href: 'www.github.com' },
      { Icon: OpenInNewIcon, href: 'www.youtube.com' },
    ],
    rightAlign: false,
  },
];

export default function Projects() {
  return (
    <Box sx={{ paddingBottom: 20 }} id="projects">
      <Header id="3" text="Några saker jag byggt" color="" />
      <Stack direction={'column'} spacing={14}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Stack>
    </Box>
  );
}
