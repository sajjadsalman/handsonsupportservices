import { Heart, Users, Brain, Home, Clock, Shield } from "lucide-react";

const Services = () => {
  const pswServices = [
    "Personal Care",
    "Daily Management",
    "Appointment Support",
    "In-home Respite Care",
    "Meal Preparation",
    "Mobility Support",
    "Travel Support",
    "Housekeeping",
    "Overnight Care",
    "Palliative Care",
    "Dementia Care",
    "Emotional Support",
    "Behaviour Support",
    "Cognitive Stimulation",
    "Post-surgical Care",
    "Veterans Support Program",
  ];

  const otServices = [
    "Functional Rehabilitation",
    "Attendant Care & Form 1",
    "Cognitive Assessment",
    "Functional Capacity Evaluation",
    "Concussion Assessment",
    "Pre-discharge Hospital Assessment",
    "Home Modifications",
    "MVA Support Services",
  ];

  return (
    <section id="services" className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gradient mb-6">
            Specialized In-Home Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team provides individualized, compassionate care solutions that 
            honour the unique needs of every client.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PSW Services Card */}
          <div className="card-glass rounded-3xl p-8 md:p-10 hover-lift group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">PSW Services</h3>
                <p className="text-muted-foreground text-sm">Personal Support Worker</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {pswServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Occupational Therapy Card */}
          <div className="card-glass rounded-3xl p-8 md:p-10 hover-lift group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Occupational Therapy</h3>
                <p className="text-muted-foreground text-sm">Rehabilitation & Assessment</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {otServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Home, title: "In-Home Care", desc: "Comfortable care in your own home" },
            { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance available" },
            { icon: Shield, title: "Certified Team", desc: "Fully trained and vetted professionals" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-medium text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
