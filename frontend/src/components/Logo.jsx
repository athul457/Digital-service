import React from 'react';

const Logo = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </linearGradient>
      </defs>
      
      {/* Abstract 'W' shape with leaves */}
      <path 
        d="M80 160 
           C 80 160, 120 420, 160 420 
           C 200 420, 220 280, 220 280
           C 220 280, 240 420, 280 420
           C 320 420, 400 240, 420 160" 
        stroke="url(#logoGradient)" 
        strokeWidth="60" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Leaf 1 (Left) */}
      <path 
        d="M100 140 Q 60 80 120 60 Q 160 80 100 140 Z" 
        fill="#22C55E" 
        className="animate-pulse"
        style={{ animationDuration: '3s' }}
      />
      
      {/* Leaf 2 (Right) */}
      <path 
        d="M400 140 Q 440 80 380 60 Q 340 80 400 140 Z" 
        fill="#3B82F6" 
        className="animate-pulse"
        style={{ animationDuration: '4s', animationDelay: '1s' }}
      />
      
      {/* Center Bloom dots */}
      <circle cx="250" cy="180" r="25" fill="#8B5CF6" className="animate-bounce" style={{ animationDuration: '2s' }} />
      <circle cx="200" cy="120" r="15" fill="#3B82F6" className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.2s' }} />
      <circle cx="300" cy="120" r="15" fill="#22C55E" className="animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.4s' }} />
    </svg>
  );
};

export default Logo;
