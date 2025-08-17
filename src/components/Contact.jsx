import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          
          <div className="glass rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-300 text-center mb-8">
              I'm always interested in discussing AI/ML opportunities, research collaborations, 
              or innovative projects. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:sachinlodhi8614@gmail.com"
                className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span className="text-gray-300">sachinlodhi8614@gmail.com</span>
              </a>
              
              <a 
                href="tel:657-319-1687"
                className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <FaPhone className="text-purple-400 text-xl" />
                <span className="text-gray-300">657-319-1687</span>
              </a>
              
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                <FaMapMarkerAlt className="text-pink-400 text-xl" />
                <span className="text-gray-300">Fullerton, California, USA</span>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/sachinlodhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <FaLinkedin className="text-blue-400 text-xl" />
                <span className="text-gray-300">LinkedIn Profile</span>
              </a>
            </div>
            
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:sachinlodhi8614@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a 
                href="https://github.com/sachinlodhi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;