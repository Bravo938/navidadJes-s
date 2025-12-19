import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex justify-center items-center gap-4 mb-6"
      >
        <Star className="w-10 h-10 text-yellow-300 fill-yellow-300" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-red-300 to-white">
          ¡Feliz Navidad!
        </h1>
        <Star className="w-10 h-10 text-yellow-300 fill-yellow-300" />
      </motion.div>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
      >
        Celebrando el nacimiento de Jesús, el cumplimiento del plan perfecto de Dios
      </motion.p>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-6 rounded-full"
      />
    </header>
  );
};

export default Header;