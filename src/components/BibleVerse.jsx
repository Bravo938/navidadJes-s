import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';

const BibleVerse = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const verses = [
    {
      reference: "Juan 14:6 NVI",
      text: "—Yo soy el camino, la verdad y la vida —contestó Jesús—. Nadie llega al Padre sino por mí.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      reference: "Romanos 5:8 NVI",
      text: "Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros.",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      reference: "Isaías 9:6 NVI",
      text: "Porque nos ha nacido un niño, se nos ha concedido un hijo; la soberanía reposará sobre sus hombros, y se le darán estos nombres: Consejero admirable, Dios fuerte, Padre eterno, Príncipe de paz.",
      color: "from-green-500/20 to-teal-500/20"
    }
  ];

  const [currentVerse, setCurrentVerse] = useState(0);

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-full">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Versículo Bíblico</h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextVerse}
            className="p-2 bg-white/20 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        </div>
        
        <motion.div
          key={currentVerse}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.5 }}
          className={`flex-grow p-6 rounded-2xl bg-gradient-to-br ${verses[currentVerse].color} flex flex-col justify-center`}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">{verses[currentVerse].reference}</h3>
          <p className="text-white text-lg leading-relaxed text-center">{verses[currentVerse].text}</p>
        </motion.div>
        
        <div className="mt-6 flex justify-center space-x-2">
          {verses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVerse(index)}
              className={`w-3 h-3 rounded-full ${index === currentVerse ? 'bg-yellow-400' : 'bg-white/40'}`}
            />
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20">
          <h4 className="text-white font-semibold mb-3">Reflexión navideña:</h4>
          <p className="text-white/90 text-sm leading-relaxed">
            En esta Navidad, recordemos que Jesús no es solo un bebé en un pesebre, 
            es el Salvador del mundo que vino a reconciliarnos con Dios. 
            Él es el puente entre la humanidad y la divinidad.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BibleVerse;