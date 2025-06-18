import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { FaLaptopCode, FaMobileAlt, FaServer, FaChartLine, FaLock, FaDatabase } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Modern, responsive web apps with React, Node.js, MySQL, and RESTful APIs.',
    icon: <FaLaptopCode className="text-3xl text-mercedes-teal" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps using React Native and Flutter, with real-time features.',
    icon: <FaMobileAlt className="text-3xl text-mercedes-teal" />,
  },
  {
    title: 'System & Process Automation',
    description: 'Custom automation scripts, system monitoring, and optimization tools in Python.',
    icon: <FaServer className="text-3xl text-mercedes-teal" />,
  },
  {
    title: 'Machine Learning & Data Analysis',
    description: 'Predictive analytics, data visualization, and ML model integration with Python.',
    icon: <FaChartLine className="text-3xl text-mercedes-teal" />,
  },
  {
    title: 'Security & Encryption Solutions',
    description: 'Secure data transmission, encryption tools, and custom authentication systems.',
    icon: <FaLock className="text-3xl text-mercedes-teal" />,
  },
  {
    title: 'Database Design & Management',
    description: 'Database schema design, optimization, and data migration with MySQL & MongoDB.',
    icon: <FaDatabase className="text-3xl text-mercedes-teal" />,
  },
];

const ServiceCard = React.forwardRef(({ service }, ref) => (
  <div ref={ref} className="glass-card p-8 opacity-0 translate-y-8 flex flex-col items-center text-center shadow-lg">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-mercedes-teal">{service.title}</h3>
    <p className="text-mercedes-silver text-base">{service.description}</p>
  </div>
));

const Services = () => {
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-mercedes-silver max-w-2xl mx-auto">
            Here's what I can do for you, based on my real-world experience and tech stack.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              service={service}
              ref={el => (cardRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 