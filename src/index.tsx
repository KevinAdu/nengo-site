import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/app.scss';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-P5NSNDCRQM');

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />)
