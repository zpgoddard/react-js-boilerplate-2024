import React from 'react';

import Home from '../../containers/home';

import ProtectedRoute from './ProtectedRoute.tsx';

const HomeRoute = () => (
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
);

export default { HomeRoute };