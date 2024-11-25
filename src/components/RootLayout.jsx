import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '../assets/square-bg.png';
import bg2 from '../assets/Swatch.png';
import zIndex from '@mui/material/styles/zIndex';

const bgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
  width: '100%',
  zIndex: '-1',
};
const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <img src={bg1} alt="" style={bgStyle} />
      <img src={bg2} alt="" style={bgStyle} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Box>
  );
};

export default RootLayout;
