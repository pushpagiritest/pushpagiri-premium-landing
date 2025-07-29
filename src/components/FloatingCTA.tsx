import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCall = () => {
    window.open('tel:+918028394747', '_self');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-float">
      <button
        onClick={handleCall}
        className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground px-3 py-2 sm:px-6 sm:py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl text-sm sm:text-base"
        aria-label="Call Pushpagiri Infra"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Call Now</span>
        <span className="sm:hidden">Call</span>
      </button>
    </div>
  );
};

export default FloatingCTA;