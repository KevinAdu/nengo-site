import React from 'react';
import { t } from 'ttag';

const Hero = () => (
  <div className="hero">
    <h1 className="text-white text-8xl text-center font-semibold mb-6">{t`Nengo`}</h1>
    <h2 className="text-white text-center text-xl font-bold mb-16">Converts Gregorian years into traditional Japanese years</h2>
  </div>
);

export default Hero;
