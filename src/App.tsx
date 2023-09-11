import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export const routerConfig = [
  {path: '/', element: <Home />},
  {path: '/about', element: <About />}
];

const router = createBrowserRouter(routerConfig);

const App = () =>  {
  return (
    <div className="grid justify-center align-center h-screen bg-gradient-to-b from-purple-900 to-purple-500">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
