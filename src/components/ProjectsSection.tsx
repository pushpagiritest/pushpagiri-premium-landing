import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const ProjectsSection = () => {
  const featuredProjects = [{
    title: 'Chanakya University',
    location: 'Bengaluru, Karnataka',
    type: 'Educational Infrastructure',
    status: 'Completed',
    description: 'Comprehensive infrastructure development for one of India\'s premier educational institutions.',
    year: '2023'
  }, {
    title: 'World Technology Center',
    location: 'Marathalli Ring Road, Bengaluru',
    type: 'Commercial Complex',
    status: 'Ongoing',
    description: 'State-of-the-art technology center with modern infrastructure and sustainable design.',
    year: '2024'
  }, {
    title: 'Manipal Academy of Higher Education',
    location: 'Karnataka',
    type: 'Educational Campus',
    status: 'Completed',
    description: 'Large-scale campus development with multiple buildings and infrastructure facilities.',
    year: '2023'
  }, {
    title: 'Assetz Premium Holdings',
    location: 'Bengaluru, Karnataka',
    type: 'Residential Development',
    status: 'Completed',
    description: 'Premium residential infrastructure with modern amenities and sustainable features.',
    year: '2022'
  }, {
    title: 'Meadows Song Begur',
    location: 'Begur, Bengaluru',
    type: 'Residential Layout',
    status: 'Completed',
    description: 'Complete layout development with roads, utilities, and landscape infrastructure.',
    year: '2023'
  }, {
    title: 'India Build Realty - Primal Group',
    location: 'Karnataka',
    type: 'Mixed Development',
    status: 'Ongoing',
    description: 'Comprehensive infrastructure for mixed-use development project.',
    year: '2024'
  }];
  const stats = [{
    number: '1000+',
    label: 'Projects Completed',
    subtitle: 'Across Karnataka & South India'
  }, {
    number: '30+',
    label: 'Years Experience',
    subtitle: 'In Infrastructure Development'
  }, {
    number: '400+',
    label: 'Team Members',
    subtitle: 'Skilled Professionals'
  }, {
    number: '100%',
    label: 'Client Satisfaction',
    subtitle: 'Proven Track Record'
  }];
  return <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-secondary mb-6">
            Our <span className="text-secondary">Portfolio</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            We have executed many landmark projects that have defined the landscape of infrastructure 
            development across Karnataka, creating new opportunities and milestones.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <div key={stat.label} className="text-center fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="stat-number mb-2">{stat.number}</div>
                <h4 className="font-semibold mb-1 text-slate-50">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </div>
            </div>)}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light text-center mb-12 text-primary fade-in">
            Featured <span className="text-secondary">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => <Card key={project.title} className="card-premium group cursor-pointer fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className={project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                    {project.status}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 text-amber-300">
                  {project.title}
                </h4>
                
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-secondary" />
                  {project.location}
                </div>
                
                <Badge variant="outline" className="mb-4 text-xs">
                  {project.type}
                </Badge>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center text-secondary group-hover:text-primary transition-colors duration-300">
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </Card>)}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Why Choose <span className="text-secondary">Pushpagiri Infra?</span>
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our legacy of innovation in engineering and construction continues to add new milestones 
              with every passing year, creating opportunities for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">30+</div>
              <h4 className="text-lg font-semibold mb-2">Years of Excellence</h4>
              <p className="text-white/80">Three decades of proven expertise in infrastructure development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
              <h4 className="text-lg font-semibold mb-2">Successful Projects</h4>
              <p className="text-white/80">Landmark projects across Karnataka and South India</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">400+</div>
              <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
              <p className="text-white/80">Qualified, dedicated professionals working together</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;