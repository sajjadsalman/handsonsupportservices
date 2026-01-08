import { Heart, Handshake, UserCheck } from "lucide-react";
import teamImage from "@/assets/healthcare-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every interaction is guided by empathy and genuine care for our clients' well-being.",
    },
    {
      icon: Handshake,
      title: "Trust",
      description: "We build lasting relationships through reliability, transparency, and consistent excellence.",
    },
    {
      icon: UserCheck,
      title: "Personalized",
      description: "Care tailored to your unique needs, routines, preferences, and goals.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Get to Know Us
          </h2>
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Text Content */}
          <div className="space-y-6 animate-on-scroll-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We strive to create a home environment filled with safety, comfort, and support. 
              Through our skilled PSW services, we assist with daily activities while empowering 
              individuals to regain confidence and independence.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Compassionate, reliable care you can trust.</span> Our 
              PSW services are dedicated to supporting individuals with dignity, respect, and personalized attention.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We take a client-centered approach, working closely with clients and families to 
              understand their unique needs, routines, preferences, and goals. This ensures care that feels 
              natural, comfortable, and truly meaningful.
            </p>
          </div>

          {/* Team Image */}
          <div className="relative animate-on-scroll-right">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={teamImage} 
                alt="Our healthcare team" 
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-3xl border border-primary/20 -z-10" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="animate-on-scroll-scale group relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-glass rounded-2xl p-6 h-full text-center hover-lift">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
