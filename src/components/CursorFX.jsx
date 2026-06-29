import React, { useEffect, useState, useRef } from 'react';

export default function CursorFX() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const particlesRef = useRef([]);

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trail animation
  useEffect(() => {
    let animId;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15, // Damping factor
          y: prev.y + dy * 0.15,
        };
      });
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  // Handle click events and trigger canvas sparks
  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsClicked(true);
      createSparks(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Handle interactive element hovers (links, buttons, interactive cards)
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.glass-card') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Click Particle Class
  class Spark {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.radius = Math.random() * 3 + 1.5;
      this.color = Math.random() > 0.5 ? '#22d3ee' : '#d946ef';
      this.alpha = 1;
      this.decay = Math.random() * 0.03 + 0.015;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.05; // Gentle gravity
      this.alpha -= this.decay;
    }
  }

  const createSparks = (x, y) => {
    const count = 18;
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(new Spark(x, y));
    }
  };

  // Spark animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }
      requestRef.current = requestAnimationFrame(loop);
    };

    requestRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Don't render custom cursor on touch/mobile devices
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice || !isVisible) {
    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-50"
      />
    );
  }

  return (
    <>
      {/* Click Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-50"
      />

      {/* Lagging Cursor Ring */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 mix-blend-screen"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? '48px' : '24px',
          height: isHovered ? '48px' : '24px',
          border: isHovered ? '1.5px solid #d946ef' : '1.5px solid #22d3ee',
          backgroundColor: isClicked ? 'rgba(34, 211, 238, 0.2)' : 'transparent',
          boxShadow: isHovered 
            ? '0 0 15px rgba(217, 70, 239, 0.4)' 
            : '0 0 10px rgba(34, 211, 238, 0.2)',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.1s ease, box-shadow 0.3s ease',
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#ffffff]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
