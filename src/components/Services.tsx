import { Button } from "@/components/ui/button";
import pswImage from "@/assets/psw-services.jpg";
import otImage from "@/assets/occupational-therapy.jpg";
import advancedImage from "@/assets/advanced-service.jpg";
import advancedPlusImage from "@/assets/advanced-plus-service.jpg";

const Services = () => {
  const services = [
    {
      title: "PSW Services",
      price: "$99.00",
      image: pswImage,
      alt: "Personal Support Worker assisting patient",
    },
    {
      title: "Occupational Therapy Services",
      price: "$149.00",
      image: otImage,
      alt: "Occupational therapist working with patient",
    },
    {
      title: "Advanced Service",
      price: "$199.00",
      image: advancedImage,
      alt: "Advanced healthcare service",
    },
    {
      title: "Advanced+ Service",
      price: "$249.00",
      image: advancedPlusImage,
      alt: "Premium advanced healthcare service",
    },
  ];

  const handleBooking = (serviceName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Dispatch custom event to pre-fill the form
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("prefillBooking", { 
          detail: { service: serviceName } 
        }));
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Explore our services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to dive into a world of delightful support? Our customer service team is here 
            to sprinkle some magic on your day, ensuring your experience is nothing short of fantastic!
          </p>
        </div>

        {/* Booking Info */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground bg-secondary/50 inline-block px-6 py-3 rounded-full border border-border/50">
            📩 Send us a message to book and our team will reach out to you directly
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-glass rounded-2xl overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-xl font-bold text-primary mb-4">
                  {service.price}
                </p>
                <Button 
                  variant="hero" 
                  size="default" 
                  className="w-full"
                  onClick={() => handleBooking(service.title)}
                >
                  Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
