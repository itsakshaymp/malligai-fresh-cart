import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MapPin } from 'lucide-react';
import Logo from '@/assets/logo.png'; // adjust path if needed


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
      {/* Top bar with contact info */}
      <div className="border-b bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
  <MapPin className="w-4 h-4" />
  <a
    href="https://share.google/TmippgOmv6ayxCVpE"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-primary-foreground"
  >
    Mannachanallur, Tamil Nadu
  </a>
</div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+919443160613</span>
              </div>
            </div>
            <div className="text-sm">
              Open: Mon-Sat 7:00 AM - 9:00 PM | Sun 7:00 AM - 2:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-xl">M</span> */}
              <img src={Logo} alt="Malligai Logo" className="h-8 w-8" />

            </div>
            <div>
              <h1 className="font-bold text-lg text-primary leading-none">
                Senthil Malligai
              </h1>
              <p className="text-xs text-muted-foreground">
                Wholesale & Retails
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+919443160613">
  <Button className="hero-gradient hover:opacity-90 transition-smooth">
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </Button>
</a>

          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium py-2 px-3 rounded-md transition-smooth ${
                        isActive(item.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  


<a href="tel:+919443160613">
  <Button className="hero-gradient hover:opacity-90 transition-smooth mt-4">
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </Button>
</a>



                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;