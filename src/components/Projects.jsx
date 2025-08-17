import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "True Guardian",
    description: "AI-powered YouTube content filtering extension with 0.1s processing time, blocking 95% harmful content",
    tech: ["Python", "SQL", "JavaScript", "Node.js", "LLMs"],
    gradient: "from-red-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
  },
  {
    title: "Dartboard Scoring System",
    description: "Real-time computer vision system for automatic dart position recognition and score tracking",
    tech: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
    gradient: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=400&h=250&fit=crop"
  },
  {
    title: "Bird-Eye-View Generator",
    description: "Real-time bird's-eye view system for SLAM with ZED camera, enabling autonomous driving",
    tech: ["Python", "PyTorch", "YOLO", "ZED", "SLAM"],
    gradient: "from-blue-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop"
  },
  {
    title: "U-Net for HME Segmentation",
    description: "Enhanced U-Net achieving 82.4% Mean IoU for mathematical expression segmentation",
    tech: ["Deep Learning", "Neural Networks", "Pattern Recognition"],
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop"
  },
  {
    title: "AirShare",
    description: "Proof-of-concept for Huawei's Grab Air Drop with gesture-based file transfer",
    tech: ["Python", "MediaPipe", "Computer Vision"],
    gradient: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
  },
  {
    title: "QR Code Safety Analyzer",
    description: "Security analysis tool with 98% accuracy in identifying malicious QR codes",
    tech: ["Python", "Computer Vision", "Security Analysis"],
    gradient: "from-yellow-500 to-red-500",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=250&fit=crop"
  }
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/50 backdrop-blur rounded-full text-xs text-gray-300">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;