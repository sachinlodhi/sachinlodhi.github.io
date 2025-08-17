import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaYoutube, FaPodcast, FaMicrophone, FaHeadphones, FaPlay, FaCode, FaBrain, FaEye, FaLaptopCode } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Currently = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [hoveredVideo, setHoveredVideo] = useState(null);
  
  // Real YouTube videos
  const latestVideos = [
    {
      id: 'vyZU37gtXh4',
      url: 'https://youtu.be/vyZU37gtXh4',
      title: "The Future of Large Language Models",
      duration: "45:23",
      trending: true
    },
    {
      id: 'c9zFBcZ-Px0',
      url: 'https://youtu.be/c9zFBcZ-Px0',
      title: "Computer Vision in Production",
      duration: "38:15",
      trending: false
    },
    {
      id: 'wOhfTltxzKg',
      url: 'https://youtu.be/wOhfTltxzKg',
      title: "Building Scalable ML Systems",
      duration: "52:10",
      trending: true
    },
    {
      id: 'AbPxRrCU48A',
      url: 'https://youtu.be/AbPxRrCU48A',
      title: "AI Development Best Practices",
      duration: "41:05",
      trending: false
    }
  ];

  const getThumbnailUrl = (videoId, quality = 'hqdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentProjects = [
    {
      icon: <FaPodcast className="text-3xl" />,
      title: "AI/Tech Podcast",
      description: "Weekly deep dives into AI, ML, and emerging tech with industry experts and technical tutorials",
      color: "from-red-500 to-pink-500",
      link: "https://www.youtube.com/@sachinlodhi8542",
      stats: "New episodes weekly",
      live: true,
      category: "Content Creation"
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Deep-ML Contributor",
      description: "Contributing to Deep-ML platform - the LeetCode for ML/DL problems. Solving and creating ML algorithm challenges",
      color: "from-purple-500 to-indigo-500",
      link: "https://www.deep-ml.com/",
      stats: "Active problem solving",
      live: true,
      category: "Platform Development"
    },
    {
      icon: <FaEye className="text-3xl" />,
      title: "VLM Project",
      description: "Building a Vision Language Model (VLM) project combining computer vision and natural language processing",
      color: "from-cyan-500 to-blue-500",
      stats: "In development",
      live: true,
      category: "Research & Development"
    }
  ];

  return (
    <section id="currently" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
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
                What I'm Currently Working On
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building VLM systems, contributing to Deep-ML platform, and sharing AI knowledge through podcasting
            </motion.p>
          </div>

          {/* Current Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-white/10 group relative"
              >
                {project.live && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-green-400 animate-pulse flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span> ACTIVE
                    </span>
                  </div>
                )}
                
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className={`bg-gradient-to-r ${project.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-105 mt-4`}>
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-semibold">{project.stats}</span>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                    >
                      <span className="text-xs">View</span>
                      <FaPlay />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Deep-ML & VLM Projects */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl">
                  <FaBrain className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Technical Projects</h3>
                  <p className="text-gray-400">Deep-ML & VLM Development</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50">
                  <div className="flex items-center gap-3 mb-2">
                    <FaLaptopCode className="text-purple-400" />
                    <h4 className="text-white font-semibold">Deep-ML Platform</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Contributing to the "LeetCode for ML" - solving and creating algorithm challenges for ML practitioners
                  </p>
                  <a 
                    href="https://www.deep-ml.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300"
                  >
                    Visit Deep-ML Platform →
                  </a>
                </div>
                
                <div className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50">
                  <div className="flex items-center gap-3 mb-2">
                    <FaEye className="text-cyan-400" />
                    <h4 className="text-white font-semibold">VLM Project</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Developing a Vision Language Model combining computer vision and NLP for multimodal AI applications
                  </p>
                </div>
              </div>
            </motion.div>

            {/* YouTube Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl">
                  <FaMicrophone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI/Tech Podcast</h3>
                  <p className="text-gray-400">Knowledge Sharing & Community</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {latestVideos.slice(0, 4).map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => openVideo(video.url)}
                  >
                    <img
                      src={getThumbnailUrl(video.id)}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40" />
                    
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredVideo === video.id ? 1 : 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="bg-red-600 rounded-full p-2 shadow-lg">
                        <FaPlay className="text-white text-sm ml-0.5" />
                      </div>
                    </motion.div>
                    
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                    
                    {video.trending && (
                      <div className="absolute top-1 left-1 text-xs">🔥</div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                href="https://www.youtube.com/@sachinlodhi8542"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl hover:from-red-500/30 hover:to-pink-500/30 text-sm font-medium"
              >
                <BsYoutube className="inline mr-2 text-red-400" />
                <span className="text-red-400">Watch More Episodes →</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              Interested in collaborating on VLM projects, contributing to Deep-ML, or being a podcast guest?
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 text-white"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currently;