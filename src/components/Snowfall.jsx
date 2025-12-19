import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Snowflake = ({ id }) => {
  const size = Math.random() * 5 + 3;
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;

  return (
    <motion.div
      className="absolute rounded-full bg-white/70"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: '-10px',
        boxShadow: '0 0 5px white'
      }}
      animate={{
        y: ['0vh', '100vh'],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, 360]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Crear 50 copos de nieve
    const flakes = Array.from({ length: 50 }, (_, i) => i);
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map(id => (
        <Snowflake key={id} id={id} />
      ))}
      
      {/* Efectos de luz adicionales */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Snowfall;