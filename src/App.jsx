import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './config/router/routes';
// import AuthProvider from './screens/AuthProvider';
// import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
