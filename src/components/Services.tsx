import { Heart, Brain } from "lucide-react";
import pswImage from "@/assets/psw-services.jpg";
import otImage from "@/assets/occupational-therapy.jpg";

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
    "Post-surgical Care Services",
    "Encouraging Hobbies & Activities",
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



  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 relative bg-card/30">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Explore Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Specialized In-Home Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team provides individualized, compassionate care solutions that 
            honour the unique needs of every client.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PSW Services Card */}
          <div className="animate-on-scroll-left card-glass rounded-3xl overflow-hidden hover-lift group">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={pswImage} 
                alt="Personal Support Worker assisting with mobility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">PSW Services</h3>
                  <p className="text-muted-foreground text-sm">Personal Support Worker</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {pswServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>

              <button 
                onClick={scrollToContact}
                className="text-primary font-medium text-sm hover:underline"
              >
                Book this service →
              </button>
            </div>
          </div>

          {/* Occupational Therapy Card */}
          <div className="animate-on-scroll-right card-glass rounded-3xl overflow-hidden hover-lift group">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={otImage} 
                alt="Occupational therapist working with patient" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Occupational Therapy</h3>
                  <p className="text-muted-foreground text-sm">Rehabilitation & Assessment</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2 mb-6">
                {otServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>

              <button 
                onClick={scrollToContact}
                className="text-primary font-medium text-sm hover:underline"
              >
                Book this service →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
