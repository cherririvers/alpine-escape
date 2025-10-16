import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Car, Plane, Train, Bus,
  Navigation, Mountain, TreePine, Camera, Compass, Star,
  Send, User, MessageCircle, AlertCircle, CheckCircle,
  Globe, Wifi, Shield, Award, Heart, Eye, Calendar,
  Route, Fuel, ParkingCircle, Utensils, ShoppingBag
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { openWhatsApp, formatContactMessage } from '../../utils/whatsapp';

const LocationContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    address: {
      line1: 'Alpine Escape Lodge',
      line2: 'Near Mall Road, Shimla',
      city: 'Shimla, Himachal Pradesh 171001',
      country: 'India',
      coordinates: { lat: 31.1048, lng: 77.1734 }
    },
    phone: {
      primary: '+91 98765 43210',
      secondary: '+91 98765 43211',
      emergency: '+91 98765 43212'
    },
    email: {
      reservations: 'stay@alpineescape.in',
      info: 'info@alpineescape.in',
      emergency: 'emergency@alpineescape.in'
    },
    hours: {
      reception: '24/7',
      restaurant: '7:00 AM - 10:30 PM',
      activities: '6:00 AM - 8:00 PM',
      emergency: '24/7'
    }
  };

  const transportationOptions = [
    {
      type: 'flight',
      icon: Plane,
      title: 'By Air',
      description: 'Fly to Shimla Airport or Chandigarh Airport',
      details: [
        'Shimla Airport: 22 km from Alpine Escape',
        'Chandigarh Airport: 117 km from lodge',
        'Airport pickup available (₹1,500)',
        'Helicopter transfers available'
      ],
      duration: '1.5 hours + 1 hour drive',
      cost: 'From ₹6,000 + transfer'
    },
    {
      type: 'car',
      icon: Car,
      title: 'By Road',
      description: 'Scenic drive through mountain highways',
      details: [
        'Distance: 342 km from Delhi',
        'Well-maintained mountain roads',
        'Parking available at lodge',
        'GPS coordinates provided'
      ],
      duration: '7-8 hours from Delhi',
      cost: 'Fuel + tolls (~₹2,500)'
    },
    {
      type: 'bus',
      icon: Bus,
      title: 'By Bus',
      description: 'Comfortable Volvo buses available',
      details: [
        'Regular services from Delhi/Chandigarh',
        'AC and non-AC options',
        'Pickup from Shimla bus stand',
        'Advance booking recommended'
      ],
      duration: '8-10 hours from Delhi',
      cost: 'From ₹800 - ₹2,000'
    },
    {
      type: 'train',
      icon: Train,
      title: 'By Train + Road',
      description: 'Train to Chandigarh, then road journey',
      details: [
        'Train to Chandigarh (8 hours)',
        'Road journey: 117 km (3 hours)',
        'Most economical option',
        'Scenic mountain route'
      ],
      duration: '11-12 hours total',
      cost: 'From ₹1,500 total'
    }
  ];

  const nearbyAttractions = [
    {
      name: 'Mall Road Shimla',
      distance: '2 km',
      type: 'Shopping & Dining',
      description: 'Famous pedestrian mall with shops, cafes, and mountain views',
      activities: ['Shopping', 'Dining', 'Photography'],
      rating: 4.6,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Jakhu Temple',
      distance: '3 km',
      type: 'Religious Site',
      description: 'Ancient Hanuman temple with panoramic city views',
      activities: ['Temple visit', 'Trekking', 'City views'],
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Kufri',
      distance: '16 km',
      type: 'Hill Station',
      description: 'Scenic hill station famous for skiing and horse riding',
      activities: ['Skiing', 'Horse riding', 'Nature walks'],
      rating: 4.4,
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Christ Church',
      distance: '1.5 km',
      type: 'Historical Site',
      description: 'Neo-Gothic church and one of Shimla\'s most famous landmarks',
      activities: ['Architecture tour', 'Photography', 'History'],
      rating: 4.7,
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Summer Hill',
      distance: '5 km',
      type: 'Scenic Viewpoint',
      description: 'Beautiful hilltop area with university and scenic views',
      activities: ['Nature walks', 'Photography', 'Picnics'],
      rating: 4.3,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'The Ridge',
      distance: '1 km',
      type: 'Cultural Hub',
      description: 'Open space in the heart of Shimla with cultural events',
      activities: ['Cultural events', 'Photography', 'City views'],
      rating: 4.8,
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const emergencyServices = [
    { name: 'Alpine Escape Emergency', phone: '+91 98765 43212', available: '24/7' },
    { name: 'Local Police Station', phone: '+91 1902 253100', available: '24/7' },
    { name: 'District Hospital Manali', phone: '+91 1902 252053', available: '24/7' },
    { name: 'Tourist Helpline', phone: '+91 1372 265531', available: '24/7' },
    { name: 'Mountain Rescue', phone: '+91 98765 00000', available: '24/7' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = formatContactMessage({
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        subject: contactForm.subject,
        message: contactForm.message,
        preferredContact: contactForm.preferredContact,
        urgency: contactForm.urgency
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      openWhatsApp(message);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-white">
        <div className="section-padding">
          <div className="container-max">
            <Card className="max-w-2xl mx-auto p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">
                Message Sent via WhatsApp!
              </h2>
              <p className="text-xl text-stone-600 mb-6">
                Your inquiry has been sent to our team via WhatsApp. We'll respond within 24 hours.
              </p>
              <div className="bg-forest-50 rounded-lg p-4 mb-6">
                <p className="text-forest-800">
                  <strong>What's Next:</strong> Our mountain experts will review your inquiry on WhatsApp and provide
                  personalized recommendations for your perfect Himalayan adventure.
                </p>
              </div>
              <Button 
                variant="primary" 
                onClick={() => {
                  setIsSubmitted(false);
                  setContactForm({
                    name: '', email: '', phone: '', subject: 'general',
                    message: '', preferredContact: 'email', urgency: 'normal'
                  });
                }}
              >
                Send Another Message
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-forest-50 to-stone-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Location & Contact
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Nestled at 3,200 meters in the heart of the Himalayas, Alpine Escape is easily accessible 
              yet perfectly secluded. Plan your journey and get in touch with our mountain experts.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Himachal Pradesh</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Mountain className="w-5 h-5" />
                <span className="font-medium">3,200m Altitude</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Phone className="w-5 h-5" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Overview */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Map Placeholder */}
            <Card className="p-8">
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">Our Location</h3>
              <div className="aspect-video rounded-lg mb-6 overflow-hidden shadow-lg">
                <div className="relative w-full h-full bg-gradient-to-br from-forest-100 to-stone-100 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Shimla Mountain Location - Alpine Escape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
                      <MapPin className="w-8 h-8 text-forest-700 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-forest-900 mb-2">Alpine Escape Location</h4>
                      <p className="text-stone-700 mb-3">Shimla, Himachal Pradesh</p>
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => window.open('https://maps.google.com/?q=Shimla,Himachal+Pradesh', '_blank')}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-forest-600 mt-1" />
                  <div>
                    <div className="font-semibold text-forest-900">{contactInfo.address.line1}</div>
                    <div className="text-stone-600">Near Mall Road, Shimla</div>
                    <div className="text-stone-600">Shimla, Himachal Pradesh 171001</div>
                    <div className="text-stone-600">{contactInfo.address.country}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Navigation className="w-5 h-5 text-forest-600" />
                  <span className="text-stone-700">GPS: 31.1048, 77.1734</span>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="text-xl font-semibold text-forest-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-forest-600" />
                  Phone Numbers
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Reservations:</span>
                    <a href={`tel:${contactInfo.phone.primary}`} className="font-semibold text-forest-900 hover:text-amber-600">
                      {contactInfo.phone.primary}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">General Inquiries:</span>
                    <a href={`tel:${contactInfo.phone.secondary}`} className="font-semibold text-forest-900 hover:text-amber-600">
                      {contactInfo.phone.secondary}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Emergency:</span>
                    <a href={`tel:${contactInfo.phone.emergency}`} className="font-semibold text-red-600 hover:text-red-700">
                      {contactInfo.phone.emergency}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-xl font-semibold text-forest-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-forest-600" />
                  Email Addresses
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Reservations:</span>
                    <a href={`mailto:${contactInfo.email.reservations}`} className="font-semibold text-forest-900 hover:text-amber-600">
                      {contactInfo.email.reservations}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Information:</span>
                    <a href={`mailto:${contactInfo.email.info}`} className="font-semibold text-forest-900 hover:text-amber-600">
                      {contactInfo.email.info}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Emergency:</span>
                    <a href={`mailto:${contactInfo.email.emergency}`} className="font-semibold text-red-600 hover:text-red-700">
                      {contactInfo.email.emergency}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-xl font-semibold text-forest-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-forest-600" />
                  Operating Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Reception:</span>
                    <span className="font-semibold text-forest-900">{contactInfo.hours.reception}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Restaurant:</span>
                    <span className="font-semibold text-forest-900">{contactInfo.hours.restaurant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Activities:</span>
                    <span className="font-semibold text-forest-900">{contactInfo.hours.activities}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Emergency:</span>
                    <span className="font-semibold text-red-600">{contactInfo.hours.emergency}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Transportation Options */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
                How to Reach Alpine Escape
              </h3>
              <p className="text-xl text-stone-700 max-w-3xl mx-auto">
                Multiple convenient transportation options to reach our mountain paradise from major Indian cities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transportationOptions.map((option, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-forest-700" />
                    </div>
                    <h4 className="text-xl font-semibold text-forest-900">{option.title}</h4>
                  </div>
                  <p className="text-stone-600 mb-4">{option.description}</p>
                  <div className="space-y-2 mb-4">
                    {option.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-stone-200 pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-stone-500" />
                      <span className="text-sm text-stone-600">{option.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-stone-500" />
                      <span className="text-sm font-semibold text-forest-900">{option.cost}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking & Reservations</option>
                    <option value="activities">Activities & Packages</option>
                    <option value="dining">Dining & Events</option>
                    <option value="transportation">Transportation</option>
                    <option value="feedback">Feedback & Reviews</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Tell us about your mountain adventure plans..."
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      value={contactForm.preferredContact}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Urgency
                    </label>
                    <select
                      value={contactForm.urgency}
                      onChange={(e) => handleInputChange('urgency', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    >
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="urgent">Urgent (within 24 hours)</option>
                      <option value="emergency">Emergency (immediate)</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Opening WhatsApp...'
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Emergency Contacts */}
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="text-xl font-semibold text-forest-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                  Emergency Contacts
                </h4>
                <div className="space-y-3">
                  {emergencyServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-medium text-forest-900">{service.name}</div>
                        <div className="text-sm text-stone-600">{service.available}</div>
                      </div>
                      <a
                        href={`tel:${service.phone}`}
                        className="font-semibold text-red-600 hover:text-red-700"
                      >
                        {service.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-xl font-semibold text-forest-900 mb-4">Quick Response Promise</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-stone-700">General inquiries: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-stone-700">Booking requests: Within 12 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-stone-700">Urgent matters: Within 6 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-stone-700">Emergencies: Immediate response</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-forest-50">
                <h4 className="text-lg font-semibold text-forest-900 mb-3">24/7 Guest Support</h4>
                <p className="text-stone-700 text-sm mb-4">
                  Our mountain experts are available round-the-clock to assist with any questions, 
                  emergencies, or special requests during your stay.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
                Nearby Attractions & Activities
              </h3>
              <p className="text-xl text-stone-700 max-w-3xl mx-auto">
                Explore the incredible destinations and experiences within easy reach of Alpine Escape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nearbyAttractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold text-forest-900">{attraction.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-sm font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-3 text-sm text-stone-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{attraction.distance}</span>
                      </div>
                      <span className="bg-forest-100 text-forest-700 px-2 py-1 rounded-full text-xs">
                        {attraction.type}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-4">{attraction.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {attraction.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="bg-stone-100 text-stone-700 px-2 py-1 rounded-full text-xs"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Ready to Plan Your Mountain Adventure?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Our mountain experts are here to help you plan every detail of your perfect Himalayan getaway. 
            Contact us today to start your adventure planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Mountain Experts
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Calendar className="w-5 h-5 mr-2" />
              Plan Your Trip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContactSection;