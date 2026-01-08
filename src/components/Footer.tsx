import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-xl font-semibold text-foreground tracking-tight">
                HandsOn<span className="text-primary">Support</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Compassionate, reliable care you can trust. Our services are dedicated 
              to supporting individuals with dignity, respect, and personalized attention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors link-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@handsonsupportservices.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@handsonsupportservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:4378550488"
                  className="hover:text-foreground transition-colors"
                >
                  (437) 855-0488
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} HandsOn Support Services. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> for better care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
