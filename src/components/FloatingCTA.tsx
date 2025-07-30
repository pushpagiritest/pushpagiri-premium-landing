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
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <button
        onClick={handleCall}
        className="floating-cta animate-pulse-glow shadow-2xl"
        aria-label="Call Pushpagiri Infra"
      >
        <Phone className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Call Now</span>
        <span className="sm:hidden">Call</span>
      </button>
    </div>
  );
};

export default FloatingCTA;