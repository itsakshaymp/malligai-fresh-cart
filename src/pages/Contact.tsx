  import React from 'react';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';
  import { Label } from '@/components/ui/label';
  import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from 'lucide-react';

  const Contact = () => {
    return (
      <div className="space-y-0">
        {/* Hero Section */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/90 text-xl max-w-3xl mx-auto">
              We're here to help! Visit our store, call us, or send us a message. 
              Your satisfaction is our priority.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We're always happy to help our customers. Whether you need product information, 
                    want to place a bulk order, or have any questions, don't hesitate to reach out.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Store Location */}
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-primary mb-2">
                            Store Location
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            75-1, LF Rd, RC Building<br /> Mannachanallur<br />

                            Tamil Nadu 621216<br />
                            India
                          </p>
    <a
    href="https://share.google/QJ9mAnYtqa2n8r089"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm" className="flex items-center">
      <Navigation className="w-4 h-4 mr-2" />
      Get Directions
    </Button>
  </a>


                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary mb-1">
                            Call Us
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            +91 9443160613
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Available during store hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  {/* <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary mb-1">
                            Email Us
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            info@malligai.com
                          </p>
                          <p className="text-sm text-muted-foreground">
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}

                  {/* Store Hours */}
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary mb-3">
                            Store Hours
                          </h3>
                          <div className="space-y-2 text-muted-foreground">
                            <div className="flex justify-between">
                              <span>Monday - Friday</span>
                              <span>7:00 AM - 9:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Saturday</span>
                              <span>7:00 AM - 9:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sunday</span>
                              <span>7:00 AM - 2:00 PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              {/* <div>
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button className="w-full hero-gradient">
                      Send Message
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      We'll get back to you within 24 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </div> */}
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Find Us on the Map
              </h2>
              <p className="text-muted-foreground text-lg">
                Located in the heart of Mannachanallur, easily accessible from all parts of the town.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-card overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Google Maps integration will be available soon
                    </p>
                    <Button variant="outline">
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Quick Contact */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="card-gradient p-8 rounded-2xl shadow-card max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-muted-foreground mb-6">
                For urgent inquiries or same-day delivery requests, call us directly. 
                We're always ready to help our valued customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hero-gradient">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 98765 43210
                </Button>
                <Button size="lg" variant="outline">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    );
  };

  export default Contact;