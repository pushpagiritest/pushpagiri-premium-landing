import { Award, Target, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
const AboutSection = () => {
  const values = [{
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in every project with three decades of proven expertise.'
  }, {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail in planning, execution, and delivery of infrastructure solutions.'
  }, {
    icon: Users,
    title: 'Partnership',
    description: 'Building lasting relationships with clients through consultative and systematic approach.'
  }, {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously adopting new technologies and concepts for safer, faster, and better construction.'
  }];
  return <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-secondary mb-6">
            About <span className="text-secondary">Pushpagiri Infra</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            "Well Done is Better Than Well Said" - Our philosophy drives us to deliver excellence 
            through action, not just words. We are benchmark leaders in India's infrastructure industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-light mb-6 text-slate-50 md:text-3xl">
                Three Decades of <span className="text-secondary">Engineering Excellence</span>
              </h3>
              <div className="space-y-6 text-premium">
                <p>
                  <strong>Pushpagiri Engineers Infra Pvt. Ltd.</strong> is a premier infrastructure development 
                  firm based in Nagarbhavi, Bengaluru, with an established footprint across major localities 
                  of Bengaluru and Karnataka.
                </p>
                <p>
                  With deep belief in our axiom <em>"Committed to Excellence"</em>, PEIPL thrives on technical 
                  capacities accumulated over several years and strong willpower to provide exceptional value 
                  to customers.
                </p>
                
              </div>
            </div>

            {/* Managing Director Quote */}
            <div className="bg-primary/5 border-l-4 border-secondary p-6 rounded-r-lg">
              <p className="text-lg italic mb-4 text-slate-200">
                "Building and maintaining healthy relations with our customers is the heart of our business. 
                We have a planning and management style that is consultative and systematic."
              </p>
              <p className="font-semibold text-slate-100">
                - BM Ravishankar, Managing Director
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 fade-in">
            {values.map((value, index) => <Card key={value.title} style={{
            animationDelay: `${index * 0.1}s`
          }} className="card-premium text-center group bg-[#2f2f2f]/35">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-slate-50">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;