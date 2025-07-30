import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-primary/98 backdrop-blur-md shadow-xl border-b border-secondary/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className={`text-2xl font-bold transition-colors duration-500 ${
              isScrolled ? 'text-primary' : 'text-white'
            } font-sans tracking-tight`}>
              PUSHPAGIRI
              <span className={`ml-1 transition-colors duration-500 ${
                isScrolled ? 'text-secondary' : 'text-secondary'
              }`}>INFRA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-500 font-medium tracking-wide ${
                  isScrolled 
                    ? 'text-primary hover:text-secondary' 
                    : 'text-white hover:text-secondary'
                } hover:scale-105`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-gold ml-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-secondary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full btn-gold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;