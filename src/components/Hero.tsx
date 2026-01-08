import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-caregiver.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Softer Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Compassionate caregiver with patient" 
          className="w-full h-full object-cover"
        />
        {/* Light overlay - reduced for more prominent background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
      
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-glow opacity-60" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-sm text-primary font-medium mb-8 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Home Healthcare Services
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up-delay-1" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3)' }}>
            <span className="text-foreground">HandsOn</span>
            <br />
            <span className="text-gradient-accent">Support Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground font-medium max-w-xl mb-10 animate-fade-up-delay-2 leading-relaxed" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.4), 0 0 12px rgba(255,255,255,0.2)' }}>
            Whether you require short-term assistance or ongoing support, we are 
            committed to delivering excellence in every home we serve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="group shadow-xl"
              onClick={() => scrollToSection("services")}
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              className="shadow-xl bg-background/70 backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
