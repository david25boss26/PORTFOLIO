import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const projects = [
  {
    title: 'Revamping Our College Website',
    timeline: 'Dec 2023 - Jan 2024',
    tech: ['HTML', 'JS', 'CSS', 'MySQL'],
    description: `Developed a fully flexible, user-friendly college website with:\n- Student grade storage & graphical analysis\n- Secure backend with user sign-in\n- Personal details & exam schedule with date sorting`,
  },
  {
    title: 'Online E-Voting System',
    timeline: '2023',
    tech: ['Python', 'RSA', 'LSB', 'TCP/IP'],
    description: `Voting system with:\n- RSA encryption on client-side\n- LSB steganography for vote hiding\n- Secure, anonymous, robust TCP/IP communication`,
  },
  {
    title: 'ProSysMonitor: System Resource Monitor',
    timeline: '2023',
    tech: ['Python', 'matplotlib', 'Plotly', 'psutil', 'Linux CLI'],
    description: `Real-time process monitoring:\n- Live CPU, memory, disk tracking\n- Alerts & process control\n- Dual UI: CLI + GUI\n- Intelligent optimization suggestions`,
  },
  {
    title: 'Expense Tracker API',
    timeline: '2023',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    description: `RESTful API for daily expenses:\n- Modular routing & middleware\n- Real-world error handling`,
  },
  {
    title: 'Smart Home Automation (Predictive Maintenance)',
    timeline: 'Minor Project, Odd Sem 2024',
    tech: ['React Native', 'Tailwind CSS', 'LSTM', 'Flask', 'Firebase', 'Docker'],
    description: `Smart home device with ML, IoT, Cloud:\n- Real-time monitoring & alerts\n- LSTM for failure prediction\n- Scalable backend (Flask/Django, Firebase, Docker)`
  },
];

const ProjectCard = React.forwardRef(({ project }, ref) => (
  <div
    ref={ref}
    className="glass-card p-6 flex flex-col gap-2 min-h-[220px] w-full opacity-0 translate-y-8"
  >
    <div>
      <h3 className="text-2xl font-bold mb-1 text-mercedes-teal">{project.title}</h3>
      <div className="text-xs text-mercedes-silver mb-2">{project.timeline}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs bg-mercedes-teal/80 text-mercedes-black px-2 py-1 rounded-md font-semibold shadow">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-mercedes-silver text-sm whitespace-pre-line">{project.description}</p>
    </div>
  </div>
));

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    anime({
      targets: cardRefs.current,
      opacity: [0, 1],
      translateY: [32, 0],
      delay: anime.stagger(120),
      duration: 900,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <section className="py-20">
      <div className="container max-w-screen-xl w-full mx-auto px-2 sm:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-mercedes-silver max-w-2xl mx-auto mb-8">
            A showcase of my real-world work and engineering projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              ref={el => (cardRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 