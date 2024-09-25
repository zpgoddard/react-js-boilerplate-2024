import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { useAuth } from '../../hooks/useAuth.tsx';

const Home = () => { 

  const { logOut } = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogOut = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div onClick={handleLogOut}>
      {'HOME'}
    </div>
  ); 
};

export default Home;