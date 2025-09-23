import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Shield, Clock, Truck } from 'lucide-react';
import heroImage from '@/assets/hero-grocery.jpg';
import riceImage from '@/assets/rice-product.jpg';
import spicesImage from '@/assets/spices-product.jpg';
import pulsesImage from '@/assets/pulses-product.jpg';
import oilsImage from '@/assets/oils-product.jpg';

const Home = () => {
  const featuredProducts = [
    {
      name: 'Premium Basmati Rice',
      image: riceImage,
      description: 'Finest quality basmati rice from the foothills of Himalayas',
      category: 'Rice & Grains'
    },
    {
      name: 'Authentic Spice Collection',
      image: spicesImage,
      description: 'Freshly ground spices and masalas for authentic flavors',
      category: 'Spices & Masalas'
    },
    {
      name: 'Premium Pulses & Dal',
      image: pulsesImage,
      description: 'High-quality pulses and lentils for nutritious meals',
      category: 'Pulses & Lentils'
    },
    {
      name: 'Pure Cooking Oils',
      image: oilsImage,
      description: 'Cold-pressed and refined oils for healthy cooking',
      category: 'Cooking Oils'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'We ensure the highest quality standards for all our products'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Fresh stock arrives daily to maintain product freshness'
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Convenient home delivery service within Mannachanallur'
    },
    {
      icon: Star,
      title: 'Trusted Since 1985',
      description: 'Over a decade of serving the Mannachanallur community'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-accent">Senthil Malligai</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
            Wholesale & Retails
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted neighborhood grocery store in Mannachanallur, Tamil Nadu. 
            Providing fresh, quality groceries and daily essentials since 1985.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/products">
                Shop Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30">
              <Link to="/contact">
                Visit Store
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Malligai?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to providing the best grocery shopping experience with quality products and excellent service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most popular and high-quality products that our customers love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover-lift border-0 shadow-card overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-accent font-medium mb-2">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/products">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="hero-gradient">
              <Link to="/products">
                View All Products <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Serving Mannachanallur Since 1985
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Malligai Wholesale and Retails has been the trusted neighborhood grocery store 
                for families in Mannachanallur for over a decade. We pride ourselves on offering 
                fresh, high-quality products at competitive prices.
              </p>
              <p className="text-muted-foreground mb-8">
                From premium rice and authentic spices to daily essentials and packaged foods, 
                we carefully source our products to ensure you get the best value for your family.
              </p>
              <Button asChild className="hero-gradient">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="card-gradient p-8 rounded-2xl shadow-card">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Quality Promise</h3>
                    <p className="text-sm text-muted-foreground">100% quality guarantee on all products</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Fresh Stock</h3>
                    <p className="text-sm text-muted-foreground">Daily fresh arrivals and proper storage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Community Trusted</h3>
                    <p className="text-sm text-muted-foreground">Trusted by thousands of families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Shop with Us?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Visit our store in Mannachanallur or call us for home delivery. 
            Experience the difference of shopping with a trusted local grocery store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">
                Visit Our Store
              </Link>
            </Button>
            {/* <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/offers">
                View Special Offers
              </Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;