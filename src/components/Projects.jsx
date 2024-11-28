import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import spotifyClone from "../assets/Linkedin-spotify klon@2x.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const projects = [
  {
    img: spotifyClone,
    title: "Spotify Klon",
    listOfTechStack: ["React", "Node", "API"],
    description: `A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.`,
    links: [
      { Icon: GitHubIcon, href: "www.github.com" },
      { Icon: OpenInNewIcon, href: "www.youtube.com" },
    ],
  },
];

export default function Projects() {
  return (
    <Box sx={{ paddingBottom: 20 }}>
      <Header id="3" text="Några saker jag byggt" color="" />
      <Stack>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Stack>
    </Box>
  );
}
