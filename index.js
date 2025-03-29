import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, DollarSign, ExternalLink, Mail, Phone, Menu, X } from 'lucide-react';

const DivineMercyFestival = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Knights of Columbus</h1>
            <p className="text-sm md:text-base">Council #6568 | Saint Paul's Catholic Student Center</p>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['About', 'Schedule', 'Location', 'RSVP', 'Donate'].map(section => (
              <button 
                key={section} 
                onClick={() => scrollToSection(section.toLowerCase())}
                className={`${activeSection === section.toLowerCase() ? 'font-bold border-b-2 border-red-500' : ''} 
                hover:text-blue-200 transition-colors`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-blue-800 z-50">
            <div className="flex flex-col p-4">
              {['About', 'Schedule', 'Location', 'RSVP', 'Donate'].map(section => (
                <button 
                  key={section} 
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`${activeSection === section.toLowerCase() ? 'font-bold text-red-400' : ''} 
                  py-3 hover:text-blue-200 transition-colors border-b border-blue-700`}
                >
                  {section}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-4 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">DIVINE MERCY</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">FESTIVAL</h2>
          <p className="text-2xl md:text-3xl mb-8">Sunday, April 27th, 2025</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://forms.gle/YourRSVPFormLink" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
            >
              RSVP Now <ExternalLink className="ml-2" size={18} />
            </a>
            <a 
              href="https://donate.example.com/divine-mercy" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
            >
              Donate <DollarSign className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Location & Procession Route</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 md:h-96 w-full">
              {/* Google Maps iframe for static display */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.317752312847!2d-89.37988742355588!3d43.076921171123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806536350cbbec1%3A0x1c1d9c6b7bc9d0d6!2sJames%20Madison%20Park!5e0!3m2!1sen!2sus!4v1711745642456!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: '0' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivineMercyFestival;