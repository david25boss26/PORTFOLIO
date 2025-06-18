import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/david-sharma-75a778286/',
    icon: <FaLinkedin className="text-2xl text-f1-white" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/david25boss26',
    icon: <FaGithub className="text-2xl text-f1-white" />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/davidsharma_04/',
    icon: <FaInstagram className="text-2xl text-f1-white" />,
  },
];

const Contact = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);
  const [showFloating, setShowFloating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

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

  // Floating card only when Contact is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowFloating(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      await emailjs.send(
        'service_9zb9es8',
        'template_8levclt',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'David Sharma',
          reply_to: formData.email,
        },
        'T0GS073AWaWEmYI0n'
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section className="py-20 relative" id="contact-section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-f1-white/80 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={leftRef} className="glass-card p-8 opacity-0 translate-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-f1-black/40 border border-f1-white/10 rounded-md focus:outline-none focus:border-f1-red"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-f1-black/40 border border-f1-white/10 rounded-md focus:outline-none focus:border-f1-red"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-f1-black/40 border border-f1-white/10 rounded-md focus:outline-none focus:border-f1-red"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-f1-black/40 border border-f1-white/10 rounded-md focus:outline-none focus:border-f1-red"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="btn-primary glass-card w-full py-3"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p className={`text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          <div ref={rightRef} className="space-y-8 opacity-0 translate-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-f1-white/60">Email</p>
                    <p className="font-medium">sharmadavid2004@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-f1-white/60">Phone</p>
                    <p className="font-medium">9540491777</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <p className="text-sm text-f1-white/60">Address</p>
                    <p className="font-medium">C 450 BLOCK C SECTOR P3 GREATER NOIDA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-6 justify-center">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-f1-black/40 hover:bg-f1-red transition-colors duration-300 shadow-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Card: only show when Contact is in view */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showFloating ? 1 : 0, y: showFloating ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 glass-card p-4 hidden md:block pointer-events-none"
        style={{ zIndex: 60 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 glass-card flex items-center justify-center">
            <span className="text-2xl">💬</span>
          </div>
          <div>
            <p className="text-sm text-f1-white/60">Let's Talk</p>
            <a href="mailto:sharmadavid2004@gmail.com" className="font-medium underline hover:text-f1-red transition-colors duration-300 pointer-events-auto">sharmadavid2004@gmail.com</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 