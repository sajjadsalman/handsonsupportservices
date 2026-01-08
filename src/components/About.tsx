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
    <section id="about" className="py-20 relative overflow-hidden bg-card/50">
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content - Overlapping Cards Style */}
        <div className="max-w-6xl mx-auto">
          {/* Header Card */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Get to Know Us
            </h2>
          </div>

          {/* Feature Row 1 */}
          <div className="grid lg:grid-cols-5 gap-8 mb-8">
            {/* Large Image Card */}
            <div className="lg:col-span-3 animate-on-scroll-left">
              <div className="relative h-80 lg:h-full rounded-3xl overflow-hidden group">
                <img 
                  src={teamImage} 
                  alt="Our healthcare team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    Compassionate, reliable care you can trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Card */}
            <div className="lg:col-span-2 animate-on-scroll-right">
              <div className="card-glass rounded-3xl p-8 h-full flex flex-col justify-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We strive to create a home environment filled with safety, comfort, and support.
                </p>
                <p className="text-foreground leading-relaxed">
                  Through our skilled PSW services, we assist with daily activities while empowering 
                  individuals to regain confidence and independence.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Row 2 */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Quote Card */}
            <div className="lg:col-span-2 animate-on-scroll-left">
              <div className="bg-primary rounded-3xl p-8 h-full flex flex-col justify-center text-primary-foreground">
                <p className="text-xl font-medium leading-relaxed mb-4">
                  "Care that feels natural, comfortable, and truly meaningful."
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Our client-centered approach
                </p>
              </div>
            </div>

            {/* Description Card */}
            <div className="lg:col-span-3 animate-on-scroll-right">
              <div className="card-glass rounded-3xl p-8 h-full">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We take a client-centered approach, working closely with clients and families to 
                  understand their unique needs, routines, preferences, and goals. Our PSW services 
                  are dedicated to supporting individuals with dignity, respect, and personalized attention.
                </p>
              </div>
            </div>
          </div>

          {/* Values Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`animate-on-scroll animate-stagger-${index + 1}`}
              >
                <div className="card-glass rounded-2xl p-6 h-full hover-lift hover-glow group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
