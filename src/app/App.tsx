import { Route, Routes } from 'react-router-dom';
import { AppBackground } from './styled';
import { AuthProvider } from '../hooks/useAuth.tsx';
import LogIn from '../containers/login';
import PageNotFound from '../containers/pageNotFound';
import React from 'react';
import RouteElements from './routeComponents/RouteElements.tsx'; 
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../styles/themes';


/* - The App -
 * Takes all componnents/screens listed above, and gives them a path/route accessed via history.push.
 * Only one will render at a time.
 * If no path is correctly linked to, page not found is shown instead.
 * Protected routes will re-route back to log in screen.
 */
const App = () => (
  <ThemeProvider theme={getTheme('dark')}>
    <AppBackground>
      <AuthProvider>
        <Routes>

          {/* UNPROTECTED PATHS */}
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/login" element={<LogIn />} />
      
          { /* PROTECTED PATHS */}
          <Route path="/" element={<RouteElements.HomeRoute />}/>
          
        </Routes>
      </AuthProvider>
    </ AppBackground>
  </ ThemeProvider>
);

export default App;