import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/logo.png'; // adjust path if needed
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-xl">M</span> */}
              <img src={Logo} alt="Malligai Logo" className="h-8 w-8" />

            </div>
              <div>
                <h3 className="font-bold text-lg leading-none">
                  Senthil Malligai
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Wholesale & Retails
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted neighborhood grocery store in Mannachanallur, providing fresh and quality products for over a decade.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product Categories</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Rice & Grains</li>
              <li>Pulses & Lentils</li>
              <li>Spices & Masalas</li>
              <li>Cooking Oils</li>
              <li>Packaged Foods</li>
              <li>Tea & Coffee</li>
              <li>Snacks & Biscuits</li>
              <li>Canned Foods</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Visit Our Store</p>
                  <p className="text-primary-foreground/80">
                    75-1, LF Rd<br /> Mannachanallur<br />
                    Tamil Nadu 621216
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-primary-foreground/80">+91 98765 43210</p>
                </div>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-primary-foreground/80">info@malligai.com</p>
                </div>
              </div> */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Store Hours</p>
                  <p className="text-primary-foreground/80">
                    Open: Mon-Sat 7:00 AM - 9:00 PM <br/> Sun 7:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>© 1985 Malligai Wholesale and Retails. All rights reserved.</p>
            <p>Proudly serving Mannachanallur community since 1985</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;