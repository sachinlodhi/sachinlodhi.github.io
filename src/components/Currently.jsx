import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaYoutube, FaPodcast, FaMicrophone, FaHeadphones, FaPlay, FaCode, FaRocket, FaGoogle } from 'react-icons/fa';
import { BsSpotify, BsYoutube } from 'react-icons/bs';

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

  // Static stats (real or realistic)
  const channelStats = {
    totalViews: "15.4K",
    subscribers: "1.25K",
    weeklyGrowth: 12.5
  };

  const getThumbnailUrl = (videoId, quality = 'hqdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentActivities = [
    {
      icon: <FaPodcast className="text-3xl" />,
      title: "AI/Tech Podcast Host",
      description: "Weekly deep dives into AI, ML, and emerging tech with industry experts",
      color: "from-purple-500 to-pink-500",
      link: "https://www.youtube.com/@sachinlodhi8542",
      stats: "New episodes weekly",
      live: true
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Building AI Rehabilitation Platform",
      description: "HIPAA-compliant system processing 10,000+ patient data points in real-time",
      color: "from-cyan-500 to-blue-500",
      stats: "20+ pilot users",
      live: false
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Open Source Contributor",
      description: "Active contributions to AI/ML projects and maintaining several tools",
      color: "from-green-500 to-teal-500",
      stats: "Daily commits",
      live: false
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
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">What I'm Up To</span>
          </h2>

          {/* Main Activities Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {currentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group relative"
              >
                {activity.live && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-green-400 animate-pulse flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span> LIVE
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-r ${activity.color} p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform`}>
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{activity.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-semibold">{activity.stats}</span>
                  {activity.link && (
                    <a 
                      href={activity.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <FaPlay />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Podcast Feature Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Podcast Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl">
                    <FaMicrophone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI & Tech Insights Podcast</h3>
                    <p className="text-gray-400">Exploring the frontier of artificial intelligence</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Join me for in-depth conversations with researchers, engineers, and thought leaders 
                  shaping the future of AI and technology. From technical deep-dives to industry trends, 
                  we cover it all.
                </p>

                {/* Platform Links */}
                <div className="flex gap-4 mb-6">
                  <motion.a
                    href="https://www.youtube.com/@sachinlodhi8542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600/20 hover:bg-red-600/30 p-3 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BsYoutube className="text-2xl text-red-500" />
                  </motion.a>
                  <motion.button
                    className="bg-green-600/20 hover:bg-green-600/30 p-3 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BsSpotify className="text-2xl text-green-500" />
                  </motion.button>
                  <motion.button
                    className="bg-blue-600/20 hover:bg-blue-600/30 p-3 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGoogle className="text-2xl text-blue-500" />
                  </motion.button>
                </div>

                {/* Channel Stats (static) */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {channelStats.totalViews}
                    </div>
                    <div className="text-gray-400 text-sm">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {channelStats.subscribers}
                    </div>
                    <div className="text-gray-400 text-sm">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      +{channelStats.weeklyGrowth}%
                    </div>
                    <div className="text-gray-400 text-sm">Weekly Growth</div>
                  </div>
                </div>
              </div>

              {/* Right: Latest Videos with Real Thumbnails */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                  <FaHeadphones className="text-purple-400" />
                  Latest Episodes
                  <span className="text-xs text-purple-400 ml-auto">● YOUTUBE</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {latestVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
                      onMouseEnter={() => setHoveredVideo(video.id)}
                      onMouseLeave={() => setHoveredVideo(null)}
                      onClick={() => openVideo(video.url)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Thumbnail */}
                      <img
                        src={getThumbnailUrl(video.id)}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                      
                      {/* Play button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredVideo === video.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-red-600 rounded-full p-2 shadow-lg">
                          <FaPlay className="text-white text-sm ml-0.5" />
                        </div>
                      </motion.div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </div>
                      
                      {/* Trending indicator */}
                      {video.trending && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                          🔥
                        </div>
                      )}
                      
                      {/* Title on hover */}
                      {hoveredVideo === video.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-white text-xs font-medium truncate">
                            {video.title}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                <motion.a
                  href="https://www.youtube.com/@sachinlodhi8542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 mt-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-purple-300 font-semibold">View All Episodes →</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              Interested in being a guest or collaborating? Let's connect!
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currently;