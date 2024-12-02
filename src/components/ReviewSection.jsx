import React from 'react';
import {
  Stack,
  Typography,
  Avatar,
  Container,
  Paper,
  Box,
} from '@mui/material';
import headshot from '../assets/mac-hero.png';
import Header from './Header';
import Review from './Review';

const reviews = [
  {
    author: 'John Doe',
    reviewText: `Marcus's expertise in page speed optimization has greatly improved our website's performance. Our conversions have increased by 20% since working with him.`,
    img: headshot,
    title: 'Head of Cool Stuff',
  },
];

export default function ReviewSection() {
  return (
    <>
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
          <Header id="4" text="Vad andra säger om mig" isLight={true} />
          <Container maxWidth={'md'}>
            {reviews.map((review) => (
              <Review {...review} />
            ))}
          </Container>
        </Container>
      </Paper>
    </>
  );
}
