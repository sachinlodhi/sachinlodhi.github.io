import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiBuildingHouse } from 'react-icons/bi';
import { FaUniversity, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaBrain, FaChartLine } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const experiences = [
  {
    title: "Full Stack AI Developer",
    company: "Stealth Startup (Stealth Mode)",
    period: "Jan 2025 - Present",
    duration: "Current",
    location: "Remote",
    type: "Full-time",
    icon: <BiBuildingHouse />,
    color: "from-purple-500 to-pink-500",
    description: "Leading full-stack AI development for a healthcare startup building a next-generation patient rehabilitation platform. Specializing in end-to-end AI system architecture, implementation, and deployment of HIPAA-compliant AI solutions with a focus on privacy-first healthcare technology and multi-agent AI systems.",
    highlights: [
      {
        text: "Platform Architecture: Designed and implemented a HIPAA-compliant, end-to-end AI rehabilitation platform, achieving 100% uptime while serving 20+ pilot users with real-time patient monitoring capabilities",
        metric: "100% uptime, 20+ users"
      },
      {
        text: "Analytics Engine Development: Built RAG-powered clinical analytics system processing 10,000+ multi-modal patient data points, delivering 75% reduction in manual analysis time",
        metric: "10K+ data points, 75% efficiency gain"
      },
      {
        text: "Infrastructure Design: Architected hybrid cloud infrastructure with edge computing and local model inference, implementing zero-trust security architecture",
        metric: "Zero-trust architecture"
      },
      {
        text: "Multi-Agent AI Development: Engineering autonomous agent orchestration system featuring 3+ specialized AI agents for continuous patient monitoring and personalized treatment optimization",
        metric: "3+ AI agents"
      }
    ],
    tags: ["Full-Stack AI", "Machine Learning", "Healthcare AI", "React", "Python", "Multi-Agent Systems", "HIPAA"]
  },
  {
    title: "Data Science and ML Research Assistant",
    company: "Cal State Fullerton",
    period: "Sept 2023 - Present",
    duration: "1+ years",
    location: "Fullerton, CA",
    type: "Research & TA",
    icon: <FaUniversity />,
    color: "from-cyan-500 to-blue-500",
    description: "Data Science Research Assistant with nearly 2 years developing ML models and predictive analytics. Led multiple research projects while serving as a Graduate TA for 40+ students. Currently maintaining a 3.83 CGPA in graduate studies.",
    highlights: [
      {
        text: "Project LUMINATE: Developed classification models predicting student dropout risk with 90.8% accuracy, improving baseline performance from 50% to 80%",
        metric: "90.8% accuracy",
        link: "https://news.fullerton.edu/spotlight/summer-research-showcase-highlights-innovative-student-projects/"
      },
      {
        text: "Project SUSTAIN-PV: Built time-series forecasting models for Edison-funded photovoltaic system performance optimization",
        metric: "Edison-funded"
      },
      {
        text: "Project RAISE: Designed and delivered ML/Computer Vision curriculum for non-CS background community college students",
        metric: "Community impact",
        link: "https://www.fullerton.edu/projectraise/"
      },
      {
        text: "Graduate Teaching Assistant: Supported 40+ students in CPSC 375 Data Science and Big Data coursework through grading and mentoring",
        metric: "40+ students"
      }
    ],
    tags: ["Machine Learning", "Research", "Teaching", "Python", "Data Science", "Computer Vision"]
  },
  {
    title: "Machine Learning Engineer",
    company: "Freelancing",
    period: "Sept 2021 - May 2023",
    duration: "1.5+ years",
    location: "Remote",
    type: "Contract",
    icon: <MdWork />,
    color: "from-green-500 to-teal-500",
    description: "Delivered comprehensive deep learning solutions across healthcare, education, and computer vision domains. Built specialized ML systems and published multiple research papers in IEEE and international Scopus-indexed journals.",
    highlights: [
      {
        text: "Led handwritten math expression analysis research, creating an 1178-sample dataset and achieving 82.4% mean IOU score for segmentation with 74% recognition accuracy",
        metric: "74% accuracy, 82.4% IOU"
      },
      {
        text: "Applied deep learning for medical imaging, ed-tech, OCR, and object detection across diverse client projects",
        metric: "Multi-domain expertise"
      },
      {
        text: "Advanced healthcare AI for early disease detection and created AI-powered educational tools",
        metric: "Healthcare innovation"
      },
      {
        text: "Published 8 research papers in Scopus-indexed journals and IEEE conferences",
        metric: "8 publications"
      }
    ],
    tags: ["Deep Learning", "Computer Vision", "Medical AI", "OCR", "Research", "IEEE Publications"]
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="experience" className="py-20 px-4 relative z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
                Professional Experience
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building AI-powered solutions across healthcare, research, and education
            </motion.p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-green-400 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-purple-400 hidden md:block z-10"></div>
                  
                  {/* Experience card */}
                  <div className="md:ml-20 ml-0">
                    <motion.div
                      className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer"
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      whileHover={{ y: -5, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div 
                          className={`bg-gradient-to-r ${exp.color} p-4 rounded-2xl text-white text-3xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          {exp.icon}
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-purple-400 font-semibold text-lg mb-2">{exp.company}</p>
                            </div>
                            <div className="text-right">
                              <div className="bg-gray-800/50 px-3 py-1 rounded-full text-sm text-cyan-400 font-medium mb-2">
                                {exp.type}
                              </div>
                              <div className="text-green-400 text-sm font-medium">
                                {exp.duration}
                              </div>
                            </div>
                          </div>
                          
                          {/* Meta info */}
                          <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <FaCalendarAlt className="text-purple-400" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-cyan-400" />
                              {exp.location}
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Highlights */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: expandedCard === index ? "auto" : "auto",
                          opacity: 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid gap-3">
                          {exp.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                              className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 group/highlight"
                            >
                              <div className="flex items-start gap-3">
                                <div className="text-cyan-400 mt-1 group-hover/highlight:scale-125 transition-transform">
                                  <FaRocket className="text-sm" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-gray-300 mb-2 leading-relaxed">
                                    {highlight.text}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 rounded-full">
                                      <span className="text-purple-300 text-sm font-medium">
                                        {highlight.metric}
                                      </span>
                                    </div>
                                    {highlight.link && (
                                      <motion.a
                                        href={highlight.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <FaExternalLinkAlt />
                                      </motion.a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Expand indicator */}
                      <div className="text-center mt-4">
                        <div className="text-purple-400 text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                          Click to explore details
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid md:grid-cols-4 grid-cols-2 gap-6"
          >
            {[
              { icon: <FaBrain />, value: "3.83", label: "Graduate CGPA", color: "text-purple-400" },
              { icon: <FaChartLine />, value: "90.8%", label: "ML Model Accuracy", color: "text-cyan-400" },
              { icon: <FaRocket />, value: "8", label: "Research Papers", color: "text-green-400" },
              { icon: <FaUniversity />, value: "40+", label: "Students Mentored", color: "text-pink-400" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;