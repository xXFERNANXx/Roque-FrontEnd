import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importa los componentes necesarios
import './index.css';
import App from './App';
import Navbar from './navbar';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <App />
      </div>
    </QueryClientProvider>
  </StrictMode>
);