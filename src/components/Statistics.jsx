import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

export default function Statistics() {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Typography
            color="text.primary"
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "700",
            }}
          >
            Transforming Websites with Lightning-Fast Speeds
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="body1" color="text.primary">
            Marcus Pousette is a leading web developer specializing in
            optimizing page speeds, reducing bounce rates, and increasing
            conversions. With a proven track record of success, Marcus helps
            companies achieve exceptional website performance and drive business
            growth.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
