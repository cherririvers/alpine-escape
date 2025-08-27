import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Search, HelpCircle, Phone, Mail, 
  MessageCircle, Clock, Shield, Award, Users, Mountain,
  Calendar, CreditCard, Utensils, Car, Wifi, TreePine,
  Star, CheckCircle, AlertTriangle, Info, BookOpen
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: 45 },
    { id: 'booking', name: 'Booking & Reservations', count: 12 },
    { id: 'accommodation', name: 'Accommodation', count: 8 },
    { id: 'activities', name: 'Activities & Adventures', count: 10 },
    { id: 'dining', name: 'Dining & Meals', count: 6 },
    { id: 'transportation', name: 'Transportation', count: 5 },
    { id: 'policies', name: 'Policies & Terms', count: 4 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How far in advance should I book my stay?',
      answer: 'We recommend booking at least 2-4 weeks in advance, especially during peak seasons (December-February for skiing, April-June for trekking). For special events or group bookings, 6-8 weeks advance booking is advisable. However, we do accept last-minute bookings subject to availability.',
      popular: true
    },
    {
      id: 2,
      category: 'booking',
      question: 'What is your cancellation policy?',
      answer: 'Free cancellation up to 48 hours before arrival. Cancellations within 48 hours are subject to a 50% charge. No-shows will be charged the full amount. For group bookings (8+ people), different terms may apply. We offer flexible rebooking options in case of weather-related cancellations.',
      popular: true
    },
    {
      id: 3,
      category: 'accommodation',
      question: 'What amenities are included in the rooms?',
      answer: 'All rooms include free Wi-Fi, mountain views, private bathroom with hot water, heating system, tea/coffee maker, room service, daily housekeeping, and safe deposit box. Premium rooms also include mini bar, seating area, work desk, and premium toiletries. Check individual room descriptions for specific amenities.',
      popular: true
    },
    {
      id: 4,
      category: 'activities',
      question: 'Are activities suitable for beginners?',
      answer: 'Absolutely! We offer activities for all skill levels. Our professional guides provide instruction and ensure safety for beginners. We have beginner-friendly options for skiing, trekking, rock climbing, and photography. Equipment and safety gear are provided, and we maintain small group sizes for personalized attention.',
      popular: true
    },
    {
      id: 5,
      category: 'dining',
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Yes, we cater to various dietary requirements including vegetarian, vegan, gluten-free, and other allergies. Please inform us during booking or at least 24 hours before arrival. Our chefs can prepare customized meals, and we source fresh, local ingredients to ensure quality and safety.',
      popular: false
    },
    {
      id: 6,
      category: 'transportation',
      question: 'Do you provide airport pickup services?',
      answer: 'Yes, we offer pickup services from Kullu-Manali Airport (Bhuntar) for ₹2,500 per vehicle (up to 4 people). We also provide pickup from Manali bus stand for ₹800 per vehicle. Advance booking required. Helicopter transfers can be arranged for special occasions at additional cost.',
      popular: false
    },
    {
      id: 7,
      category: 'booking',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI payments, net banking, and cash. For international guests, we accept PayPal and bank transfers. A 50% advance payment is required to confirm booking, with the balance payable upon arrival.',
      popular: false
    },
    {
      id: 8,
      category: 'activities',
      question: 'What should I pack for mountain activities?',
      answer: 'Essential items include warm clothing (layers), waterproof jacket, comfortable hiking boots, sunglasses, sunscreen (high SPF), personal medications, and camera. We provide technical equipment for activities. Detailed packing lists are sent with booking confirmation based on your planned activities and season.',
      popular: false
    },
    {
      id: 9,
      category: 'accommodation',
      question: 'Is there heating in the rooms during winter?',
      answer: 'Yes, all rooms have efficient heating systems including room heaters and heated bathrooms. We also provide extra blankets and hot water bottles upon request. Common areas are well-heated, and we maintain comfortable temperatures throughout the lodge during winter months.',
      popular: false
    },
    {
      id: 10,
      category: 'policies',
      question: 'What is the minimum age for adventure activities?',
      answer: 'Age requirements vary by activity: Skiing (8+ with instruction), Rock climbing (12+ with supervision), Trekking (10+ for easy trails, 14+ for moderate), Photography workshops (no age limit). Children must be accompanied by adults. We offer family-friendly alternatives for younger children.',
      popular: false
    },
    {
      id: 11,
      category: 'dining',
      question: 'Are meals included in the room rate?',
      answer: 'Meal inclusion depends on your chosen plan: Continental Plan (CP) includes breakfast only, Modified American Plan (MAP) includes breakfast + lunch or dinner, American Plan (AP) includes all meals. You can upgrade your meal plan anytime during your stay.',
      popular: false
    },
    {
      id: 12,
      category: 'transportation',
      question: 'How do I reach Alpine Escape by road?',
      answer: 'From Delhi: Take NH44 to Chandigarh, then NH3 to Manali (520km total, 10-12 hours). The route is scenic but involves mountain driving. GPS coordinates: 32.2396°N, 77.1887°E. We provide detailed driving directions and can arrange local guides for the mountain section if needed.',
      popular: false
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const helpfulResources = [
    {
      title: 'Booking Guide',
      description: 'Step-by-step guide to booking your perfect mountain adventure',
      icon: BookOpen,
      link: '#booking-guide'
    },
    {
      title: 'Activity Calendar',
      description: 'Check seasonal activities and weather-dependent schedules',
      icon: Calendar,
      link: '#activities-calendar'
    },
    {
      title: 'Packing Checklist',
      description: 'Essential items for your Himalayan adventure',
      icon: Mountain,
      link: '#packing-list'
    },
    {
      title: 'Contact Support',
      description: '24/7 customer support for immediate assistance',
      icon: Phone,
      link: '#contact'
    }
  ];

  return (
    <section id="faq" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-blue-50 to-forest-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about Alpine Escape. Our comprehensive FAQ covers 
              booking, accommodation, activities, and everything you need to know for your mountain adventure.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">45+ Questions Answered</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Updated Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-forest-700 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Popular Questions */}
          {selectedCategory === 'all' && searchTerm === '' && (
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-8">Most Popular Questions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {popularFAQs.map((faq) => (
                  <Card key={faq.id} className="p-6 hover-lift cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">Popular</span>
                        </div>
                        <h4 className="text-lg font-semibold text-forest-900 mb-2">{faq.question}</h4>
                        {openFAQ === faq.id && (
                          <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                        )}
                      </div>
                      <div className="ml-4">
                        {openFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-stone-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-stone-400" />
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Questions */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-8">
              {selectedCategory === 'all' ? 'All Questions' : faqCategories.find(c => c.id === selectedCategory)?.name}
              <span className="text-stone-500 font-normal ml-2">({filteredFAQs.length})</span>
            </h3>
            
            {filteredFAQs.length === 0 ? (
              <Card className="p-8 text-center">
                <HelpCircle className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-stone-700 mb-2">No questions found</h4>
                <p className="text-stone-600 mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left hover:bg-stone-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-forest-900 pr-4">{faq.question}</h4>
                        <div className="flex items-center space-x-2">
                          {faq.popular && (
                            <Star className="w-4 h-4 text-amber-500 fill-current" />
                          )}
                          {openFAQ === faq.id ? (
                            <ChevronUp className="w-5 h-5 text-stone-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-stone-400" />
                          )}
                        </div>
                      </div>
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-stone-200 pt-4">
                          <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Helpful Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-8 text-center">Helpful Resources</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpfulResources.map((resource, index) => (
                <Card key={index} className="p-6 text-center hover-lift">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-forest-700" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-forest-900 mb-2">{resource.title}</h4>
                  <p className="text-stone-600 text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Still Need Help */}
          <Card className="p-8 bg-forest-50">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-forest-700 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4">
                Still Need Help?
              </h3>
              <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our mountain experts are available 24/7 
                to assist with any questions about your Alpine Escape adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;