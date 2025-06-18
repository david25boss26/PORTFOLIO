import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2024',
    title: 'Smart Home Automation (Predictive Maintenance)',
    location: 'Minor Project, Odd Sem 2024',
    description: `Smart home device with ML, IoT, Cloud:\n- Real-time monitoring & alerts\n- LSTM for failure prediction\n- Scalable backend (Flask/Django, Firebase, Docker)`,
    icon: '🏠',
    tech: ['React Native', 'Tailwind CSS', 'LSTM', 'Flask', 'Firebase', 'Docker']
  },
  {
    year: '2023',
    title: 'ProSysMonitor: System Resource Monitor',
    location: 'Personal Project',
    description: `Real-time process monitoring:\n- Live CPU, memory, disk tracking\n- Alerts & process control\n- Dual UI: CLI + GUI\n- Intelligent optimization suggestions`,
    icon: '🖥️',
    tech: ['Python', 'matplotlib', 'Plotly', 'psutil', 'Linux CLI']
  },
  {
    year: '2023',
    title: 'Online E-Voting System',
    location: 'Academic Project',
    description: `Voting system with:\n- RSA encryption on client-side\n- LSB steganography for vote hiding\n- Secure, anonymous, robust TCP/IP communication`,
    icon: '🗳️',
    tech: ['Python', 'RSA', 'LSB', 'TCP/IP']
  },
  {
    year: '2023',
    title: 'Expense Tracker API',
    location: 'Personal Project',
    description: `RESTful API for daily expenses:\n- Modular routing & middleware\n- Real-world error handling`,
    icon: '💸',
    tech: ['Node.js', 'Express.js', 'MongoDB']
  },
  {
    year: '2023',
    title: 'Revamping Our College Website',
    location: 'College Project',
    description: `Developed a fully flexible, user-friendly college website with:\n- Student grade storage & graphical analysis\n- Secure backend with user sign-in\n- Personal details & exam schedule with date sorting`,
    icon: '🌐',
    tech: ['HTML', 'JS', 'CSS', 'MySQL']
  }
];

const TimelineItem = ({ data, index, isLast }) => {
  const isLeft = index % 2 === 0;
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  return (
    <div className="grid grid-cols-9 gap-0 w-full min-h-[180px]">
      {/* Left card */}
      <div className={`col-span-4 flex justify-end items-center ${isLeft ? '' : 'invisible md:visible'}`}>
        {isLeft && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px #E1060033' }}
            className="glass-card p-6 relative transition-all duration-300 cursor-pointer hover:shadow-2xl w-full max-w-xl text-right"
          >
            <div className="absolute -top-6 right-8 w-10 h-10 glass-card rounded-full flex items-center justify-center text-2xl border-2 border-f1-red bg-f1-black z-20">
              {data.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-f1-red">{data.title}</h3>
            <p className="text-f1-gold mb-2 font-semibold">{data.location}</p>
            <p className="text-f1-white/80 mb-2 whitespace-pre-line">{data.description}</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-end">
              {data.tech && data.tech.map((tech) => (
                <span key={tech} className="text-xs bg-f1-red/80 text-f1-white px-2 py-1 rounded-md font-semibold shadow">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      {/* Center timeline */}
      <div className="col-span-1 flex flex-col items-center relative">
        {/* Vertical line (full height) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-f1-red/50 z-0" />
        {/* Year above dot */}
        <span className="text-2xl font-bold text-f1-red select-none mb-2 mt-2 bg-f1-black px-2 rounded-md z-10">{data.year}</span>
        {/* Dot */}
        <div className="w-7 h-7 bg-f1-black border-2 border-f1-red rounded-full z-20 flex items-center justify-center mb-2">
          <div className="w-3 h-3 bg-f1-red rounded-full" />
        </div>
        {/* Line below dot (not for last item) */}
        {!isLast && <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-1 bg-f1-red/50 z-0" style={{height: '50%'}} />}
      </div>
      {/* Right card */}
      <div className={`col-span-4 flex justify-start items-center ${!isLeft ? '' : 'invisible md:visible'}`}>
        {!isLeft && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px #E1060033' }}
            className="glass-card p-6 relative transition-all duration-300 cursor-pointer hover:shadow-2xl w-full max-w-xl text-left"
          >
            <div className="absolute -top-6 left-8 w-10 h-10 glass-card rounded-full flex items-center justify-center text-2xl border-2 border-f1-red bg-f1-black z-20">
              {data.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-f1-red">{data.title}</h3>
            <p className="text-f1-gold mb-2 font-semibold">{data.location}</p>
            <p className="text-f1-white/80 mb-2 whitespace-pre-line">{data.description}</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-start">
              {data.tech && data.tech.map((tech) => (
                <span key={tech} className="text-xs bg-f1-red/80 text-f1-white px-2 py-1 rounded-md font-semibold shadow">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-f1-white/80 max-w-2xl mx-auto">
            A timeline of my educational and professional journey in technology and software development.
          </p>
        </motion.div>
        <div className="relative w-full">
          <div className="flex flex-col gap-24 w-full">
            {timelineData.map((data, index) => (
              <TimelineItem key={data.title + data.year} data={data} index={index} isLast={index === timelineData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 