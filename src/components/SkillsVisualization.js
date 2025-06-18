import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Programming Languages',
    color: 'bg-mercedes-teal',
    skills: [
      { name: 'C++', level: 90, description: 'Advanced knowledge of C++ for algorithms, OOP, and system programming.' },
      { name: 'C', level: 85, description: 'Strong foundation in C for low-level and embedded programming.' },
      { name: 'Python', level: 85, description: 'Used for automation, data analysis, and machine learning.' },
      { name: 'JavaScript', level: 80, description: 'Frontend and backend scripting, ES6+, async programming.' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    color: 'bg-mercedes-silver',
    skills: [
      { name: 'React', level: 92, description: 'Building modern, scalable SPAs and UIs.' },
      { name: 'Node.js', level: 80, description: 'Backend APIs, real-time apps, and server-side scripting.' },
      { name: 'Express.js', level: 78, description: 'RESTful APIs and middleware for Node.js.' },
      { name: 'Flutter', level: 70, description: 'Cross-platform mobile app development.' },
    ],
  },
  {
    name: 'Tools & Databases',
    color: 'bg-mercedes-dark-gray',
    skills: [
      { name: 'MySQL', level: 80, description: 'Relational database design, queries, and optimization.' },
      { name: 'MongoDB', level: 75, description: 'NoSQL database for flexible, scalable data storage.' },
      { name: 'Git', level: 85, description: 'Version control, branching, and collaboration.' },
      { name: 'Docker', level: 70, description: 'Containerization for development and deployment.' },
    ],
  },
];

const barVariants = {
  initial: { width: 0 },
  animate: (level) => ({ width: `${level}%`, transition: { duration: 1.2, ease: 'easeInOut' } }),
};

const SkillsVisualization = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills Visualization</h2>
          <p className="text-mercedes-silver max-w-2xl mx-auto">
            Explore my technical skills, grouped by category. Hover over each skill for more details!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={cat.name} className="glass-card p-8 shadow-lg flex flex-col gap-6">
              <h3 className={`text-2xl font-bold mb-4 ${cat.color} text-mercedes-black rounded px-3 py-1 inline-block`}>{cat.name}</h3>
              <div className="flex flex-col gap-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="relative group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-base">{skill.name}</span>
                      <span className="text-mercedes-silver font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-mercedes-silver/60 rounded-full overflow-hidden relative">
                      <motion.div
                        className={`h-full rounded-full ${cat.color} shadow-lg`}
                        custom={skill.level}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={barVariants}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Particle effect: simple animated dots at the end of the bar */}
                        {hoveredSkill === skill && (
                          <motion.span
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mercedes-white opacity-80"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                          />
                        )}
                      </motion.div>
                    </div>
                    {/* Tooltip/description */}
                    {hoveredSkill === skill && (
                      <motion.div
                        className="absolute left-0 top-8 bg-mercedes-black text-mercedes-teal rounded shadow-lg px-4 py-2 text-sm z-30 w-max max-w-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        {skill.description}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization; 