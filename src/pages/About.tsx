import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Award, Target, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above everything else'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Only the finest products make it to our shelves through rigorous quality checks'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We are deeply rooted in the Mannachanallur community and proud to serve our neighbors'
    },
    {
      icon: Target,
      title: 'Fair Pricing',
      description: 'Competitive wholesale and retail prices that offer great value to our customers'
    }
  ];

  const milestones = [
    {
      year: '1985',
      title: 'Foundation',
      description: 'Started as a small grocery shop in the heart of Mannachanallur'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded our product range and introduced wholesale services'
    },
    {
      year: '2018',
      title: 'Home Delivery',
      description: 'Launched home delivery service to better serve our customers'
    },
    {
      year: '2024',
      title: 'Digital Presence',
      description: 'Embracing technology while maintaining our personal touch'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Story
          </h1>
          <p className="text-primary-foreground/90 text-xl max-w-3xl mx-auto">
            Over a decade of serving the Mannachanallur community with quality groceries, 
            genuine care, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                A Family Business Built on Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Senthil Malligai Wholesale and Retails began as a dream in 1985 when we
                recognized the need for a reliable, quality-focused grocery store in 
                Mannachanallur. What started as a small neighborhood shop has grown into 
                a trusted institution serving hundreds of families.
              </p>
              {/* <p className="text-muted-foreground text-lg mb-6">
                Our name "Malligai" represents the jasmine flower - a symbol of purity, 
                freshness, and cultural heritage in Tamil tradition. Just like the jasmine, 
                we strive to bring freshness and purity to every product we offer.
              </p> */}
              <p className="text-muted-foreground text-lg">
                Today, we continue to uphold the values that founded this business: 
                quality products, honest pricing, and genuine care for our community.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-muted/30 p-6 rounded-lg">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary">Location</h3>
                  <p className="text-muted-foreground">Main Street, Mannachanallur, Tamil Nadu 621216</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-muted/30 p-6 rounded-lg">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary">Established</h3>
                  <p className="text-muted-foreground">Established in 1985 – Proudly serving our community for over 40 years.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-muted/30 p-6 rounded-lg">
                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary">Customers</h3>
                  <p className="text-muted-foreground">Proudly serving 500+ families in Mannachanallur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in our growth and commitment to serving the community better.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 hero-gradient rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 card-gradient p-6 rounded-lg shadow-card">
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The dedicated people behind Malligai who ensure you get the best service and products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Store Management
                </h3>
                <p className="text-muted-foreground text-sm">
                  Experienced professionals ensuring smooth operations and customer satisfaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Customer Service
                </h3>
                <p className="text-muted-foreground text-sm">
                  Friendly staff dedicated to helping you find exactly what you need.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground text-sm">
                  Specialists who ensure every product meets our high-quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Part of the Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            We're not just a business; we're part of the Mannachanallur family. We actively 
            participate in local events, support community initiatives, and contribute to the 
            welfare of our neighbors. Your success is our success, and together we build a 
            stronger, more prosperous community.
          </p>
          <div className="card-gradient p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              "Quality groceries, honest prices, genuine care - that's the Malligai promise."
            </h3>
            <p className="text-muted-foreground">
              - The Malligai Family
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;