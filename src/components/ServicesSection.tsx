import { Building2, Mountain, Factory, Route, Truck, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
const ServicesSection = () => {
  const services = [{
    icon: Building2,
    title: 'Industrial Buildings (PEB)',
    description: 'Cost-effective and long-lasting pre-engineered buildings customized to meet wide range of structural and aesthetic design requirements.',
    features: ['Factories', 'Warehouses', 'Manufacturing Units', 'Storage Facilities']
  }, {
    icon: Mountain,
    title: 'Mass Earth Work',
    description: 'Strong foundation services including soil removal, cutting, filling, grading, backfilling, and complete site development solutions.',
    features: ['Site Preparation', 'Land Grading', 'Excavation', 'Soil Management']
  }, {
    icon: Route,
    title: 'Infrastructure Development',
    description: 'Engineering vital connections through roads, external development, and layout development works that foster economic growth.',
    features: ['Road Construction', 'Layout Development', 'External Infrastructure', 'Connectivity Solutions']
  }, {
    icon: Settings,
    title: 'TAR Plant Operations',
    description: 'Manufacturing high-quality asphalt solutions from our advanced plant, ensuring reliable and durable foundations for infrastructure.',
    features: ['Asphalt Production', 'Quality Control', 'Material Supply', 'Technical Support']
  }, {
    icon: Factory,
    title: 'Commercial Construction',
    description: 'Constructing engines of commerce from sprawling facilities to adaptable structures, enabling innovation and productivity.',
    features: ['Office Buildings', 'Commercial Complexes', 'Industrial Facilities', 'Mixed-Use Projects']
  }, {
    icon: Truck,
    title: 'Project Management',
    description: 'Comprehensive project management with consultative and systematic approach, ensuring timely delivery and quality execution.',
    features: ['Planning & Design', 'Execution Management', 'Quality Assurance', 'Timeline Adherence']
  }];
  return <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-secondary mb-6">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            From infrastructure projects to industrial buildings, we provide comprehensive 
            engineering solutions that define the landscape across Karnataka and South India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={service.title} style={{
          animationDelay: `${index * 0.1}s`
        }} className="card-premium group cursor-pointer fade-in bg-[#2f2f2f]/35">
              <div className="mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 text-slate-50">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>)}
              </div>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can bring your infrastructure vision to life.
            </p>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="btn-gold text-lg px-8 py-4">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;