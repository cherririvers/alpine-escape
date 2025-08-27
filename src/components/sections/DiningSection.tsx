import React, { useState } from 'react';
import { 
  Utensils, Coffee, Wine, Flame, Mountain, Star, Clock, Users, 
  Leaf, Award, ChefHat, MapPin, Calendar, Phone, Mail,
  Check, X, Heart, Thermometer, TreePine, Sun
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const DiningSection: React.FC = () => {
  const [selectedMealPlan, setSelectedMealPlan] = useState<number | null>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservationDate, setReservationDate] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [selectedTime, setSelectedTime] = useState('19:00');

  const diningVenues = [
    {
      id: 1,
      name: 'Summit Restaurant',
      type: 'Fine Dining',
      cuisine: 'Continental & Indian',
      capacity: '60 guests',
      timing: '7:00 AM - 10:30 PM',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Our main restaurant offers panoramic mountain views with a menu featuring both international cuisine and authentic Himalayan specialties.',
      specialties: ['Himalayan Trout', 'Mountain Lamb Curry', 'Local Organic Vegetables', 'Traditional Thukpa'],
      ambiance: 'Elegant mountain lodge atmosphere with floor-to-ceiling windows',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: 'Campfire Grill',
      type: 'Outdoor Dining',
      cuisine: 'BBQ & Grilled',
      capacity: '40 guests',
      timing: '6:00 PM - 11:00 PM',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Experience authentic mountain dining around a crackling campfire under the starlit Himalayan sky.',
      specialties: ['Grilled Mountain Fish', 'BBQ Chicken Tikka', 'Roasted Vegetables', 'Traditional Bread'],
      ambiance: 'Rustic outdoor setting with campfire and mountain views',
      rating: 4.9,
      reviews: 187
    },
    {
      id: 3,
      name: 'Sunrise Café',
      type: 'Casual Dining',
      cuisine: 'Café & Light Meals',
      capacity: '30 guests',
      timing: '6:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Perfect for light meals, premium coffee, and casual dining with stunning sunrise views over the peaks.',
      specialties: ['Himalayan Coffee', 'Fresh Pastries', 'Mountain Sandwiches', 'Herbal Teas'],
      ambiance: 'Cozy café atmosphere with comfortable seating and mountain views',
      rating: 4.7,
      reviews: 156
    }
  ];

  const mealPlans = [
    {
      id: 1,
      name: 'Continental Plan (CP)',
      price: 800,
      duration: 'per person/day',
      includes: ['Daily Breakfast', 'Tea/Coffee Service', 'Welcome Drink'],
      description: 'Perfect for adventurers who prefer flexibility in their dining choices.',
      popular: false
    },
    {
      id: 2,
      name: 'Modified American Plan (MAP)',
      price: 1800,
      duration: 'per person/day',
      includes: ['Daily Breakfast', 'Lunch OR Dinner', 'Tea/Coffee Service', 'Welcome Drink', 'Evening Snacks'],
      description: 'Ideal balance of included meals with dining flexibility.',
      popular: true
    },
    {
      id: 3,
      name: 'American Plan (AP)',
      price: 2500,
      duration: 'per person/day',
      includes: ['Daily Breakfast', 'Lunch', 'Dinner', 'Tea/Coffee Service', 'Welcome Drink', 'Evening Snacks', 'Campfire Dinner (once)'],
      description: 'Complete dining experience with all meals and special experiences included.',
      popular: false
    },
    {
      id: 4,
      name: 'Adventure Gourmet Package',
      price: 3200,
      duration: 'per person/day',
      includes: ['All Meals', 'Premium Beverages', 'Special Dining Experiences', 'Private Chef Options', 'Wine Pairing', 'Cooking Classes'],
      description: 'Ultimate culinary adventure with premium dining experiences and personalized service.',
      popular: false
    }
  ];

  const menuHighlights = [
    {
      category: 'Himalayan Specialties',
      icon: Mountain,
      dishes: [
        { name: 'Traditional Thukpa', price: 450, description: 'Hearty noodle soup with local vegetables and yak meat' },
        { name: 'Himalayan Trout Curry', price: 850, description: 'Fresh mountain trout in aromatic local spices' },
        { name: 'Yak Cheese Momos', price: 380, description: 'Steamed dumplings with authentic yak cheese filling' },
        { name: 'Gundruk Soup', price: 320, description: 'Traditional fermented leafy vegetable soup' }
      ]
    },
    {
      category: 'Continental Favorites',
      icon: ChefHat,
      dishes: [
        { name: 'Grilled Mountain Lamb', price: 1200, description: 'Tender lamb with rosemary and mountain herbs' },
        { name: 'Alpine Mushroom Risotto', price: 750, description: 'Creamy risotto with wild mountain mushrooms' },
        { name: 'Herb-Crusted Salmon', price: 950, description: 'Fresh salmon with local herb crust' },
        { name: 'Mountain Berry Cheesecake', price: 420, description: 'Homemade cheesecake with wild mountain berries' }
      ]
    },
    {
      category: 'Beverages & Spirits',
      icon: Coffee,
      dishes: [
        { name: 'Himalayan Coffee', price: 180, description: 'Premium mountain-grown coffee beans' },
        { name: 'Rhododendron Honey Tea', price: 150, description: 'Local herbal tea with wild honey' },
        { name: 'Mountain Mulled Wine', price: 450, description: 'Warm spiced wine perfect for cold evenings' },
        { name: 'Local Craft Beer', price: 320, description: 'Locally brewed beer with mountain spring water' }
      ]
    }
  ];

  const specialExperiences = [
    {
      id: 1,
      name: 'Campfire Dinner Under Stars',
      price: 1500,
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Enjoy a magical dinner around a crackling campfire with traditional music and storytelling.',
      includes: ['3-course meal', 'Traditional music', 'Storytelling session', 'Hot beverages', 'Blankets provided'],
      timing: '7:00 PM - 10:00 PM',
      maxGuests: 20
    },
    {
      id: 2,
      name: 'Sunrise Breakfast Trek',
      price: 1200,
      duration: '4 hours',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Trek to a scenic viewpoint for breakfast while watching the sunrise over the Himalayas.',
      includes: ['Guided trek', 'Hot breakfast', 'Mountain views', 'Photography assistance', 'Return transport'],
      timing: '5:30 AM - 9:30 AM',
      maxGuests: 15
    },
    {
      id: 3,
      name: 'Private Chef Experience',
      price: 3500,
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Personal chef prepares a customized meal in your accommodation with wine pairing.',
      includes: ['Personal chef', 'Customized menu', 'Wine pairing', 'Table service', 'Dietary accommodations'],
      timing: 'Flexible timing',
      maxGuests: 8
    },
    {
      id: 4,
      name: 'Cooking Class with Local Chef',
      price: 800,
      duration: '2.5 hours',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Learn to cook traditional Himalayan dishes with our expert local chef.',
      includes: ['Hands-on cooking', 'Recipe cards', 'Ingredient sourcing tips', 'Full meal', 'Certificate'],
      timing: '3:00 PM - 5:30 PM',
      maxGuests: 12
    }
  ];

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation request submitted for ${partySize} guests on ${reservationDate} at ${selectedTime}. We will contact you shortly to confirm.`);
    setShowReservationModal(false);
  };

  return (
    <section id="dining" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-amber-50 to-forest-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Mountain Dining Experience
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Savor authentic Himalayan cuisine and international favorites while enjoying breathtaking mountain views. 
              From intimate fine dining to adventurous campfire meals under the stars.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <Award className="w-5 h-5" />
                <span className="font-medium">Award-Winning Cuisine</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Leaf className="w-5 h-5" />
                <span className="font-medium">Organic Ingredients</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Mountain className="w-5 h-5" />
                <span className="font-medium">Panoramic Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dining Venues */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Our Dining Venues
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Three distinct dining experiences, each offering unique ambiance and culinary delights.
            </p>
          </div>

          <div className="grid gap-12">
            {diningVenues.map((venue, index) => (
              <Card key={venue.id} className="overflow-hidden hover-lift">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Venue Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-semibold text-forest-900">{venue.rating}</span>
                        <span className="text-stone-600 text-sm">({venue.reviews})</span>
                      </div>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="text-amber-600 font-medium mb-2">{venue.type}</div>
                      <h3 className="text-3xl font-serif font-bold text-forest-900 mb-4">
                        {venue.name}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-6">
                        {venue.description}
                      </p>
                    </div>

                    {/* Venue Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Utensils className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{venue.cuisine}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Users className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{venue.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Clock className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">{venue.timing}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-700">
                        <Mountain className="w-5 h-5 text-forest-600" />
                        <span className="text-sm">Mountain Views</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-forest-900 mb-3">Signature Dishes</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {venue.specialties.map((specialty, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-forest-600" />
                            <span className="text-sm text-stone-700">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ambiance */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-forest-900 mb-2">Ambiance</h4>
                      <p className="text-stone-600 text-sm">{venue.ambiance}</p>
                    </div>

                    {/* Reservation Button */}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setShowReservationModal(true)}
                      className="flex items-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Make Reservation</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Highlights */}
      <div className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Menu Highlights
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              A curated selection of our most popular dishes, featuring local ingredients and international flavors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {menuHighlights.map((category, index) => (
              <Card key={index} variant="rustic" className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-forest-700" />
                  <h4 className="text-2xl font-serif font-bold text-forest-900">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-4">
                  {category.dishes.map((dish, idx) => (
                    <div key={idx} className="border-b border-stone-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-forest-900">{dish.name}</h5>
                        <span className="text-amber-600 font-bold">₹{dish.price}</span>
                      </div>
                      <p className="text-stone-600 text-sm">{dish.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Special Dining Experiences */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Special Dining Experiences
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Unique culinary adventures that combine great food with unforgettable mountain experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialExperiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-serif font-bold text-forest-900">
                      {experience.name}
                    </h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">₹{experience.price}</div>
                      <div className="text-sm text-stone-600">per person</div>
                    </div>
                  </div>
                  <p className="text-stone-600 mb-4">{experience.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-forest-600" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-forest-600" />
                      <span>Max {experience.maxGuests} guests</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-forest-900 mb-2">Includes:</h5>
                    <div className="space-y-1">
                      {experience.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-forest-600" />
                          <span className="text-sm text-stone-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-600">{experience.timing}</span>
                    <Button variant="outline" size="sm">
                      Book Experience
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Meal Plans */}
      <div className="section-padding bg-amber-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Meal Plans & Packages
            </h3>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Choose the perfect meal plan for your stay, from flexible options to all-inclusive gourmet experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mealPlans.map((plan) => (
              <Card key={plan.id} className={`p-6 text-center hover-lift ${plan.popular ? 'ring-2 ring-amber-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h4 className="text-xl font-serif font-bold text-forest-900 mb-2">
                  {plan.name}
                </h4>
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  ₹{plan.price}
                </div>
                <div className="text-sm text-stone-600 mb-4">{plan.duration}</div>
                <p className="text-stone-600 text-sm mb-6">{plan.description}</p>
                
                <div className="space-y-2 mb-6">
                  {plan.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-forest-600" />
                      <span className="text-sm text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  size="sm" 
                  className="w-full"
                >
                  Select Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-forest-900">
                  Make Reservation
                </h3>
                <button
                  onClick={() => setShowReservationModal(false)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Party Size
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
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
                    onClick={() => setShowReservationModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" className="flex-1">
                    Confirm Reservation
                  </Button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>✓ Mountain Views</span>
                  <span>✓ Local Cuisine</span>
                  <span>✓ Expert Chefs</span>
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
            Ready to Experience Mountain Cuisine?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Our culinary team is ready to create unforgettable dining experiences that perfectly complement 
            your mountain adventure. Reserve your table or book a special dining experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call for Reservations
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Mail className="w-5 h-5 mr-2" />
              Email Dining Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;