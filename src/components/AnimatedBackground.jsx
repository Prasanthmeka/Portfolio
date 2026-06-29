import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let time = 0;
    
    // Mouse state: track position and active status
    const mouse = { x: null, y: null, targetX: null, targetY: null };

    // Grid properties
    let cols = 28;
    let rows = 28;
    let spacingX = 55;
    let spacingZ = 55;
    
    // Camera properties
    const focalLength = 550;
    const cameraZ = 850;
    
    // Rotation angles (current and target for smooth lerp interpolation)
    let currentAngleX = 0.65; // Pitch (looking down)
    let currentAngleY = 0.0;  // Yaw (spin)
    
    let targetAngleX = 0.65;
    let targetAngleY = 0.0;

    // Determine grid density and spacing based on screen size
    const configureGrid = () => {
      const width = window.innerWidth;
      canvas.width = width;
      canvas.height = window.innerHeight;

      if (width < 768) {
        cols = 15;
        rows = 15;
        spacingX = 75;
        spacingZ = 75;
      } else if (width < 1200) {
        cols = 22;
        rows = 22;
        spacingX = 65;
        spacingZ = 65;
      } else {
        cols = 28;
        rows = 28;
        spacingX = 55;
        spacingZ = 55;
      }
    };

    // Main animation and render loop
    const animate = () => {
      time += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.58; // Position center lower for a panoramic horizon feel

      // 1. Smoothly update camera angles with mouse coordinates (lerping)
      if (mouse.targetX !== null && mouse.targetY !== null) {
        const normX = (mouse.targetX - centerX) / centerX;
        const normY = (mouse.targetY - centerY) / centerY;
        
        // Base angles + interactive offsets
        targetAngleY = time * 0.03 + normX * 0.22;
        targetAngleX = 0.62 + normY * 0.16;
      } else {
        // Fallback auto-orbit rotation when mouse is inactive or off-screen
        targetAngleY = time * 0.03;
        targetAngleX = 0.62 + Math.sin(time * 0.2) * 0.04;
      }

      currentAngleX += (targetAngleX - currentAngleX) * 0.08;
      currentAngleY += (targetAngleY - currentAngleY) * 0.08;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      // 2. Pre-calculate all points in 3D and project to 2D
      const points = [];
      
      for (let i = 0; i < cols; i++) {
        points[i] = [];
        for (let j = 0; j < rows; j++) {
          // Centered grid coordinate positions
          const x3d = (i - cols / 2) * spacingX;
          const z3d = (j - rows / 2) * spacingZ;

          // Compute a multi-octave 3D sine wave height pattern
          let y3d = Math.sin(x3d * 0.005 + time * 1.5) * Math.cos(z3d * 0.005 + time * 1.5) * 45;
          y3d += Math.sin(Math.sqrt(x3d * x3d + z3d * z3d) * 0.003 - time * 2.2) * 20;

          // First-pass projection approximation (without ripple) to evaluate mouse proximity
          const rxTemp = x3d * cosY - z3d * sinY;
          const rzTemp = x3d * sinY + z3d * cosY;
          const ryTemp = y3d * cosX - rzTemp * sinX;
          const rzFinalTemp = y3d * sinX + rzTemp * cosX + cameraZ;

          const pxTemp = centerX + (rxTemp * focalLength) / rzFinalTemp;
          const pyTemp = centerY + (ryTemp * focalLength) / rzFinalTemp;

          // Compute 2D screen distance to apply a physical ripple displacement under the mouse
          let mouseDeformation = 0;
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - pxTemp;
            const dy = mouse.y - pyTemp;
            const screenDist = Math.hypot(dx, dy);

            // Deform wave height with a ripple that propagates outward
            if (screenDist < 260) {
              const weight = Math.pow((260 - screenDist) / 260, 2);
              mouseDeformation = Math.sin(screenDist * 0.035 - time * 6.5) * 40 * weight;
            }
          }

          // Apply deformation to obtain final height
          const finalY3d = y3d + mouseDeformation;

          // Perform final 3D rotations (Yaw then Pitch) and project to 2D
          const rx = x3d * cosY - z3d * sinY;
          const rz = x3d * sinY + z3d * cosY;
          const ry = finalY3d * cosX - rz * sinX;
          const rzFinal = finalY3d * sinX + rz * cosX + cameraZ;

          // Projected 2D viewport coordinates
          const px = centerX + (rx * focalLength) / rzFinal;
          const py = centerY + (ry * focalLength) / rzFinal;

          points[i][j] = {
            x: px,
            y: py,
            z: rzFinal,
            height: finalY3d
          };
        }
      }

      // 3. Render Grid Wireframe Lines
      // Depth fog constraints: z starts around 400 and goes to 1400
      const zMin = cameraZ - 450;
      const zMax = cameraZ + 550;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const pt = points[i][j];
          
          // Calculate opacity factor using depth fog
          const depthFog = Math.min(1, Math.max(0, 1 - (pt.z - zMin) / (zMax - zMin)));
          if (depthFog <= 0.01) continue;

          // Determine line gradient color based on point's current wave height (-65 to 65)
          const normHeight = Math.min(1, Math.max(0, (pt.height + 65) / 130));
          // Cyan RGB (34, 211, 238) to Fuchsia RGB (217, 70, 239)
          const r = Math.round(34 + (217 - 34) * normHeight);
          const g = Math.round(211 + (70 - 211) * normHeight);
          const b = Math.round(238 + (239 - 238) * normHeight);
          
          // Connect to right neighbor (i + 1)
          if (i < cols - 1) {
            const nextPt = points[i + 1][j];
            const nextFog = Math.min(1, Math.max(0, 1 - (nextPt.z - zMin) / (zMax - zMin)));
            const avgFog = (depthFog + nextFog) / 2;

            if (avgFog > 0.01) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              ctx.lineTo(nextPt.x, nextPt.y);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${avgFog * 0.15})`;
              ctx.lineWidth = avgFog * 1.1;
              ctx.stroke();
            }
          }

          // Connect to bottom neighbor (j + 1)
          if (j < rows - 1) {
            const nextPt = points[i][j + 1];
            const nextFog = Math.min(1, Math.max(0, 1 - (nextPt.z - zMin) / (zMax - zMin)));
            const avgFog = (depthFog + nextFog) / 2;

            if (avgFog > 0.01) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              ctx.lineTo(nextPt.x, nextPt.y);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${avgFog * 0.15})`;
              ctx.lineWidth = avgFog * 1.1;
              ctx.stroke();
            }
          }

          // 4. Draw Glow Vertices (nodes)
          ctx.beginPath();
          // Scale dot size slightly with perspective depth
          const nodeRadius = (depthFog * 1.8) + 0.4;
          ctx.arc(pt.x, pt.y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${depthFog * 0.38})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event handlers for mouse and touch inputs
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.targetX = null;
      mouse.targetY = null;
    };

    window.addEventListener('resize', configureGrid);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);

    configureGrid();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', configureGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#020208]"
    />
  );
}

