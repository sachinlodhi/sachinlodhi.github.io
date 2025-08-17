import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["Python", "R", "C++", "JavaScript", "SQL", "TypeScript", "CUDA"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "ML/DL Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "Keras", "JAX"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "YOLO", "MediaPipe", "Image Segmentation", "Object Detection", "Real-time Processing"],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS SageMaker", "GCP Vertex AI", "Docker", "Kubernetes", "Terraform", "MLflow"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "NLP & LLMs",
    skills: ["LangChain", "spaCy", "NLTK", "RAG/CAG/KAG", "Transformers", "GPT", "BERT"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "FastAPI", "Flask", "REST APIs", "GraphQL", "MongoDB"],
    color: "from-yellow-500 to-orange-500"
  }
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800/80 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;