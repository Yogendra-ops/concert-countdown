import React from 'react';
import backgroundImg from '../assets/background.png';

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src={backgroundImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};