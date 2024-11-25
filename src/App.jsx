import Navbar from './components/Navbar';
import ButtonGroup from './components/ButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './utils/theme';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import NotFound from './components/NotFound';
import './App.css';

const myTheme = createTheme(themeOptions);

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
    <Route index element={<HomePage />} errorElement={<NotFound />} />
    <Route path="about" element={<AboutPage />} errorElement={<NotFound />} />
    <Route
      path="projects"
      element={<ProjectPage />}
      errorElement={<NotFound />}
    />
  </Route>
);
const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
