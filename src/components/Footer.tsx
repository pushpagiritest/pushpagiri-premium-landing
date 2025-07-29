import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Industrial Buildings (PEB)',
    'Mass Earth Work',
    'Infrastructure Development',
    'TAR Plant Operations',
    'Commercial Construction',
    'Project Management'
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">
                PUSHPAGIRI
                <span className="text-secondary ml-1">INFRA</span>
              </div>
              <p className="text-lg text-secondary font-medium mb-4">
                "Well Done is Better Than Well Said"
              </p>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              With over three decades of excellence, we are committed to providing sustainable, 
              creative & efficient engineering solutions for our communities across Karnataka and South India.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-3" />
                <span>+91 80 2839 4747</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-3" />
                <span>info@pushpagiriinfra.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-secondary mr-3" />
                <span>Nagarbhavi, Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">30+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">400+</div>
              <p className="text-white/80">Team Members</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Pushpagiri Engineers Infra Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-white/60 text-sm">
                BM Ravishankar, Managing Director
              </span>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 rounded-full w-10 h-10 p-0"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;