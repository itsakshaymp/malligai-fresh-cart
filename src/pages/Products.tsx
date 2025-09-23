import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import riceImage from '@/assets/rice-product.jpg';
import spicesImage from '@/assets/spices-product.jpg';
import pulsesImage from '@/assets/pulses-product.jpg';
import oilsImage from '@/assets/oils-product.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Rice & Grains',
    'Pulses & Lentils',
    'Spices & Masalas',
    'Cooking Oils',
    'Packaged Foods',
    'Tea & Coffee',
    'Snacks & Biscuits',
    'Canned Foods'
  ];

  const products = [
    {
      name: 'Premium Basmati Rice',
      category: 'Rice & Grains',
      image: riceImage,
      description: 'Finest quality aged basmati rice with extra long grains and aromatic fragrance.',
      features: ['Extra Long Grain', 'Aged 1+ Years', 'Premium Quality', 'Aromatic'],
      wholesale: true,
      popular: true
    },
    {
      name: 'Sona Masoori Rice',
      category: 'Rice & Grains',
      image: riceImage,
      description: 'High-quality medium grain rice, perfect for daily meals and South Indian dishes.',
      features: ['Medium Grain', 'Easy to Cook', 'Light & Fluffy', 'Daily Use'],
      wholesale: true,
      popular: false
    },
    {
      name: 'Turmeric Powder',
      category: 'Spices & Masalas',
      image: spicesImage,
      description: 'Pure, freshly ground turmeric powder with vibrant color and natural curcumin.',
      features: ['Pure & Natural', 'Freshly Ground', 'High Curcumin', 'Rich Color'],
      wholesale: true,
      popular: true
    },
    {
      name: 'Garam Masala',
      category: 'Spices & Masalas',
      image: spicesImage,
      description: 'Traditional blend of aromatic spices, freshly ground for authentic flavor.',
      features: ['Traditional Recipe', 'Aromatic Blend', 'Freshly Ground', 'Authentic Taste'],
      wholesale: false,
      popular: true
    },
    {
      name: 'Toor Dal (Arhar Dal)',
      category: 'Pulses & Lentils',
      image: pulsesImage,
      description: 'Premium quality toor dal, rich in protein and perfect for daily cooking.',
      features: ['High Protein', 'Premium Quality', 'Well Cleaned', 'Nutritious'],
      wholesale: true,
      popular: true
    },
    {
      name: 'Moong Dal',
      category: 'Pulses & Lentils',
      image: pulsesImage,
      description: 'Split green gram dal, easy to digest and cook, perfect for healthy meals.',
      features: ['Easy to Digest', 'Quick Cooking', 'High Protein', 'Healthy Choice'],
      wholesale: true,
      popular: false
    },
    {
      name: 'Coconut Oil',
      category: 'Cooking Oils',
      image: oilsImage,
      description: 'Pure cold-pressed coconut oil, ideal for cooking and traditional preparations.',
      features: ['Cold Pressed', 'Pure & Natural', 'Traditional Method', 'Multi-purpose'],
      wholesale: true,
      popular: true
    },
    {
      name: 'Sunflower Oil',
      category: 'Cooking Oils',
      image: oilsImage,
      description: 'Refined sunflower oil with light taste, perfect for all types of cooking.',
      features: ['Light Taste', 'Heart Healthy', 'High Smoke Point', 'Versatile Use'],
      wholesale: true,
      popular: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Products
          </h1>
          <p className="text-primary-foreground/90 text-xl max-w-3xl mx-auto">
            Discover our wide range of high-quality groceries and daily essentials, 
            carefully selected to meet your family's needs.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-4 h-4 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "hero-gradient" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover-lift border-0 shadow-card overflow-hidden">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.popular && (
                      <Badge className="bg-accent text-accent-foreground">Popular</Badge>
                    )}
                    {product.wholesale && (
                      <Badge variant="secondary">Wholesale</Badge>
                    )}
                  </div>
                </div>

                {/* Product Details */}
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

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full hero-gradient">
                      Check Availability
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Price Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No products found matching your criteria.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of products across different categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <Card 
                key={index} 
                className="hover-lift border-0 shadow-card cursor-pointer transition-smooth"
                onClick={() => setSelectedCategory(category)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-lg">
                      {category.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-primary">
                    {category}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="card-gradient p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              We stock many more products in our store. Visit us or call to inquire about 
              specific items, bulk orders, or special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
  href="https://share.google/TmippgOmv6ayxCVpE"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="hero-gradient">
    Visit Our Store
  </Button>
</a>

              <a href="tel:+919876543210">
  <Button variant="outline">
    Call +919443160613
  </Button>
</a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;