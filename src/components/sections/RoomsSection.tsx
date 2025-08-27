import React, { useState } from 'react';
import { Bed, Users, Wifi, Coffee, Mountain, Snowflake, Car, Utensils, Shield, Star, Calendar, ArrowRight, Check, X } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const RoomsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const roomCategories = [
    {
      id: 1,
      name: 'Cozy Mountain Cabin',
      type: 'Standard Room',
      price: 2500,
      originalPrice: 3200,
      size: '25 sqm',
      occupancy: '2 Adults',
      bedType: '1 Queen Bed',
      view: 'Garden View',
      images: [
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: [
        'Free Wi-Fi', 'Mountain View', 'Private Bathroom', 'Heating System',
        'Tea/Coffee Maker', 'Room Service', 'Daily Housekeeping', 'Safe Deposit Box'
      ],
      description: 'Perfect for couples seeking a cozy mountain retreat with rustic charm and modern comforts.',
      features: ['Wooden Interiors', 'Fireplace', 'Balcony', 'Mini Fridge'],
      rating: 4.7,
      reviews: 156
    },
    {
      id: 2,
      name: 'Alpine Adventure Suite',
      type: 'Deluxe Room',
      price: 4200,
      originalPrice: 5000,
      size: '35 sqm',
      occupancy: '3 Adults',
      bedType: '1 King + 1 Single',
      view: 'Mountain View',
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: [
        'Free Wi-Fi', 'Panoramic Mountain View', 'Private Bathroom', 'Heating System',
        'Tea/Coffee Maker', 'Room Service', 'Daily Housekeeping', 'Safe Deposit Box',
        'Mini Bar', 'Seating Area', 'Work Desk', 'Premium Toiletries'
      ],
      description: 'Spacious suite with breathtaking mountain views, perfect for small families or groups.',
      features: ['Separate Seating Area', 'Premium Furnishing', 'Large Balcony', 'Mountain Telescope'],
      rating: 4.8,
      reviews: 203
    },
    {
      id: 3,
      name: 'Himalayan Family Lodge',
      type: 'Family Room',
      price: 6500,
      originalPrice: 7800,
      size: '50 sqm',
      occupancy: '4-5 Adults',
      bedType: '2 Queen Beds',
      view: 'Valley View',
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: [
        'Free Wi-Fi', 'Valley & Mountain View', 'Private Bathroom', 'Heating System',
        'Tea/Coffee Maker', 'Room Service', 'Daily Housekeeping', 'Safe Deposit Box',
        'Mini Bar', 'Seating Area', 'Work Desk', 'Premium Toiletries',
        'Kitchenette', 'Dining Area', 'Extra Storage', 'Children Amenities'
      ],
      description: 'Spacious family accommodation with separate areas and stunning valley views.',
      features: ['Two Separate Bedrooms', 'Family Dining Area', 'Kids Play Corner', 'Extra Large Balcony'],
      rating: 4.9,
      reviews: 127
    },
    {
      id: 4,
      name: 'Summit Presidential Suite',
      type: 'Luxury Suite',
      price: 8000,
      originalPrice: 10500,
      size: '75 sqm',
      occupancy: '4 Adults',
      bedType: '1 King + Sofa Bed',
      view: '360° Mountain View',
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: [
        'Free Wi-Fi', '360° Mountain Views', 'Luxury Bathroom', 'Premium Heating',
        'Espresso Machine', '24/7 Room Service', 'Butler Service', 'Premium Safe',
        'Premium Mini Bar', 'Living Room', 'Executive Desk', 'Luxury Toiletries',
        'Full Kitchenette', 'Dining Area', 'Walk-in Closet', 'Private Terrace',
        'Jacuzzi', 'Fireplace', 'Sound System', 'Concierge Service'
      ],
      description: 'Ultimate luxury with panoramic mountain views and premium amenities for discerning guests.',
      features: ['Private Terrace', 'Luxury Furnishing', 'Jacuzzi Tub', 'Personal Butler'],
      rating: 5.0,
      reviews: 89
    }
  ];

  const handleBookRoom = (roomId: number) => {
    setSelectedRoom(roomId);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const room = roomCategories.find(r => r.id === selectedRoom);
    alert(`Booking request submitted for ${room?.name}! We will contact you shortly.`);
    setShowBookingModal(false);
  };

  return (
    <section id="rooms" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-stone-50 to-forest-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Rooms & Suites
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
              Experience mountain luxury in our thoughtfully designed accommodations, 
              each offering stunning views and rustic comfort at the heart of the Himalayas.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <Mountain className="w-5 h-5" />
                <span className="font-medium">Mountain Views</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Wifi className="w-5 h-5" />
                <span className="font-medium">Free Wi-Fi</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Categories */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid gap-12">
            {roomCategories.map((room, index) => (
              <Card key={room.id} className="overflow-hidden hover-lift">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Gallery */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-semibold text-forest-900">{room.rating}</span>
                        <span className="text-stone-600 text-sm">({room.reviews})</span>
                      </div>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="text-amber-600 font-medium mb-2">{room.type}</div>
                      <h3 className="text-3xl font-serif font-bold text-forest-900 mb-4">
                        {room.name}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-6">
                        {room.description}
                      </p>
                    </div>

                    {/* Room Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Bed className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{room.bedType}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Users className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{room.occupancy}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Mountain className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{room.view}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-5 h-5 text-center text-forest-600 font-bold text-sm">m²</span>
                        <span className="text-sm">{room.size}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-forest-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-forest-600" />
                            <span className="text-sm text-stone-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-bold text-forest-900">₹{room.price.toLocaleString()}</span>
                          <span className="text-lg text-stone-500 line-through">₹{room.originalPrice.toLocaleString()}</span>
                        </div>
                        <div className="text-stone-600 text-sm">per night (incl. taxes)</div>
                      </div>
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => handleBookRoom(room.id)}
                        className="flex items-center space-x-2"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Book Now</span>
                      </Button>
                    </div>

                    {/* Amenities Preview */}
                    <div>
                      <h4 className="font-semibold text-forest-900 mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.slice(0, 6).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="bg-forest-50 text-forest-700 px-3 py-1 rounded-full text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                        {room.amenities.length > 6 && (
                          <span className="text-amber-600 text-sm font-medium">
                            +{room.amenities.length - 6} more
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

      {/* Additional Services */}
      <div className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Included Services
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Every stay includes these complimentary services to enhance your mountain experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Stay connected throughout the lodge' },
              { icon: Car, title: 'Airport Pickup', desc: 'Complimentary transfer service' },
              { icon: Coffee, title: 'Welcome Drinks', desc: 'Traditional mountain tea on arrival' },
              { icon: Utensils, title: 'Daily Breakfast', desc: 'Continental & Indian options' },
              { icon: Mountain, title: 'Guided Tours', desc: 'Daily nature walks with experts' },
              { icon: Snowflake, title: 'Equipment Storage', desc: 'Secure storage for adventure gear' },
              { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock safety monitoring' },
              { icon: Users, title: 'Concierge Service', desc: 'Personal assistance for activities' }
            ].map((service, index) => (
              <Card key={index} variant="rustic" className="p-6 text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-10 h-10 text-forest-700" />
                </div>
                <h4 className="text-lg font-semibold text-forest-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-stone-600 text-sm">
                  {service.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-forest-900">
                  Book Your Stay
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
                  {roomCategories.find(r => r.id === selectedRoom)?.name}
                </h4>
                <div className="text-2xl font-bold text-forest-900">
                  ₹{roomCategories.find(r => r.id === selectedRoom)?.price.toLocaleString()}
                  <span className="text-sm font-normal text-stone-600 ml-2">per night</span>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
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
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Can't Decide? Let Us Help!
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Our mountain experts are here to help you choose the perfect accommodation 
            for your Himalayan adventure. Get personalized recommendations based on your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Speak to Expert
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Calendar className="w-5 h-5 mr-2" />
              Check All Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;