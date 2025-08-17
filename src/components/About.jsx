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
    { icon: <FaFileAlt />, value: "9", label: "Research Papers", color: "text-purple-400" },
    { icon: <FaBrain />, value: "31", label: "Citations", color: "text-cyan-400" },
    { icon: <FaGraduationCap />, value: "3.83", label: "Graduate GPA", color: "text-green-400" },
    { icon: <FaCode />, value: "50+", label: "DS/ML/CV Projects", color: "text-pink-400" }
  ];

  const highlights = [
    {
      icon: <FaBrain />,
      title: "Data Science & ML Research",
      description: "9 published papers in machine learning, computer vision, and healthcare AI with 31 citations across top-tier conferences and journals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaHeart />,
      title: "Healthcare AI Solutions",
      description: "Building HIPAA-compliant AI systems for patient rehabilitation, medical imaging analysis, and clinical decision support",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaRocket />,
      title: "End-to-End AI Development",
      description: "Full-stack AI pipeline development from data preprocessing to production deployment in regulated industries",
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
              Full-Stack AI Developer & Data Science Researcher specializing in ML, Computer Vision, and Healthcare AI
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
                    Experienced <span className="text-purple-400 font-semibold">Full-Stack AI Developer</span> and 
                    <span className="text-cyan-400 font-semibold"> Data Science Researcher</span> with 3+ years of experience 
                    building production AI systems across multiple domains. Currently pursuing MS Computer Science at Cal State Fullerton 
                    with a <span className="text-green-400 font-semibold">3.83 GPA</span> (First Class Distinction, expected 2025).
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    My expertise spans the full spectrum of <span className="text-purple-400 font-semibold">Data Science</span>, 
                    <span className="text-cyan-400 font-semibold"> Machine Learning</span>, 
                    <span className="text-pink-400 font-semibold"> Computer Vision</span>, and 
                    <span className="text-yellow-400 font-semibold"> Deep Learning</span>. I specialize in end-to-end 
                    AI pipeline development, from data preprocessing and feature engineering to model deployment and monitoring 
                    in production environments.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Portfolio includes <span className="text-green-400 font-semibold">9 published research papers</span> 
                    with <span className="text-yellow-400 font-semibold">31 citations</span>, covering domains like 
                    <span className="text-purple-400 font-semibold"> healthcare AI</span>, 
                    <span className="text-cyan-400 font-semibold"> medical imaging</span>, 
                    <span className="text-pink-400 font-semibold"> educational technology</span>, and 
                    <span className="text-green-400 font-semibold"> autonomous systems</span>. Proven track record in 
                    HIPAA-compliant deployments and regulatory-grade AI solutions.
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
              Passionate about leveraging Data Science, ML, and Computer Vision to solve complex real-world problems
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