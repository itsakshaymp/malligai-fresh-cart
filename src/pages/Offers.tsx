import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Percent, Star, Clock, Users, Tag } from 'lucide-react';

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: 'Rice Festival Sale',
      description: 'Get 15% off on all premium basmati rice varieties',
      discount: '15% OFF',
      category: 'Rice & Grains',
      validUntil: '2024-01-31',
      terms: 'Valid on purchases above ₹500. Cannot be combined with other offers.',
      popular: true
    },
    {
      id: 2,
      title: 'Spice Bundle Deal',
      description: 'Buy any 3 spice packets and get 1 free',
      discount: 'Buy 3 Get 1 Free',
      category: 'Spices & Masalas',
      validUntil: '2024-02-15',
      terms: 'Applicable on selected spice varieties only.',
      popular: false
    },
    {
      id: 3,
      title: 'Wholesale Wednesday',
      description: 'Special wholesale prices every Wednesday',
      discount: 'Up to 20% OFF',
      category: 'All Categories',
      validUntil: 'Every Wednesday',
      terms: 'Minimum purchase of ₹2000 required for wholesale pricing.',
      popular: true
    },
    {
      id: 4,
      title: 'Oil & Ghee Combo',
      description: 'Purchase cooking oil and get 10% off on ghee',
      discount: '10% OFF',
      category: 'Cooking Oils',
      validUntil: '2024-01-28',
      terms: 'Valid when purchasing 1L or more cooking oil.',
      popular: false
    }
  ];

  const loyaltyProgram = {
    title: 'Malligai Loyalty Program',
    description: 'Earn points with every purchase and unlock exclusive benefits',
    benefits: [
      'Earn 1 point for every ₹10 spent',
      'Get ₹50 off when you collect 500 points',
      'Birthday month special discount of 15%',
      'Early access to festival sales',
      'Free home delivery for loyal customers'
    ]
  };

  const bulkOffers = [
    {
      title: '25kg Rice Sacks',
      description: 'Special pricing for 25kg rice purchases',
      savings: 'Save up to ₹200'
    },
    {
      title: 'Monthly Grocery Plan',
      description: 'Pre-order monthly essentials and save',
      savings: 'Save 12% monthly'
    },
    {
      title: 'Festival Packages',
      description: 'Complete festival grocery packages',
      savings: 'Save up to 18%'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Special Offers
          </h1>
          <p className="text-primary-foreground/90 text-xl max-w-3xl mx-auto">
            Discover amazing deals and exclusive offers designed to give you 
            the best value on quality groceries.
          </p>
        </div>
      </section>

      {/* Current Offers */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Current Offers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Limited-time deals on your favorite products. Don't miss out on these savings!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentOffers.map((offer) => (
              <Card key={offer.id} className="hover-lift border-0 shadow-card overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      {offer.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      {offer.popular && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                        {offer.discount}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Tag className="w-4 h-4 text-accent mr-2" />
                      <span className="font-medium">Category:</span>
                      <span className="ml-2 text-muted-foreground">{offer.category}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-accent mr-2" />
                      <span className="font-medium">Valid Until:</span>
                      <span className="ml-2 text-muted-foreground">{offer.validUntil}</span>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground">
                      <strong>Terms:</strong> {offer.terms}
                    </p>
                  </div>
                  
                  <Button className="w-full hero-gradient">
                    <Gift className="w-4 h-4 mr-2" />
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Loyalty Program */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card overflow-hidden">
              <CardHeader className="hero-gradient text-primary-foreground text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {loyaltyProgram.title}
                </CardTitle>
                <p className="text-primary-foreground/90">
                  {loyaltyProgram.description}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-4">
                      Program Benefits
                    </h3>
                    <ul className="space-y-3">
                      {loyaltyProgram.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">How It Works</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>1. Sign up for free at our store</p>
                      <p>2. Earn points with every purchase</p>
                      <p>3. Redeem points for discounts</p>
                      <p>4. Enjoy exclusive member benefits</p>
                    </div>
                    <Button className="w-full mt-4 hero-gradient">
                      Join Now - It's Free!
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Bulk Purchase Offers */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Bulk Purchase Benefits
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Save more when you buy in bulk. Perfect for families, small businesses, or community groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bulkOffers.map((offer, index) => (
              <Card key={index} className="hover-lift border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Percent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  <Badge className="bg-accent text-accent-foreground">
                    {offer.savings}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Special Seasonal Offers */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Seasonal Specials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Throughout the year, we offer special deals for festivals, seasons, and celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">Pongal Festival</h3>
                <p className="text-sm text-muted-foreground">Special rice and jaggery packages</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">Diwali Bonanza</h3>
                <p className="text-sm text-muted-foreground">Sweets, dry fruits, and oil discounts</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">Summer Specials</h3>
                <p className="text-sm text-muted-foreground">Cooling drinks and seasonal produce</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">Monsoon Care</h3>
                <p className="text-sm text-muted-foreground">Health supplements and immunity boosters</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Contact for Custom Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="card-gradient p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Need a Custom Deal?
            </h2>
            <p className="text-muted-foreground mb-6">
              Planning a large event or need bulk quantities? Contact us for personalized 
              pricing and special arrangements tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919443160613?text=Hello%20Malligai,%20I%20would%20like%20to%20request%20a%20custom%20quote."
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="hero-gradient">
      <Gift className="w-5 h-5 mr-2" />
      Request Custom Quote
    </Button>
  </a>

  {/* Call Button */}
  <a href="tel:+919443160613">
    
    <Button variant="outline">
      Call +91 9443160613
    </Button>
  </a>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;