import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { FaCode, FaCogs } from 'react-icons/fa';

const programmingSkills = [
  { name: 'C++', level: 90 },
  { name: 'C', level: 85 },
  { name: 'React', level: 92 },
  { name: 'Node.js', level: 80 },
  { name: 'MySQL', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'Flutter', level: 70 },
];

const technicalSkills = [
  { name: 'Data Structures in C++', level: 90 },
  { name: 'Object Oriented Programming', level: 88 },
  { name: 'Database Management Systems', level: 85 },
  { name: 'Operating System', level: 80 },
];

const SkillBar = ({ skill, id }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        anime({
          targets: barRef.current,
          width: `${skill.level}%`,
          easing: 'easeInOutQuad',
          duration: 1200,
        });
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skill.level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-base">{skill.name}</span>
        <span className="text-mercedes-silver font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-mercedes-silver/60 rounded-full overflow-hidden relative">
        <div
          ref={barRef}
          id={id}
          style={{ width: 0 }}
          className="h-full bg-mercedes-teal rounded-full transition-all absolute left-0 top-0"
        />
      </div>
    </div>
  );
};

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    anime({
      targets: leftRef.current,
      opacity: [0, 1],
      translateY: [32, 0],
      duration: 900,
      easing: 'easeOutQuad',
    });
    anime({
      targets: rightRef.current,
      opacity: [0, 1],
      translateY: [32, 0],
      delay: 200,
      duration: 900,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section className="py-20">
      <div className="container max-w-screen-xl w-full mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div ref={leftRef} className="opacity-0 translate-y-8">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-mercedes-silver mb-8 text-lg">
            I'm a passionate final-year software engineering student with hands-on experience in building real-world applications and innovative solutions. I focus on combining user-centered design principles with modern technologies to create software that not only looks great but also solves meaningful problems.
            </p>
            <p className="text-mercedes-silver mb-10 text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and speaking engagements.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary glass-card btn-animated">Download CV</button>
              <button className="btn-secondary glass-card btn-animated">Learn More</button>
            </div>
          </div>

          <div
            ref={rightRef}
            className="flex flex-col md:flex-row gap-6 md:gap-8 opacity-0 translate-y-8 w-full max-w-full"
          >
            <div className="glass-card p-8 flex-1 min-w-[180px] max-w-full md:max-w-[340px] mx-auto flex flex-col shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <FaCode className="text-mercedes-teal text-2xl" />
                <h3 className="text-2xl font-bold">Programming Skills</h3>
              </div>
              {programmingSkills.map((skill, idx) => (
                <SkillBar key={skill.name} skill={skill} id={`prog-skill-${idx}`} />
              ))}
            </div>
            <div className="glass-card p-8 flex-1 min-w-[180px] max-w-full md:max-w-[340px] mx-auto flex flex-col shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <FaCogs className="text-mercedes-teal text-2xl" />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              {technicalSkills.map((skill, idx) => (
                <SkillBar key={skill.name} skill={skill} id={`tech-skill-${idx}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 