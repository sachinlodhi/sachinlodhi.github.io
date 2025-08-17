import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [currentText, setCurrentText] = useState('');
  const [showParticles, setShowParticles] = useState(false);
  const fullText = 'Sachin Lodhi';
  const roles = ['AI Developer', 'ML Engineer', 'Researcher'];
  const [currentRole, setCurrentRole] = useState(0);

  // Typing effect
  useEffect(() => {
    let timeout;
    if (currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 150);
    } else {
      setShowParticles(true);
      // Cycle through roles
      const roleTimeout = setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 800);
      return () => clearTimeout(roleTimeout);
    }
    return () => clearTimeout(timeout);
  }, [currentText, fullText]);

  // Generate particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
      onAnimationComplete={() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
      }}
      id="loader"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating particles */}
      <AnimatePresence>
        {showParticles && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 3,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main content container */}
      <div className="relative z-10 text-center">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute -inset-16 border-2 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle rotating ring */}
        <motion.div
          className="absolute -inset-12 border-2 border-cyan-400 rounded-full opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner rotating ring */}
        <motion.div
          className="absolute -inset-8 border-2 border-purple-500 rounded-full opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Center content */}
        <div className="relative">
          {/* Pulsing center orb */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 20px rgba(6, 182, 212, 0.5)',
                '0 0 40px rgba(6, 182, 212, 0.8)',
                '0 0 20px rgba(6, 182, 212, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* AI Brain icon */}
            <motion.div
              className="text-4xl text-white"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🧠
            </motion.div>
          </motion.div>

          {/* Name with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {currentText}
              <motion.span
                className="inline-block w-1 h-8 md:h-12 bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </h1>
          </motion.div>

          {/* Role cycling */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {roles[currentRole]}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Loading progress bar */}
          <motion.div
            className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="text-gray-400 mt-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Initializing AI Systems...
          </motion.p>
        </div>

        {/* Orbiting elements */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              rotate: 360,
              x: [0, 80, 0, -80, 0],
              y: [0, -80, 0, 80, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Corner accent elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-pink-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Loader;