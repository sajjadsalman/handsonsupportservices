import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-caregiver.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Compassionate caregiver with patient" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-glow opacity-60" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Home Healthcare Services
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 animate-fade-up-delay-1">
            <span className="text-gradient">HandsOn</span>
            <br />
            <span className="text-gradient-gold">Support Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 animate-fade-up-delay-2 leading-relaxed">
            Whether you require short-term assistance or ongoing support, we are 
            committed to delivering excellence in every home we serve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
