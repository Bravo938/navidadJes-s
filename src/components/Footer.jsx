import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Heart, Code, Church, Sparkles } from 'lucide-react';

// Importar el logo - Asegúrate de que la ruta sea correcta
import rdvLogo from '/src/assets/rdvLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mt-16 pt-12 pb-8 bg-gradient-to-t from-blue-950/80 to-transparent border-t border-white/10"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo principal con efectos */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="relative">
            {/* Efecto de brillo alrededor del logo */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 215, 0, 0.3)",
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 10px rgba(255, 215, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full blur-lg"
            />
            
            {/* Contenedor del logo con efecto de vidrio */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-center gap-4">
                {/* Logo con efecto de flotación */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <img 
                    src={rdvLogo} 
                    alt="Logo Ríos de Vida" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
                  />
                  {/* Efecto de partículas brillantes */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1 -right-1"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1 -left-1"
                  >
                    <Sparkles className="w-3 h-3 text-blue-300" />
                  </motion.div>
                </motion.div>
                
                {/* Texto al lado del logo */}
                <div className="text-center">
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-300 to-blue-300"
                  >
                    Ríos de Vida
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 text-sm md:text-base mt-1"
                  >
                    Centro Cristiano - Monteros, Tucumán
                  </motion.p>
                </div>
              </div>
            </motion.div>
            
            {/* Efecto de agua/gotas alrededor */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-md -z-10"
            />
          </div>
          
          {/* Mensaje navideño debajo del logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-center"
          >
            <p className="text-lg text-white">
              <span className="font-bold text-yellow-300">¡Feliz Navidad!</span>
              <span className="text-white/90"> - Que el amor de Cristo llene tu hogar</span>
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Mensaje de la iglesia */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Church className="w-8 h-8 text-yellow-300" />
              <h3 className="text-xl font-bold text-white">Nuestro Mensaje</h3>
            </div>
            <p className="text-white/90 mb-4">
              <span className="font-bold text-yellow-200">Ríos de viva </span>  
               en esta Navidad recordamos que Jesús es la fuente de agua viva que nunca se agota.
            </p>
            <p className="text-white/80 text-sm">
              "El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva." - Juan 7:38
            </p>
          </motion.div>
          
          {/* Columna 2: Dirección con Google Maps */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-white">Visítanos</h3>
            </div>
            <p className="text-white/90 mb-4">
              Monteros, Tucumán - Argentina
            </p>
            <motion.a
              href="https://www.google.com/maps/place/Centro+Cristiano+R%C3%ADos+de+Vida/@-27.1648605,-65.5083885,16z/data=!4m6!3m5!1s0x942235328d23ecd7:0xfd18499085cb2d3!8m2!3d-27.1623523!4d-65.5098492!16s%2Fg%2F11g8vt9bjz?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <MapPin className="w-4 h-4" />
              <span>Abrir en Google Maps</span>
            </motion.a>
          </motion.div>
          
          {/* Columna 3: Instagram */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-pink-400" />
              <h3 className="text-xl font-bold text-white">Síguenos</h3>
            </div>
            <p className="text-white/90 mb-4">
              Conéctate con nuestra comunidad y sé parte de Ríos de Vida en Monteros.
            </p>
            <motion.a
              href="https://www.instagram.com/riosdevidamonteros/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-4 h-4" />
              <span>@riosdevidamonteros</span>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Línea divisoria decorativa con logo pequeño */}
        <div className="relative my-8 py-4 border-t border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-10 h-10"
              >
               
              </motion.div>
              <Heart className="w-6 h-6 text-red-400 fill-red-400 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Información de derechos y desarrollador */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Derechos reservados con mini logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-8 h-8"
              >
                <img 
                  src={rdvLogo} 
                  alt="Logo pequeño" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <p className="text-white/90">
                <span className="font-bold text-yellow-300">© {currentYear} Ríos de Vida</span>
                <span className="text-white/70"> - Todos los derechos reservados</span>
              </p>
            </div>
            <p className="text-white/60 text-sm">
              Centro Cristiano Ríos de Vida - Monteros, Tucumán, Argentina
            </p>
          </div>
          
          {/* Desarrollador */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3"
          >
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-300" />
              <span className="text-white/70 text-sm">Desarrollado con</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span className="text-white/70 text-sm">por</span>
            </div>
            <motion.a
              href="https://www.instagram.com/bravofernando_/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white rounded-lg border border-white/10 hover:border-white/30 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-medium">@bravofernando_</span>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Mensaje final navideño */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-white/80 text-sm">
            "Que la paz de Dios, que sobrepasa todo entendimiento, guarde vuestros corazones y vuestros pensamientos en Cristo Jesús." - Filipenses 4:7
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 text-yellow-300 text-xs"
          >
            🎄 ¡Feliz Navidad y Próspero Año Nuevo! 🎉
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elementos decorativos en el fondo del footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="absolute -bottom-4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-6 right-1/4 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;