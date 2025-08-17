import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const publications = [
  {
    title: "End to End Deep Neural Network: An approach to clean noisy documents",
    year: "2022",
    citations: 9,
    journal: "IEEE"
  },
  {
    title: "Deep Neural Network for Recognition of Enlarged Mathematical Corpus",
    year: "2022",
    citations: 6,
    journal: "Scopus Indexed"
  },
  {
    title: "Railway Track Defect Detection using Transfer Learning With EfficientNetB3",
    year: "2022",
    citations: 4,
    journal: "IEEE"
  },
  {
    title: "Applying Deep Learning in Mars Exploration: A neural network-based study",
    year: "2022",
    citations: 4,
    journal: "International Journal"
  },
  {
    title: "Neural Network based approach to diagnose and classify Monkeypox disease",
    year: "2023",
    citations: 3,
    journal: "Medical AI Conference"
  },
  {
    title: "Encoder-Decoder Architectures for Crack Detection on Surfaces",
    year: "2025",
    citations: 0,
    journal: "Recent Publication"
  }
];

const Publications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="publications" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Research Publications</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <FaQuoteLeft className="text-purple-500 text-2xl mb-3" />
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{pub.journal} • {pub.year}</span>
                  <span className="text-cyan-400 font-semibold">{pub.citations} citations</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <a 
              href="https://scholar.google.com/citations?user=S8AY2zMAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              View All Publications
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;