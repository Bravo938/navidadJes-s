import React, { useState } from 'react';
import Header from '../components/Header';
import MessageSection from '../components/MessageSection';
import BibleVerse from '../components/BibleVerse';
import Snowfall from '../components/Snowfall';
import { motion } from 'framer-motion';
import { Star, Cross, Heart, Gift } from 'lucide-react';
import Footer from '../components/Footer';

const ChristmasCard = () => {
  const [isStarActive, setIsStarActive] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-yellow-200/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Nieve animada */}
      <Snowfall />

      {/* Estrellas decorativas */}
      <div className="absolute top-10 right-10">
        <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute top-20 left-10">
        <Star className="w-6 h-6 text-yellow-200 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-20 right-1/4">
        <Star className="w-10 h-10 text-yellow-100 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Sección izquierda con mensaje principal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <MessageSection />
          </motion.div>
          
          {/* Sección derecha con versículo bíblico */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <BibleVerse />
          </motion.div>
        </div>

        {/* Elementos decorativos interactivos */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
            onClick={() => setIsStarActive(!isStarActive)}
          >
            <Star className={`w-12 h-12 mb-2 ${isStarActive ? 'text-yellow-300 fill-yellow-300' : 'text-gray-400'}`} />
            <span className="text-white text-sm">Estrella de Belén</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
          >
            <Cross className="w-12 h-12 mb-2 text-red-300" />
            <span className="text-white text-sm">Sacrificio de Amor</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
          >
            <Heart className="w-12 h-12 mb-2 text-red-400 fill-red-400" />
            <span className="text-white text-sm">Amor de Dios</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
          >
            <Gift className="w-12 h-12 mb-2 text-green-300" />
            <span className="text-white text-sm">Regalo de Salvación</span>
          </motion.div>
        </div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-red-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-3xl border border-white/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¡Feliz Navidad! Que el amor de Dios llene tu hogar
          </h3>
          <p className="text-lg text-white/90">
            Recordemos que el verdadero regalo de Navidad es Jesús, quien vino para darnos vida eterna
          </p>
        </motion.div>
      </div>

      {/* Efecto de estrella brillante al hacer clic */}
      {isStarActive && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow-200/20 rounded-full blur-2xl pointer-events-none"
        />
      )}
      <Footer />
    </div>
  );
};

export default ChristmasCard;