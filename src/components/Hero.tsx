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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Content Grid - Apple style split layout */}
      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Home Healthcare Services
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 animate-fade-up-delay-1 leading-tight">
              HandsOn
              <br />
              <span className="text-primary">Support Services</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-md mb-8 animate-fade-up-delay-2 leading-relaxed">
              Whether you require short-term assistance or ongoing support, we are 
              committed to delivering excellence in every home we serve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => scrollToSection("services")}
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Compassionate caregiver with patient" 
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
