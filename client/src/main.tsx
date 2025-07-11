import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/App.routes.tsx';
import LandingRoutes from "./routes/Landing.routes.tsx";

const router = createBrowserRouter([
  LandingRoutes,
  AppRoutes,
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
