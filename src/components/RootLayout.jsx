import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '../assets/square-bg.png';
import bg2 from '../assets/Swatch.png';

const bgStyle = (top) => ({
  position: 'absolute',
  top,
  left: 0,
  objectFit: 'cover',
  width: '100%',
  height: { sm: '100%', xs: '100%', md: 'unset' },
  zIndex: '-1',
});
const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box component="img" src={bg1} alt="" sx={bgStyle(64)} />
      <Box component="img" src={bg2} alt="" sx={bgStyle(0)} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Box>
  );
};

export default RootLayout;
