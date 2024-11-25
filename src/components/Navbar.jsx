import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import logo from '../assets/logo-full-white.png';
import { useNavigate, Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'CV', 'Contact'];

export default function Navbar(props) {
  const nav = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img
        src={logo}
        alt="Techover"
        width={'150px'}
        style={{ margin: '8px 0px' }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background" elevation={2}>
        <Container>
          <Toolbar
            sx={{
              padding: '0px !important',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link to="/">
              <img src={logo} alt="Techover" width={'150px'} />
            </Link>

            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { sm: 'none', md: 'block', xs: 'none' } }}
            >
              <Button
                onClick={() => nav('/about')}
                variant="text"
                color="inherit"
              >
                About
              </Button>
              <Button
                onClick={() => nav('/projects')}
                variant="text"
                color="inherit"
              >
                Projects
              </Button>
              <Button onClick={() => {}} variant="outlined" color="inherit">
                CV
              </Button>
              <Button onClick={() => {}} variant="contained" color="primary">
                Contact
              </Button>
            </Stack>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
