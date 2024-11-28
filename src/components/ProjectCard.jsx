import { Box, Grid, Paper, Typography, Stack, IconButton } from "@mui/material";
import React from "react";

export default function ProjectCard({
  img,
  title,
  description,
  links,
  listOfTechStack,
}) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12} md={7}>
        <Box
          component="img"
          src={img}
          width={"100%"}
          sx={{ borderRadius: 1 }}
        />
      </Grid>
      <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
        <Typography variant="body1" color="primary">
          Senaste nytt
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {title}
        </Typography>
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            textAlign: "right",
            width: { xs: "unset", md: "110%" },
            transform: { xs: "unset", md: "translateX(-9%)" },
            boxSizing: { xs: "unset", md: "border-box" },
            marginBottom: 2,
          }}
        >
          <Typography>{description}</Typography>
        </Paper>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"end"}
          sx={{ marginBottom: 2 }}
        >
          {listOfTechStack.map((tech, i) => (
            <Typography id={i} variant="body1" color="text.secondary">
              {tech}
            </Typography>
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          {links.map(({ Icon, href }, i) => (
            <IconButton
              sx={{ color: "text.secondary" }}
              onClick={() => console.log(href)}
              id={i}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
