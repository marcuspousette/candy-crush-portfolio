import React from "react";
import Hidden from "@mui/material/Hidden";
import { Box, Stack, Typography, Avatar, Container } from "@mui/material";
import headshot from "../assets/mac-hero.png";
import leftImg from "../assets/10.png";
import rightImg from "../assets/07.png";

export default function ReviewSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "500px",
        display: "flex",
        alignItems: "start",
        paddingTop: "50px",
      }}
    >
      <Hidden mdDown>
        <img
          src={rightImg}
          alt=""
          style={{
            position: "absolute",
            right: "-67px",
            width: "500px",
            bottom: "20px",
          }}
        />
      </Hidden>
      <Hidden mdDown>
        <img
          src={leftImg}
          alt=""
          style={{
            position: "absolute",
            left: "-241px",
            width: "500px",
            top: "0px",
          }}
        />
      </Hidden>
      <Hidden lgUp>
        <img
          src={leftImg}
          alt=""
          style={{
            position: "absolute",
            left: "-150px",
            width: "300px",
            bottom: "0px",
          }}
        />
      </Hidden>

      <Container maxWidth="md">
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            color={"text.primary"}
            variant="subtitle2"
            sx={{
              textAlign: "center",
              fontSize: "1.25rem",
              marginBottom: "32px",
            }}
          >
            "Marcus's expertise in page speed optimization has greatly improved
            our website's performance. Our conversions have increased by 20%
            since working with him."
          </Typography>
          <Avatar
            alt="John Doe"
            src={headshot}
            sx={{ width: 56, height: 56, marginBottom: "16px" }}
          />
          <Typography variant="h5">John Doe</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Head of Cool stuff
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
