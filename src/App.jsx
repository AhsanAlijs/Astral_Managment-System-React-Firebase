import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './config/router/routes';
// import AuthProvider from './screens/AuthProvider';
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
