import React from 'react';
import { motion } from 'framer-motion';
import { Cross, Heart, Shield, Users } from 'lucide-react';

const MessageSection = () => {
  const messageParts = [
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "El cumplimiento del plan",
      content: "El nacimiento de Jesús es el cumplimiento del plan de Dios. No fue un accidente, sino el momento preciso en la historia cuando Dios envió a Su Hijo para nuestra salvación."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-300" />,
      title: "Jesús caminó como nosotros",
      content: "Jesús caminó y vivió como nosotros solo para que Él pueda cumplir la Ley de Dios que para nosotros es imposible. Experimentó nuestras tentaciones, dolores y alegrías, pero sin pecado."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-300" />,
      title: "Justificados a través de Él",
      content: "A través de Él somos justificados. Él es el Puente que nos conecta a Dios, su sangre basta y sobra para cubrir nuestros pecados."
    },
    {
      icon: <Cross className="w-8 h-8 text-yellow-300" />,
      title: "El camino, la verdad y la vida",
      content: "Jesús declaró: 'Yo soy el camino, la verdad y la vida'. En Él encontramos dirección para nuestro caminar, verdad para nuestras preguntas y vida para nuestra eternidad."
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">El Mensaje de Navidad</h2>
      
      <div className="space-y-8">
        {messageParts.map((part, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10"
          >
            <div className="flex items-start gap-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-white/20 rounded-full"
              >
                {part.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{part.title}</h3>
                <p className="text-white/90 leading-relaxed">{part.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Texto decorativo navideño */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 pt-6 border-t border-white/20"
      >
        <p className="text-center text-white/80 text-lg italic">
          "Porque tanto amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna." - Juan 3:16
        </p>
      </motion.div>
    </div>
  );
};

export default MessageSection;