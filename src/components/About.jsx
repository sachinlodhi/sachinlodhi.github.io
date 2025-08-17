import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaFileAlt, FaBrain, FaCode, FaHeart, FaRocket } from 'react-icons/fa';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: <FaFileAlt />, value: "9", label: "Papers Published", color: "text-purple-400" },
    { icon: <FaBrain />, value: "31", label: "Citations", color: "text-cyan-400" },
    { icon: <FaGraduationCap />, value: "3.83", label: "Graduate GPA", color: "text-green-400" },
    { icon: <FaCode />, value: "40+", label: "AI Projects", color: "text-pink-400" }
  ];

  const highlights = [
    {
      icon: <FaBrain />,
      title: "AI Research Excellence",
      description: "9 published papers with 31 citations in machine learning, computer vision, and healthcare AI",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaHeart />,
      title: "Healthcare AI Impact",
      description: "Building HIPAA-compliant AI systems for patient rehabilitation and medical data analysis",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaRocket />,
      title: "Production Deployment",
      description: "Deployed AI solutions in regulated industries including healthcare and emergency response",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full-Stack AI Developer & Researcher passionate about transforming healthcare through intelligent systems
            </motion.p>
          </div>
          
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Seasoned <span className="text-purple-400 font-semibold">Full-Stack AI Developer</span> and 
                    <span className="text-cyan-400 font-semibold"> Machine Learning Engineer</span> with 3+ years of experience 
                    building production AI systems. Currently pursuing MS Computer Science at Cal State Fullerton 
                    with a <span className="text-green-400 font-semibold">3.83 GPA</span> (First Class Distinction, expected 2025).
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    My expertise spans <span className="text-purple-400 font-semibold">artificial intelligence</span>, 
                    <span className="text-cyan-400 font-semibold"> deep learning</span>, and 
                    <span className="text-pink-400 font-semibold"> computer vision</span>, developed through diverse 
                    research projects and industry collaborations. I excel in predictive modeling, image analysis, 
                    and developing innovative AI solutions for complex real-world challenges.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My research portfolio includes <span className="text-green-400 font-semibold">9 published papers</span> 
                    with <span className="text-yellow-400 font-semibold">31 citations</span>, plus production deployments 
                    in regulated industries including <span className="text-purple-400 font-semibold">healthcare</span>, 
                    emergency response, and autonomous systems.
                  </p>
                </motion.div>
              </div>

              {/* Right: Highlights */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-gray-800/30 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${highlight.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className={`text-3xl mb-3 ${stat.color} group-hover:scale-125 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Passionate about using AI to solve real-world problems and make a positive impact
            </p>
            <motion.button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Experience
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;