import React from 'react';
import BookingSystem from './components/booking/BookingSystem';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import RoomsSection from './components/sections/RoomsSection';
import ActivitiesSection from './components/sections/ActivitiesSection';
import ActivitiesCalendar from './components/sections/ActivitiesCalendar';
import DiningSection from './components/sections/DiningSection';
import WeatherWidget from './components/sections/WeatherWidget';
import GallerySection from './components/sections/GallerySection';
import ReviewsSection from './components/sections/ReviewsSection';
import LocationContactSection from './components/sections/LocationContactSection';
import FAQSection from './components/sections/FAQSection';
import BlogNewsSection from './components/sections/BlogNewsSection';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import { Mountain, TreePine, Snowflake, Compass, Star, Users, Award, MapPin } from 'lucide-react';

function App() {
  return (
    <BookingSystem>
      <Layout>
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Stats Section */}
        <div className="bg-white py-16">
          <div className="container-max px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-amber-500" />
                </div>
                <div className="text-3xl font-bold text-forest-900 mb-2">4.8</div>
                <div className="text-stone-600">Guest Rating</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-forest-700" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-amber-500" />
                </div>
                <div className="text-3xl font-bold text-forest-900 mb-2">15+</div>
                <div className="text-stone-600">Awards Won</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-forest-700" />
                </div>
                <div className="text-3xl font-bold text-forest-900 mb-2">3200m</div>
                <div className="text-stone-600">Altitude</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact Section */}
        <LocationContactSection />

        {/* Activities Section */}
        <ActivitiesSection />

        {/* Activities Calendar */}
        <ActivitiesCalendar />

        {/* Weather Widget */}
        <WeatherWidget />

        {/* Gallery Section */}
        <GallerySection />

        {/* Reviews & Testimonials Section */}
        <ReviewsSection />

        {/* Dining Section */}
        <DiningSection />

        {/* Rooms Section */}
        <RoomsSection />

        {/* About Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Blog & News Section */}
        <BlogNewsSection />

        {/* Booking Section Placeholder */}
        <div id="booking" className="bg-forest-900 text-white py-16">
          <div className="container-max px-4 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Book Your Adventure?</h2>
            <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
              Experience the ultimate mountain getaway at Alpine Escape
            </p>
            <Button variant="secondary" size="lg">
              Check Availability
            </Button>
          </div>
        </div>
      </Layout>
    </BookingSystem>
  );
}

export default App;