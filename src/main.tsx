import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import DemoDay from './pages/DemoDay.tsx';
import { LanguageProvider } from './i18n/LanguageContext.tsx';
import './index.css';

const isDemoDay =
  window.location.pathname === '/demo-day' ||
  window.location.pathname === '/demo-day/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isDemoDay ? (
      <DemoDay />
    ) : (
      <LanguageProvider>
        <App />
      </LanguageProvider>
    )}
  </StrictMode>,
);
