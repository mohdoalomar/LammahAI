import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ sectionRefs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'عن لمة', ref: sectionRefs.AboutRef },
    { id: 'problem', label: 'المشكلة والحل', ref: sectionRefs.problemRef },
    { id: 'services', label: 'خدماتنا', ref: sectionRefs.serviceRef },
    { id: 'operations', label: 'عملية التشغيل', ref: sectionRefs.operationRef },
    { id: 'subscriptions', label: 'الاشتراكات', ref: sectionRefs.SubscriptionsRef },
    { id: 'statistics', label: 'إحصائيات', ref: sectionRefs.statisticsRef },
    { id: 'chat', label: 'تواصل معنا', ref: sectionRefs.chatRef },
    { id: 'contact', label: 'نموذج التواصل', ref: sectionRefs.formRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.filter(item => item.ref?.current);
      
      const currentSection = sections.find(section => {
        const rect = section.ref.current.getBoundingClientRect();
        // Adjusted to check middle of viewport
        const windowHeight = window.innerHeight;
        const middleOfViewport = windowHeight / 2;
        return rect.top <= middleOfViewport && rect.bottom >= middleOfViewport;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = ref.current.getBoundingClientRect().height;
      const offset = (windowHeight - elementHeight) / 2;
      
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition - 100, // Subtract header height to prevent overlap
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-LammmahBG/90 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img src="LammahNoCatchPhrase.png" alt="Lammah Logo" className="h-12" />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 flex-row-reverse">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`px-3 py-2 rounded-lg transition-colors duration-300 font-arian
                  ${index !== navItems.length - 1 ? 'ml-4' : ''} 
                  ${activeSection === item.id 
                    ? 'bg-LammahBrown text-LammahBiege' 
                    : 'text-LammahBrown hover:bg-LammahBrown/10 bg-LammmahBG'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-LammahBrown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-LammmahBG rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 p-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`px-4 py-2 rounded-lg text-right transition-colors duration-300 font-arian
                    ${activeSection === item.id 
                      ? 'bg-LammahBrown text-LammahBiege' 
                      : 'text-LammahBrown hover:bg-LammahBrown/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;