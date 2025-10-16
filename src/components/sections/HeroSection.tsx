import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Users, MapPin, Search, Star, Award, Thermometer, MessageCircle, Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { formatAvailabilityCheckMessage, openWhatsApp } from '../../utils/whatsapp';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Hero slides with different mountain scenes
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Alpine Escape',
      subtitle: 'Where Mountain Adventures Meet Rustic Luxury',
      description: 'Experience the ultimate mountain getaway in the heart of the Himalayas'
    },
    {
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Adventure Awaits',
      subtitle: 'Skiing, Trekking & Mountain Experiences',
      description: 'Discover thrilling adventures and peaceful mountain retreats'
    },
    {
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Mountain Luxury',
      subtitle: 'Rustic Comfort at 3200m Altitude',
      description: 'Cozy accommodations with breathtaking Himalayan views'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Set default dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = formatAvailabilityCheckMessage({
        checkIn,
        checkOut,
        guests
      });

      openWhatsApp(message);

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1 animate-fade-in-left animate-delay-200">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-amber-400 font-medium animate-fade-in-right animate-delay-300">4.8/5 Guest Rating</span>
              </div>
              
              <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up animate-delay-100">
                {heroSlides[currentSlide].title}
              </h1>
              
              <h2 className="hero-subtitle text-xl sm:text-2xl md:text-3xl font-light mb-6 text-amber-100 animate-fade-in-up animate-delay-200">
                {heroSlides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg sm:text-xl text-stone-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-300">
                {heroSlides[currentSlide].description}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 stagger-children">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">3200m Altitude</div>
                    <div className="text-xs sm:text-sm text-stone-300">Himalayan Heights</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Award className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">15+ Awards</div>
                    <div className="text-xs sm:text-sm text-stone-300">Excellence Recognized</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Thermometer className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Perfect Weather</div>
                    <div className="text-xs sm:text-sm text-stone-300">Year-round Adventure</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animate-delay-500">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => setShowBookingWidget(!showBookingWidget)}
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 btn-interactive hover-glow btn-mobile"
                >
                  Book Your Adventure
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-forest-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 btn-interactive btn-mobile"
                  onClick={() => {
                    const element = document.querySelector('#activities');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Packages
                </Button>
              </div>
            </div>

            {/* Quick Booking Widget */}
            <div className={`animate-scale-in animate-delay-600 transition-all duration-500 ${showBookingWidget ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:opacity-100 lg:translate-y-0'} ${showBookingWidget ? 'block' : 'hidden lg:block'}`}>
              <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest-900">Quick Booking</h3>
                    <div className="text-amber-600 font-semibold text-sm sm:text-base">Best Rate</div>
                  </div>
                  
                  <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-6 mobile-form">
                    {/* Check-in & Check-out */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Check-in
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent text-base"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Check-out
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent text-base"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                        <select
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent appearance-none bg-white text-base"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Price Display */}
                    <div className="bg-forest-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Starting from</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-forest-900">₹2,500</div>
                          <div className="text-sm text-stone-500">per night</div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full btn-mobile"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <MessageCircle className="w-5 h-5 mr-2 animate-pulse" />
                          Opening WhatsApp...
                        </>
                      ) : submitSuccess ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          Request Sent!
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5 mr-2" />
                          Check Availability
                        </>
                      )}
                    </Button>

                    {submitSuccess && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                        <p className="text-sm text-green-800">
                          <Check className="w-4 h-4 inline mr-1" />
                          WhatsApp message sent! We'll respond shortly.
                        </p>
                      </div>
                    )}
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600">
                      <span>✓ Free Cancellation</span>
                      <span>✓ No Booking Fees</span>
                      <span>✓ Instant Confirmation</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-4 sm:left-8 z-20 animate-float hidden sm:block">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white hover:text-amber-400 transition-all duration-300 hover-scale"
        >
          <span className="text-xs sm:text-sm mb-2">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;