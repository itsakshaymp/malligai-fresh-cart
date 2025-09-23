import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ArrowLeft, ArrowRight, X } from 'lucide-react';
import riceImage from '@/assets/rice-product.jpg';
import spicesImage from '@/assets/spices-product.jpg';
import pulsesImage from '@/assets/pulses-product.jpg';
import oilsImage from '@/assets/oils-product.jpg';
import storeInteriorImage from '@/assets/store-interior.jpg';
import teaCoffeeImage from '@/assets/tea-coffee.jpg';
import snacksBiscuitsImage from '@/assets/snacks-biscuits.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Store', 'Products', 'Categories'];

  const galleryItems = [
    {
      id: 1,
      title: 'Store Interior',
      category: 'Store',
      image: storeInteriorImage,
      description: 'Our well-organized store interior with easy navigation and clean displays'
    },
    {
      id: 2,
      title: 'Premium Rice Collection',
      category: 'Products',
      image: riceImage,
      description: 'Various types of premium rice including Basmati, Sona Masoori, and more'
    },
    {
      id: 3,
      title: 'Authentic Spices',
      category: 'Products',
      image: spicesImage,
      description: 'Fresh and aromatic spices sourced from trusted suppliers across India'
    },
    {
      id: 4,
      title: 'Quality Pulses & Dal',
      category: 'Products',
      image: pulsesImage,
      description: 'Nutritious pulses and lentils for healthy and delicious meals'
    },
    {
      id: 5,
      title: 'Pure Cooking Oils',
      category: 'Products',
      image: oilsImage,
      description: 'Cold-pressed and refined oils for all your cooking needs'
    },
    {
      id: 6,
      title: 'Tea & Coffee Section',
      category: 'Categories',
      image: teaCoffeeImage,
      description: 'Wide variety of tea and coffee brands to start your day right'
    },
    {
      id: 7,
      title: 'Snacks & Biscuits',
      category: 'Categories',
      image: snacksBiscuitsImage,
      description: 'Delicious snacks and biscuits for every age and taste preference'
    },
    {
      id: 8,
      title: 'Store Front View',
      category: 'Store',
      image: storeInteriorImage,
      description: 'Our welcoming store front in the heart of Mannachanallur'
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    const actualIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id);
    setSelectedImage(actualIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % galleryItems.length
      : (selectedImage - 1 + galleryItems.length) % galleryItems.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Gallery
          </h1>
          <p className="text-primary-foreground/90 text-xl max-w-3xl mx-auto">
            Take a visual tour of our store, products, and the quality that defines 
            Malligai Wholesale and Retails.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 items-center">
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {selectedCategory === 'All' ? 'All Gallery Items' : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="hover-lift border-0 shadow-card overflow-hidden group cursor-pointer">
                <div 
                  className="relative aspect-square overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No items found in this category.
              </p>
              <Button 
                onClick={() => setSelectedCategory('All')}
                variant="outline"
              >
                View All Items
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Store Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Store Highlights
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key features that make shopping at Malligai a pleasant experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  Well-Organized Layout
                </h3>
                <p className="text-muted-foreground text-sm">
                  Easy-to-navigate aisles with clear product categorization and signage
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">★</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  Premium Display
                </h3>
                <p className="text-muted-foreground text-sm">
                  Attractive product displays that highlight quality and freshness
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">♡</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  Clean Environment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Maintained cleanliness and hygiene standards for a safe shopping experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="card-gradient p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Experience It Yourself
            </h2>
            <p className="text-muted-foreground mb-6">
              Pictures tell a story, but visiting our store gives you the complete experience. 
              Come see the quality and care we put into everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-gradient">
                Visit Our Store
              </Button>
              <Button variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
              onClick={() => navigateLightbox('prev')}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
              onClick={() => navigateLightbox('next')}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Image */}
            <div className="text-center">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {galleryItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;