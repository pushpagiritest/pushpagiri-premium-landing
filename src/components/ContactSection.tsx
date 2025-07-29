import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: 'Call Us',
    details: ['+91 80 2839 4747', '+91 98860 12345'],
    action: 'tel:+918028394747'
  }, {
    icon: Mail,
    title: 'Email Us',
    details: ['info@pushpagiriinfra.in', 'projects@pushpagiriinfra.in'],
    action: 'mailto:info@pushpagiriinfra.in'
  }, {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Nagarbhavi, Bengaluru', 'Karnataka, India'],
    action: 'https://maps.google.com'
  }, {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: By Appointment'],
    action: null
  }];
  return <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-secondary mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            Ready to start your next infrastructure project? Let's discuss how we can 
            bring your vision to life with our three decades of engineering excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in">
            <Card className="card-premium">
              <h3 className="text-2xl font-semibold mb-6 text-slate-50">
                Request a Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="w-full" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select id="project" name="project" value={formData.project} onChange={handleChange} className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select project type</option>
                    <option value="industrial">Industrial Buildings (PEB)</option>
                    <option value="earthwork">Mass Earth Work</option>
                    <option value="infrastructure">Infrastructure Development</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Layout</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full" placeholder="Tell us about your project requirements, timeline, and any specific needs..." />
                </div>
                
                <Button type="submit" className="w-full btn-gold text-lg py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            {contactInfo.map((info, index) => <Card key={info.title} className="card-premium group cursor-pointer" style={{
            animationDelay: `${index * 0.1}s`
          }} onClick={() => info.action && window.open(info.action, '_blank')}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 text-slate-50">{info.title}</h4>
                    {info.details.map((detail, idx) => <p key={idx} className="text-muted-foreground mb-1">
                        {detail}
                      </p>)}
                  </div>
                </div>
              </Card>)}

            {/* Emergency Contact */}
            <Card className="card-premium bg-secondary/5 border-secondary/20">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2 text-slate-50">
                  Need Immediate Assistance?
                </h4>
                <p className="text-muted-foreground mb-4">
                  For urgent project inquiries or emergencies
                </p>
                <Button onClick={() => window.open('tel:+918028394747', '_self')} className="btn-premium">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91 80 2839 4747
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-16 fade-in">
          <Card className="card-premium p-0 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/90 p-8 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
              <p className="text-white/90">Visit our office in Nagarbhavi, Bengaluru</p>
            </div>
            <div className="p-8 text-center">
              <div className="bg-muted/50 rounded-lg p-12">
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-slate-50">
                  Pushpagiri Engineers Infra Pvt. Ltd.
                </h4>
                <p className="text-muted-foreground">
                  Nagarbhavi, Bengaluru<br />
                  Karnataka, India
                </p>
                <Button onClick={() => window.open('https://maps.google.com', '_blank')} className="mt-4 btn-outline-premium">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;