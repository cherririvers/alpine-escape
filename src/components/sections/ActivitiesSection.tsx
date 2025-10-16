import React, { useState } from 'react';
import {
  Mountain, Snowflake, Camera, Flame, TreePine, Compass,
  Clock, Users, Star, Calendar, MapPin, Shield, Award,
  ChevronRight, Check, X, Phone, Mail, ArrowRight, MessageCircle
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { openWhatsApp, formatPackageBookingMessage } from '../../utils/whatsapp';

const ActivitiesSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(2);
  const [selectedActivity, setSelectedActivity] = useState('');

  const adventurePackages = [
    {
      id: 1,
      name: 'Himalayan Skiing Adventure',
      category: 'Winter Sports',
      duration: '3 Days / 2 Nights',
      difficulty: 'Intermediate',
      price: 8500,
      originalPrice: 12000,
      groupSize: '4-8 people',
      season: 'Dec - Mar',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Experience world-class skiing on pristine Himalayan slopes with professional instructors and premium equipment.',
      highlights: [
        'Professional ski instruction',
        'Premium equipment included',
        'Guided mountain tours',
        'Safety gear provided',
        'Hot meals & accommodation',
        'Certificate of completion'
      ],
      itinerary: [
        'Day 1: Arrival, equipment fitting, basic training',
        'Day 2: Guided skiing, advanced techniques',
        'Day 3: Free skiing, departure'
      ],
      includes: ['Accommodation', 'All meals', 'Equipment rental', 'Professional guide', 'Safety gear', 'Transportation'],
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: 'Mountain Trekking Expedition',
      category: 'Trekking',
      duration: '5 Days / 4 Nights',
      difficulty: 'Moderate',
      price: 6500,
      originalPrice: 8500,
      groupSize: '6-12 people',
      season: 'Apr - Oct',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Discover hidden mountain trails, pristine lakes, and breathtaking viewpoints on this guided trekking adventure.',
      highlights: [
        'Expert mountain guides',
        'Scenic mountain trails',
        'Wildlife spotting opportunities',
        'Traditional mountain villages',
        'Camping under stars',
        'Photography opportunities'
      ],
      itinerary: [
        'Day 1: Base camp setup, acclimatization',
        'Day 2-3: Trail hiking, village visits',
        'Day 4: Summit attempt, scenic views',
        'Day 5: Descent and departure'
      ],
      includes: ['Camping equipment', 'All meals', 'Professional guide', 'Permits', 'First aid kit', 'Porter service'],
      rating: 4.8,
      reviews: 203
    },
    {
      id: 3,
      name: 'Photography Workshop Retreat',
      category: 'Photography',
      duration: '2 Days / 1 Night',
      difficulty: 'Beginner',
      price: 4200,
      originalPrice: 5500,
      groupSize: '4-10 people',
      season: 'Year Round',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Learn landscape and wildlife photography techniques while capturing the stunning beauty of the Himalayas.',
      highlights: [
        'Professional photographer guide',
        'Sunrise & sunset shoots',
        'Wildlife photography tips',
        'Post-processing workshop',
        'Equipment guidance',
        'Portfolio review session'
      ],
      itinerary: [
        'Day 1: Theory session, golden hour shoot',
        'Day 2: Wildlife photography, editing workshop'
      ],
      includes: ['Professional guidance', 'Location access', 'Basic equipment', 'Meals', 'Accommodation', 'Certificate'],
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: 'Campfire & Stargazing Experience',
      category: 'Cultural',
      duration: '1 Night',
      difficulty: 'Easy',
      price: 2800,
      originalPrice: 3500,
      groupSize: '8-20 people',
      season: 'Year Round',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Enjoy traditional mountain hospitality with campfire stories, local music, and spectacular stargazing.',
      highlights: [
        'Traditional campfire setup',
        'Local folk music & stories',
        'Stargazing with telescope',
        'Traditional mountain snacks',
        'Cultural performances',
        'Bonfire games & activities'
      ],
      itinerary: [
        'Evening: Campfire setup, cultural program',
        'Night: Stargazing, storytelling session'
      ],
      includes: ['Campfire setup', 'Traditional snacks', 'Cultural program', 'Telescope access', 'Blankets', 'Hot beverages'],
      rating: 4.6,
      reviews: 156
    },
    {
      id: 5,
      name: 'Rock Climbing & Rappelling',
      category: 'Adventure Sports',
      duration: '1 Day',
      difficulty: 'Advanced',
      price: 3500,
      originalPrice: 4500,
      groupSize: '4-8 people',
      season: 'Mar - Nov',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Challenge yourself with guided rock climbing and rappelling on natural mountain formations.',
      highlights: [
        'Professional climbing instruction',
        'Safety equipment provided',
        'Multiple difficulty routes',
        'Rappelling experience',
        'Achievement certificate',
        'Action photography included'
      ],
      itinerary: [
        'Morning: Safety briefing, basic training',
        'Afternoon: Guided climbing, rappelling'
      ],
      includes: ['Safety equipment', 'Professional guide', 'Training session', 'Certificate', 'Action photos', 'Refreshments'],
      rating: 4.8,
      reviews: 94
    },
    {
      id: 6,
      name: 'Mountain Biking Trail',
      category: 'Cycling',
      duration: '1 Day',
      difficulty: 'Moderate',
      price: 2200,
      originalPrice: 2800,
      groupSize: '6-12 people',
      season: 'Apr - Oct',
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Explore mountain trails on high-quality mountain bikes with scenic stops and refreshment breaks.',
      highlights: [
        'Premium mountain bikes',
        'Scenic trail routes',
        'Professional guide',
        'Safety gear included',
        'Refreshment stops',
        'Trail difficulty options'
      ],
      itinerary: [
        'Morning: Bike fitting, trail briefing',
        'Full day: Guided mountain biking tour'
      ],
      includes: ['Mountain bike rental', 'Safety helmet', 'Professional guide', 'Trail map', 'Refreshments', 'First aid support'],
      rating: 4.5,
      reviews: 112
    }
  ];

  const equipmentRental = [
    { name: 'Skiing Equipment Set', price: 800, duration: 'per day', items: ['Skis', 'Boots', 'Poles', 'Helmet'] },
    { name: 'Trekking Gear Package', price: 600, duration: 'per day', items: ['Backpack', 'Trekking poles', 'Sleeping bag', 'Tent'] },
    { name: 'Photography Equipment', price: 1200, duration: 'per day', items: ['DSLR Camera', 'Telephoto lens', 'Tripod', 'Filters'] },
    { name: 'Climbing Gear Set', price: 900, duration: 'per day', items: ['Harness', 'Helmet', 'Ropes', 'Carabiners'] },
    { name: 'Mountain Bike', price: 500, duration: 'per day', items: ['Premium MTB', 'Helmet', 'Repair kit', 'Water bottle'] },
    { name: 'Camping Equipment', price: 700, duration: 'per day', items: ['Tent', 'Sleeping bag', 'Camping stove', 'Cookware'] }
  ];

  const handleBookPackage = (packageId: number) => {
    const pkg = adventurePackages.find(p => p.id === packageId);
    setSelectedPackage(packageId);
    setSelectedActivity(pkg?.name || '');
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = adventurePackages.find(p => p.id === selectedPackage);

    if (pkg) {
      const totalCost = pkg.price * participants;
      const message = formatPackageBookingMessage({
        packageName: pkg.name,
        selectedDate: selectedDate,
        participants: participants,
        totalCost: totalCost
      });

      openWhatsApp(message);
    }

    setShowBookingModal(false);

    setTimeout(() => {
      setSelectedDate('');
      setParticipants(2);
      setSelectedPackage(null);
      setSelectedActivity('');
    }, 500);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Beginner': return 'text-green-600 bg-green-50';
      case 'Moderate': return 'text-amber-600 bg-amber-50';
      case 'Intermediate': return 'text-amber-600 bg-amber-50';
      case 'Advanced': return 'text-red-600 bg-red-50';
      default: return 'text-stone-600 bg-stone-50';
    }
  };

  return (
    <section id="activities" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-forest-50 to-amber-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Adventure Packages & Activities
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Embark on thrilling mountain adventures designed for every skill level. From skiing pristine slopes 
              to capturing stunning landscapes, create unforgettable memories in the heart of the Himalayas.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Award className="w-5 h-5" />
                <span className="font-medium">Expert Guides</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Star className="w-5 h-5" />
                <span className="font-medium">Premium Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adventure Packages */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid gap-12">
            {adventurePackages.map((pkg, index) => (
              <Card key={pkg.id} className="overflow-hidden hover-lift">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Package Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-semibold text-forest-900">{pkg.rating}</span>
                        <span className="text-stone-600 text-sm">({pkg.reviews})</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(pkg.difficulty)}`}>
                        {pkg.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="text-amber-600 font-medium mb-2">{pkg.category}</div>
                      <h3 className="text-3xl font-serif font-bold text-forest-900 mb-4">
                        {pkg.name}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-6">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Package Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Clock className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Users className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{pkg.groupSize}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Calendar className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{pkg.season}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Mountain className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{pkg.difficulty} Level</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-forest-900 mb-3">Package Highlights</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-forest-600 flex-shrink-0" />
                            <span className="text-sm text-stone-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-bold text-forest-900">₹{pkg.price.toLocaleString()}</span>
                          <span className="text-lg text-stone-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        </div>
                        <div className="text-stone-600 text-sm">per person (all inclusive)</div>
                      </div>
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => handleBookPackage(pkg.id)}
                        className="flex items-center space-x-2"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Book Adventure</span>
                      </Button>
                    </div>

                    {/* What's Included Preview */}
                    <div>
                      <h4 className="font-semibold text-forest-900 mb-3">What's Included</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.includes.slice(0, 4).map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-forest-50 text-forest-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                        {pkg.includes.length > 4 && (
                          <span className="text-amber-600 text-sm font-medium">
                            +{pkg.includes.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Rental Section */}
      <div className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Equipment Rental
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Don't have your own gear? No problem! Rent premium equipment for all your mountain adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentRental.map((equipment, index) => (
              <Card key={index} variant="rustic" className="p-6 hover-lift">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-forest-900 mb-2">
                    {equipment.name}
                  </h4>
                  <div className="text-2xl font-bold text-amber-600">
                    ₹{equipment.price}
                    <span className="text-sm font-normal text-stone-600 ml-1">
                      {equipment.duration}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {equipment.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-forest-600" />
                      <span className="text-sm text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Reserve Equipment
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal Activities Calendar */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Seasonal Activity Calendar
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Plan your visit based on the best seasons for your favorite activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { season: 'Winter (Dec-Feb)', icon: Snowflake, activities: ['Skiing', 'Snowboarding', 'Ice Climbing', 'Winter Photography'], color: 'text-blue-600' },
              { season: 'Spring (Mar-May)', icon: TreePine, activities: ['Trekking', 'Rock Climbing', 'Mountain Biking', 'Bird Watching'], color: 'text-green-600' },
              { season: 'Summer (Jun-Aug)', icon: Mountain, activities: ['High Altitude Trekking', 'Camping', 'Photography', 'Cultural Tours'], color: 'text-amber-600' },
              { season: 'Autumn (Sep-Nov)', icon: Compass, activities: ['Peak Climbing', 'Adventure Sports', 'Harvest Festivals', 'Clear Sky Photography'], color: 'text-orange-600' }
            ].map((season, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <season.icon className={`w-12 h-12 ${season.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-forest-900 mb-4">
                  {season.season}
                </h4>
                <div className="space-y-2">
                  {season.activities.map((activity, idx) => (
                    <div key={idx} className="text-sm text-stone-600 bg-stone-50 rounded-full px-3 py-1">
                      {activity}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedPackage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg bg-white">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-forest-900">
                  Book Your Adventure
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-forest-900 mb-2">
                  {adventurePackages.find(p => p.id === selectedPackage)?.name}
                </h4>
                <div className="text-2xl font-bold text-forest-900">
                  ₹{adventurePackages.find(p => p.id === selectedPackage)?.price.toLocaleString()}
                  <span className="text-sm font-normal text-stone-600 ml-2">per person</span>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Number of Participants
                  </label>
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-forest-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600">Total Cost</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-forest-900">
                        ₹{((adventurePackages.find(p => p.id === selectedPackage)?.price || 0) * participants).toLocaleString()}
                      </div>
                      <div className="text-sm text-stone-500">for {participants} {participants === 1 ? 'person' : 'people'}</div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800 text-center">
                    <MessageCircle className="w-4 h-4 inline mr-1" />
                    Booking request will be sent via WhatsApp. Our team will confirm availability within 2-4 hours.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Ready for Your Mountain Adventure?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Our adventure experts are standing by to help you plan the perfect mountain experience. 
            Contact us for personalized package recommendations and group discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Adventure Expert
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;