import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import FormPage from './pages/FormPage.js';
import SuccessPage from './pages/SuccessPage.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'form',
    element: <FormPage />,
  },
  {
    path: 'success',
    element: <SuccessPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
