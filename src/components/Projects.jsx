import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaFilter } from 'react-icons/fa';

const allProjects = [
  {
    title: "AI Rehabilitation Platform",
    description: "HIPAA-compliant healthcare platform with multi-agent AI system processing 10,000+ patient data points in real-time",
    tech: ["React", "Python", "FastAPI", "Multi-Agent AI", "HIPAA", "Healthcare"],
    gradient: "from-purple-500 to-pink-500",
    category: "Healthcare AI",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    title: "Deep-ML Contributions",
    description: "Active contributions to Deep-ML platform - the LeetCode for ML/DL problems, solving advanced algorithm challenges",
    tech: ["Python", "Machine Learning", "Deep Learning", "Algorithms", "Platform Development"],
    gradient: "from-indigo-500 to-purple-500",
    category: "Platform Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
  },
  {
    title: "VLM Project",
    description: "Vision Language Model combining computer vision and NLP for multimodal AI applications",
    tech: ["PyTorch", "Computer Vision", "NLP", "Transformers", "Multimodal AI"],
    gradient: "from-cyan-500 to-blue-500",
    category: "Research & Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  },
  {
    title: "True Guardian",
    description: "AI-powered YouTube content filtering extension with 0.1s processing time, blocking 95% harmful content",
    tech: ["Python", "SQL", "JavaScript", "Node.js", "LLMs"],
    gradient: "from-red-500 to-orange-500",
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
  },
  {
    title: "Dartboard Scoring System",
    description: "Real-time computer vision system for automatic dart position recognition and score tracking",
    tech: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
    gradient: "from-green-500 to-teal-500",
    category: "Computer Vision",
    featured: false,
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=400&h=250&fit=crop"
  },
  {
    title: "Bird-Eye-View Generator",
    description: "Real-time bird's-eye view system for SLAM with ZED camera, enabling autonomous driving",
    tech: ["Python", "PyTorch", "YOLO", "ZED", "SLAM"],
    gradient: "from-blue-500 to-purple-500",
    category: "Computer Vision",
    featured: false,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop"
  },
  {
    title: "U-Net for HME Segmentation",
    description: "Enhanced U-Net achieving 82.4% Mean IoU for handwritten mathematical expression segmentation",
    tech: ["Deep Learning", "Neural Networks", "Pattern Recognition", "U-Net"],
    gradient: "from-purple-500 to-pink-500",
    category: "Research & Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop"
  },
  {
    title: "AirShare",
    description: "Proof-of-concept for Huawei's Grab Air Drop with gesture-based file transfer using computer vision",
    tech: ["Python", "MediaPipe", "Computer Vision", "Gesture Recognition"],
    gradient: "from-cyan-500 to-blue-500",
    category: "Computer Vision",
    featured: false,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
  },
  {
    title: "QR Code Safety Analyzer",
    description: "Security analysis tool with 98% accuracy in identifying malicious QR codes using ML",
    tech: ["Python", "Computer Vision", "Security Analysis", "Machine Learning"],
    gradient: "from-yellow-500 to-red-500",
    category: "Cybersecurity",
    featured: false,
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=250&fit=crop"
  },
  {
    title: "Medical Imaging AI",
    description: "Deep learning models for radiology analysis and early disease detection in medical imaging",
    tech: ["Deep Learning", "Medical Imaging", "TensorFlow", "Healthcare"],
    gradient: "from-green-500 to-blue-500",
    category: "Healthcare AI",
    featured: false,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    title: "Educational ML Platform",
    description: "Interactive machine learning platform for teaching ML concepts to non-CS background students",
    tech: ["Python", "Jupyter", "Scikit-learn", "Education Technology"],
    gradient: "from-orange-500 to-pink-500",
    category: "Education Technology",
    featured: false,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
  },
  {
    title: "Student Dropout Prediction",
    description: "ML ensemble achieving 90.8% accuracy in predicting student dropout risk for early intervention",
    tech: ["Python", "Machine Learning", "Data Analysis", "Ensemble Methods"],
    gradient: "from-blue-500 to-green-500",
    category: "Education Technology",
    featured: false,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
  }
];

const categories = ["All", "Healthcare AI", "Computer Vision", "Research & Development", "Platform Development", "Web Development", "Cybersecurity", "Education Technology"];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
                Featured Projects
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A showcase of AI/ML projects spanning healthcare, computer vision, research, and platform development
            </motion.p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <FaFilter className="text-gray-400 mt-2 mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden group relative"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      ✨ FEATURED
                    </span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/50 backdrop-blur rounded-full text-xs text-gray-300 hover:bg-gray-700/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/sachinlodhi" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white flex items-center gap-2 mx-auto"
              >
                {showAll ? (
                  <>
                    <FaChevronUp /> Show Less Projects
                  </>
                ) : (
                  <>
                    <FaChevronDown /> Show More Projects ({filteredProjects.length - 6} more)
                  </>
                )}
              </button>
            </motion.div>
          )}

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-gray-800/30 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">{allProjects.length}+</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">{categories.length - 1}</div>
              <div className="text-gray-400 text-sm">Domains Covered</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">{allProjects.filter(p => p.featured).length}</div>
              <div className="text-gray-400 text-sm">Featured Projects</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;