import React from "react";
import Hero from "./Hero";
import ReviewSection from "./ReviewSection";
import Statistics from "./Statistics";
import Projects from "./Projects";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Projects />
      {/* <ReviewSection />
      <Statistics /> */}
    </Box>
  );
}
