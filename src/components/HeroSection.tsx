import { ArrowRight, Award, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Building, number: '1000+', label: 'Projects Completed' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Award, number: '30+', label: 'Years Experience' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="heading-primary mb-6 text-white">
            Building Tomorrow's
            <span className="block text-secondary">Infrastructure Today</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 font-light leading-relaxed">
            With over three decades of excellence, Pushpagiri Engineers Infra Pvt. Ltd. delivers sustainable, 
            creative & efficient engineering solutions across Karnataka and South India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="btn-gold text-lg px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={scrollToAbout}
              className="btn-outline-premium text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="animate-fade-in-up bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
              <div className="stat-number text-white">{stat.number}</div>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;