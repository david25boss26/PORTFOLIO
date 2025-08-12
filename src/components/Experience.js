import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import anime from 'animejs';

const certificates = [
  {
    id: 'eventbeep',
    company: 'EventBeep',
    title: 'Campus Brand Influencer',
    duration: '19th February 2024 - 19th March 2024',
    description: 'Successfully completed internship tenure as a Campus Brand Influencer, demonstrating excellence in brand promotion and student engagement.',
    certificate: '/certificates/eventbeep-certificate.jpg',
    skills: ['Brand Promotion', 'Student Engagement', 'Marketing', 'Communication'],
    type: 'Certificate of Excellence'
  },
  {
    id: 'exato',
    company: 'Exato Technologies Pvt. Ltd.',
    title: 'AI/ML Intern',
    duration: '2nd June 2025 - 2nd August 2025',
    description: 'Worked as an intern at EXATO.AI, gaining hands-on experience in AI/ML technologies and contributing to innovative projects in artificial intelligence and machine learning domains. Made projects like Data Explorer and Real-Time interpreter under the supervision of Mr. Ritesh Ranjan, Technical & Development Lead.',
    certificate: '/certificates/exato-certificate.jpg',
    skills: ['AI/ML', 'Data Explorer', 'Real-Time Interpreter', 'Machine Learning', 'Artificial Intelligence'],
    type: 'Internship Completion Certificate'
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('certificates');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Reset refs array
    cardRefs.current = cardRefs.current.slice(0, certificates.length);
    
    // Animate cards
    anime({
      targets: cardRefs.current,
      opacity: [0, 1],
      translateY: [32, 0],
      delay: anime.stagger(120),
      duration: 900,
      easing: 'easeOutQuad',
    });
  }, [activeTab]);

  const tabs = [
    { id: 'certificates', label: 'Certificates', icon: '🏆' },
    { id: 'internships', label: 'Internships', icon: '💼' }
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleImageLoad = (certId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [certId]: 'loaded'
    }));
  };

  const handleImageError = (certId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [certId]: 'error'
    }));
  };

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container max-w-screen-xl w-full mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & Certificates</h2>
          <p className="text-mercedes-silver max-w-2xl mx-auto">
            My professional journey through internships and certifications that showcase my skills and dedication.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-mercedes-teal text-mercedes-black font-semibold shadow-lg'
                    : 'text-mercedes-silver hover:text-mercedes-white hover:bg-mercedes-dark-gray/30'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificates.map((cert, idx) => (
                                     <motion.div
                     key={cert.id}
                     ref={el => (cardRefs.current[idx] = el)}
                     className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                     onClick={() => handleCertificateClick(cert)}
                     whileHover={{ 
                       scale: 1.02, 
                       boxShadow: '0 8px 32px 0 #00A19B33, 0 2px 0 0 #ffffff33 inset' 
                     }}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: idx * 0.1 }}
                   >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-mercedes-teal mb-2">{cert.company}</h3>
                        <p className="text-mercedes-silver text-sm mb-1">{cert.type}</p>
                        <p className="text-mercedes-silver text-sm">{cert.duration}</p>
                      </div>
                      <div className="text-4xl">🏆</div>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-mercedes-white">{cert.title}</h4>
                    <p className="text-mercedes-silver mb-4 text-sm leading-relaxed">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs bg-mercedes-teal/20 text-mercedes-teal px-2 py-1 rounded-md border border-mercedes-teal/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                                         <div className="flex items-center justify-between">
                       <span className="text-xs text-mercedes-silver">Click to view certificate</span>
                       <div className="w-8 h-8 bg-mercedes-teal/20 rounded-full flex items-center justify-center">
                         <span className="text-mercedes-teal text-sm">👁️</span>
                       </div>
                     </div>
                     
                     {/* Certificate Preview */}
                     <div className="mt-4 w-full h-24 bg-mercedes-black/40 rounded-lg border border-mercedes-teal/30 overflow-hidden relative">
                       <img 
                         src={cert.certificate} 
                         alt={`${cert.company} Certificate Preview`}
                         className="w-full h-full object-cover"
                         onLoad={() => handleImageLoad(cert.id)}
                         onError={() => handleImageError(cert.id)}
                         style={{ 
                           display: imageLoadStates[cert.id] === 'error' ? 'none' : 'block' 
                         }}
                       />
                       <div 
                         className="absolute inset-0 flex items-center justify-center bg-mercedes-black/60"
                         style={{ 
                           display: imageLoadStates[cert.id] === 'error' ? 'flex' : 'none' 
                         }}
                       >
                         <span className="text-2xl">📄</span>
                       </div>
                     </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'internships' && (
              <div className="space-y-8">
                {certificates.map((internship, idx) => (
                                     <motion.div
                     key={internship.id}
                     ref={el => (cardRefs.current[idx] = el)}
                     className="glass-card p-8"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: idx * 0.1 }}
                   >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-mercedes-teal mb-2">{internship.company}</h3>
                            <p className="text-mercedes-silver text-sm">{internship.duration}</p>
                          </div>
                          <div className="text-4xl">💼</div>
                        </div>
                        
                        <h4 className="text-xl font-semibold mb-3 text-mercedes-white">{internship.title}</h4>
                        <p className="text-mercedes-silver mb-4 leading-relaxed">{internship.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="text-sm bg-mercedes-teal/20 text-mercedes-teal px-3 py-1 rounded-md border border-mercedes-teal/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                                             <div className="flex flex-col items-center justify-center">
                         <div className="w-32 h-32 bg-mercedes-teal/10 rounded-lg border-2 border-dashed border-mercedes-teal/30 flex items-center justify-center mb-4 relative overflow-hidden">
                           <img 
                             src={internship.certificate} 
                             alt={`${internship.company} Certificate Preview`}
                             className="w-full h-full object-cover rounded-lg"
                             onLoad={() => handleImageLoad(internship.id)}
                             onError={() => handleImageError(internship.id)}
                             style={{ 
                               display: imageLoadStates[internship.id] === 'error' ? 'none' : 'block' 
                             }}
                           />
                           <div 
                             className="absolute inset-0 flex items-center justify-center bg-mercedes-black/60"
                             style={{ 
                               display: imageLoadStates[internship.id] === 'error' ? 'flex' : 'none' 
                             }}
                           >
                             <span className="text-4xl">📄</span>
                           </div>
                         </div>
                         <button 
                           onClick={() => handleCertificateClick(internship)}
                           className="btn-primary glass-card btn-animated text-sm px-4 py-2"
                         >
                           View Certificate
                         </button>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-mercedes-teal mb-2">{selectedCertificate.company}</h3>
                  <p className="text-mercedes-silver">{selectedCertificate.type}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-mercedes-silver hover:text-mercedes-white text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-mercedes-white">{selectedCertificate.title}</h4>
                  <p className="text-mercedes-silver mb-4">{selectedCertificate.description}</p>
                  <p className="text-mercedes-silver text-sm mb-4"><strong>Duration:</strong> {selectedCertificate.duration}</p>
                  
                                     <div className="flex flex-wrap gap-2 mb-4">
                     {selectedCertificate.skills.map((skill) => (
                       <span 
                         key={skill} 
                         className="text-sm bg-mercedes-teal/20 text-mercedes-teal px-3 py-1 rounded-md border border-mercedes-teal/30"
                       >
                         {skill}
                       </span>
                     ))}
                   </div>
                                        <div className="flex gap-3">
                       <button 
                         className="btn-primary glass-card btn-animated text-sm px-4 py-2"
                         onClick={() => window.open(selectedCertificate.certificate, '_blank')}
                       >
                         📄 View Certificate
                       </button>
                       <button 
                         className="btn-secondary glass-card btn-animated text-sm px-4 py-2"
                         onClick={() => {
                           const link = document.createElement('a');
                           link.href = selectedCertificate.certificate;
                           link.download = `${selectedCertificate.company}-certificate.jpg`;
                           link.click();
                         }}
                       >
                         💾 Download
                       </button>
                     </div>
                     
                     <div className="mt-4 p-3 bg-mercedes-teal/10 border border-mercedes-teal/30 rounded-lg">
                       <p className="text-mercedes-silver text-sm">
                         <span className="text-mercedes-teal">💡 Tip:</span> Click "View Certificate" to open the full certificate in a new tab, or "Download" to save it to your device.
                       </p>
                     </div>
                </div>
                
                                 <div className="flex items-center justify-center">
                   <div className="w-full h-64 bg-mercedes-black/40 rounded-lg border-2 border-dashed border-mercedes-teal/30 flex items-center justify-center relative overflow-hidden">
                     <img 
                       src={selectedCertificate.certificate} 
                       alt={`${selectedCertificate.company} Certificate`}
                       className="w-full h-full object-contain rounded-lg shadow-lg"
                       onLoad={(e) => {
                         e.target.style.display = 'block';
                         e.target.nextSibling.style.display = 'none';
                       }}
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                       style={{ display: 'none' }}
                     />
                     <div className="text-center absolute inset-0 flex flex-col items-center justify-center bg-mercedes-black/40">
                       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mercedes-teal mb-4"></div>
                       <p className="text-mercedes-silver">Loading certificate...</p>
                       <p className="text-mercedes-silver text-sm">Please wait</p>
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience; 