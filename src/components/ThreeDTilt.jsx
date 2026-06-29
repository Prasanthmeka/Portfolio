import React, { useState, useRef, useEffect } from 'react';

export default function ThreeDTilt({ children, className = '', maxTilt = 10 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    setCoords({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Calculate tilt rotations
  const rotateX = -coords.y * maxTilt; // Rotate around horizontal axis
  const rotateY = coords.x * maxTilt;  // Rotate around vertical axis

  // Calculate position of glare/spotlight (0% to 100%)
  const spotlightX = (coords.x + 0.5) * 100;
  const spotlightY = (coords.y + 0.5) * 100;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-200 ease-out preserve-3d ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(34, 211, 238, 0.15)'
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Glare spotlight overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: `radial-gradient(circle 120px at ${spotlightX}% ${spotlightY}%, rgba(34, 211, 238, 0.12), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
