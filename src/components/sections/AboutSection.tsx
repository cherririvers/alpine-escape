import React from 'react';
import { Mountain, Award, Users, Heart, Shield, Leaf, Clock, Star } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Excellence Awards',
      value: '15+',
      description: 'Tourism & hospitality awards'
    },
    {
      icon: Users,
      title: 'Happy Guests',
      value: '5000+',
      description: 'Satisfied adventurers'
    },
    {
      icon: Mountain,
      title: 'Years Experience',
      value: '12+',
      description: 'Mountain hospitality expertise'
    },
    {
      icon: Star,
      title: 'Guest Rating',
      value: '4.8/5',
      description: 'Consistently excellent reviews'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'Every guest experience is crafted with genuine care and mountain hospitality.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Professional guides and safety equipment ensure worry-free adventures.'
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Sustainable practices that preserve the pristine mountain environment.'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '24/7 support for all your mountain adventure needs and emergencies.'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & Managing Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '15+ years in mountain tourism',
      description: 'Former mountaineer turned hospitality expert, passionate about sharing Himalayan adventures.'
    },
    {
      name: 'Priya Mehta',
      role: 'Head of Guest Experience',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '10+ years in luxury hospitality',
      description: 'Ensures every guest feels at home while experiencing the thrill of mountain adventures.'
    },
    {
      name: 'Vikram Singh',
      role: 'Chief Adventure Guide',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: 'Certified mountain guide',
      description: 'Local expert with intimate knowledge of every trail, peak, and hidden gem in the region.'
    }
  ];

  return (
    <section id="about" className="bg-white">
      {/* Hero About */}
      <div className="section-padding bg-gradient-to-br from-forest-50 to-stone-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
                Our Mountain Story
              </h2>
              <p className="text-xl text-stone-700 mb-6 leading-relaxed">
                Nestled at 3,200 meters in the heart of the Himalayas, Alpine Escape began as a dream 
                to share the raw beauty and adventure of India's most spectacular mountains.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Founded in 2012 by passionate mountaineer Rajesh Sharma, our lodge has grown from a 
                simple mountain refuge into India's premier adventure destination, while never losing 
                our commitment to authentic mountain hospitality and sustainable tourism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Our Story
                </Button>
                <Button variant="outline" size="lg">
                  Meet the Team
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Alpine Escape Lodge"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Recognized Excellence
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our commitment to exceptional mountain experiences has earned recognition 
              from guests and industry experts alike.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-8 hover-lift">
                <div className="flex justify-center mb-4">
                  <achievement.icon className="w-12 h-12 text-amber-500" />
                </div>
                <div className="text-3xl font-bold text-forest-900 mb-2">
                  {achievement.value}
                </div>
                <h4 className="text-lg font-semibold text-forest-800 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-stone-600 text-sm">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Our Mission & Values
            </h3>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              To provide authentic mountain experiences that connect adventurers with nature's grandeur, 
              while preserving the pristine beauty of the Himalayas for future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} variant="rustic" className="p-6 text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-10 h-10 text-forest-700" />
                </div>
                <h4 className="text-xl font-semibold text-forest-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
              Meet Our Mountain Experts
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our passionate team combines decades of mountain expertise with genuine 
              hospitality to create unforgettable adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-forest-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-amber-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-forest-700 font-medium mb-3">
                    {member.experience}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Heritage & Certifications */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-6">
                Mountain Heritage & Certifications
              </h3>
              <p className="text-xl text-stone-200 mb-6 leading-relaxed">
                Our lodge is built on respect for local mountain culture and traditions, 
                working closely with local communities to preserve authentic Himalayan heritage.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span className="text-stone-200">Certified Sustainable Tourism Operator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-amber-400" />
                  <span className="text-stone-200">Licensed Adventure Tourism Provider</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6 text-amber-400" />
                  <span className="text-stone-200">Eco-Tourism Excellence Award Winner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="w-6 h-6 text-amber-400" />
                  <span className="text-stone-200">Member of Himalayan Adventure Association</span>
                </div>
              </div>

              <Button variant="secondary" size="lg">
                View All Certifications
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Mountain Culture"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Local Heritage"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Sustainable Practices"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Community Partnership"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-amber-50">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
            Ready to Experience Alpine Escape?
          </h3>
          <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto">
            Join thousands of adventurers who have discovered the magic of the Himalayas 
            with our expert team and authentic mountain hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Book Your Adventure
            </Button>
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;