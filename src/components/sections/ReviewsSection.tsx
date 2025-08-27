import React, { useState, useEffect } from 'react';
import { 
  Star, Quote, ChevronLeft, ChevronRight, User, Calendar, MapPin,
  ThumbsUp, Heart, Share2, Camera, Award, TrendingUp, Users,
  Instagram, Facebook, Twitter, Youtube, CheckCircle, Globe,
  Filter, Search, SortAsc, SortDesc, Eye, MessageCircle
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ReviewsSection: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showPhotoReviews, setShowPhotoReviews] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const overallRating = {
    average: 4.8,
    totalReviews: 1247,
    breakdown: {
      5: 856,
      4: 298,
      3: 67,
      2: 18,
      1: 8
    }
  };

  const featuredReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'California, USA',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      date: '2024-12-10',
      title: 'Absolutely Magical Mountain Experience!',
      review: 'Alpine Escape exceeded every expectation! The skiing was world-class, the staff incredibly welcoming, and the mountain views simply breathtaking. Our guide Vikram was exceptional - knowledgeable, safe, and made every moment memorable. The campfire dinner under the stars was the highlight of our trip. We\'ll definitely be back!',
      photos: [
        'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      ],
      experience: 'Skiing Adventure Package',
      helpful: 89,
      verified: true,
      response: {
        author: 'Alpine Escape Team',
        date: '2024-12-11',
        message: 'Thank you Sarah! We\'re thrilled you had such a wonderful time. Vikram will be delighted to hear your kind words. We look forward to welcoming you back for more mountain adventures!'
      }
    },
    {
      id: 2,
      name: 'Rajesh & Priya Patel',
      location: 'Mumbai, India',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      date: '2024-12-08',
      title: 'Perfect Honeymoon Destination',
      review: 'We chose Alpine Escape for our honeymoon and it was the best decision ever! The Presidential Suite was luxurious with stunning mountain views. The staff arranged a private dinner that was incredibly romantic. Every detail was perfect - from the welcome drinks to the sunrise trek. Highly recommend for couples!',
      photos: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      ],
      experience: 'Romantic Mountain Getaway',
      helpful: 76,
      verified: true,
      response: {
        author: 'Alpine Escape Team',
        date: '2024-12-09',
        message: 'Congratulations on your marriage! We\'re honored to have been part of your special celebration. Thank you for choosing Alpine Escape for such an important milestone.'
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      location: 'Singapore',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      date: '2024-12-05',
      title: 'Adventure of a Lifetime!',
      review: 'The 5-day trekking expedition was incredible! Professional guides, well-organized itinerary, and safety was clearly the top priority. The mountain landscapes were beyond words. Food was excellent even at high altitude. Equipment provided was top-quality. This is adventure tourism at its finest!',
      photos: [
        'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      ],
      experience: 'Mountain Trekking Expedition',
      helpful: 92,
      verified: true,
      response: {
        author: 'Rajesh Sharma, Founder',
        date: '2024-12-06',
        message: 'Thank you Michael! Safety and exceptional experiences are what we strive for. We\'re glad our team delivered on both fronts. Hope to see you on another adventure soon!'
      }
    },
    {
      id: 4,
      name: 'Emma & James Wilson',
      location: 'London, UK',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      date: '2024-12-02',
      title: 'Family Adventure Paradise',
      review: 'Brought our two teenagers here and everyone had an amazing time! Activities for all skill levels, patient instructors, and the family suite was perfect. Kids loved the rock climbing and we enjoyed the photography workshop. The cultural evening was educational and entertaining. Perfect family destination!',
      photos: [
        'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      ],
      experience: 'Family Adventure Package',
      helpful: 67,
      verified: true,
      response: {
        author: 'Alpine Escape Team',
        date: '2024-12-03',
        message: 'So wonderful to hear the whole family enjoyed their time with us! Creating memories for families is what we love most. Thank you for sharing your experience!'
      }
    }
  ];

  const quickReviews = [
    { name: 'Anita Sharma', rating: 5, text: 'Best mountain resort in India! Incredible service and views.', date: '2024-12-12' },
    { name: 'David Kim', rating: 5, text: 'Professional guides, amazing food, perfect weather. Highly recommend!', date: '2024-12-11' },
    { name: 'Lisa Rodriguez', rating: 4, text: 'Beautiful location and great activities. Room could be slightly larger.', date: '2024-12-10' },
    { name: 'Arjun Gupta', rating: 5, text: 'Exceeded expectations! The skiing was world-class.', date: '2024-12-09' },
    { name: 'Sophie Martin', rating: 5, text: 'Magical experience! Staff went above and beyond.', date: '2024-12-08' },
    { name: 'Ravi Kumar', rating: 5, text: 'Perfect for adventure lovers. Safety standards are excellent.', date: '2024-12-07' }
  ];

  const socialMediaPosts = [
    {
      platform: 'instagram',
      username: '@sarah_adventures',
      content: 'Just had the most incredible skiing experience at @alpineescape! The powder was perfect and the views... 😍 #AlpineEscape #SkiingLife #MountainViews',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      likes: 234,
      date: '2024-12-10'
    },
    {
      platform: 'instagram',
      username: '@travel_couple_rp',
      content: 'Honeymoon goals achieved! 💕 Thank you @alpineescape for the most romantic mountain getaway. Every moment was perfect! #Honeymoon #MountainLove #AlpineEscape',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      likes: 189,
      date: '2024-12-08'
    },
    {
      platform: 'facebook',
      username: 'Michael Chen',
      content: 'Just completed an amazing 5-day trek with Alpine Escape. Professional guides, stunning views, and memories for a lifetime. Highly recommend for adventure seekers!',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      likes: 156,
      date: '2024-12-05'
    },
    {
      platform: 'twitter',
      username: '@adventure_emma',
      content: 'Family trip to @AlpineEscape was absolutely perfect! Kids loved rock climbing, we enjoyed photography workshop. Something for everyone! 🏔️ #FamilyTravel #Adventure',
      likes: 89,
      date: '2024-12-02'
    }
  ];

  const awards = [
    { name: 'TripAdvisor Travelers\' Choice', year: '2024', icon: Award },
    { name: 'Best Adventure Resort India', year: '2024', icon: TrendingUp },
    { name: 'Excellence in Hospitality', year: '2023', icon: Star },
    { name: 'Sustainable Tourism Award', year: '2023', icon: Globe }
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

  const getRatingPercentage = (rating: number) => {
    return (overallRating.breakdown[rating as keyof typeof overallRating.breakdown] / overallRating.totalReviews) * 100;
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'facebook': return Facebook;
      case 'twitter': return Twitter;
      default: return Globe;
    }
  };

  return (
    <section id="reviews" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-amber-50 to-forest-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Guest Reviews & Testimonials
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Discover why thousands of adventurers choose Alpine Escape for their mountain getaways. 
              Read authentic reviews from guests who've experienced the magic of the Himalayas with us.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="font-medium">{overallRating.average}/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Users className="w-5 h-5" />
                <span className="font-medium">{overallRating.totalReviews.toLocaleString()} Reviews</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Verified Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Rating Summary */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Rating Overview */}
            <Card className="p-8 text-center">
              <div className="text-6xl font-bold text-forest-900 mb-4">{overallRating.average}</div>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                ))}
              </div>
              <div className="text-stone-600 mb-2">Based on {overallRating.totalReviews.toLocaleString()} reviews</div>
              <div className="text-sm text-stone-500">Excellent rating from verified guests</div>
            </Card>

            {/* Rating Breakdown */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-forest-900 mb-6">Rating Breakdown</h3>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-12">
                      <span className="text-sm font-medium">{rating}</span>
                      <Star className="w-3 h-3 text-amber-500 fill-current" />
                    </div>
                    <div className="flex-1 bg-stone-200 rounded-full h-2">
                      <div 
                        className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${getRatingPercentage(rating)}%` }}
                      />
                    </div>
                    <div className="text-sm text-stone-600 w-12 text-right">
                      {overallRating.breakdown[rating as keyof typeof overallRating.breakdown]}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Awards & Recognition */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-forest-900 mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <award.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-medium text-forest-900">{award.name}</div>
                      <div className="text-sm text-stone-600">{award.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Featured Review Carousel */}
          <Card className="p-8 mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif font-bold text-forest-900">Featured Reviews</h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-stone-600" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-stone-600" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
              >
                {featuredReviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Review Content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-4 mb-6">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-xl font-semibold text-forest-900">{review.name}</h4>
                              {review.verified && (
                                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                  <CheckCircle className="w-3 h-3" />
                                  <span>Verified</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 mb-3">
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                                ))}
                              </div>
                              <div className="flex items-center space-x-1 text-stone-500 text-sm">
                                <MapPin className="w-3 h-3" />
                                <span>{review.location}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-stone-500 text-sm">
                                <Calendar className="w-3 h-3" />
                                <span>{review.date}</span>
                              </div>
                            </div>
                            <h5 className="text-lg font-semibold text-forest-900 mb-3">{review.title}</h5>
                            <p className="text-stone-700 leading-relaxed mb-4">{review.review}</p>
                            <div className="flex items-center space-x-4 text-sm text-stone-500">
                              <span className="bg-forest-100 text-forest-700 px-3 py-1 rounded-full">
                                {review.experience}
                              </span>
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{review.helpful} found helpful</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Management Response */}
                        {review.response && (
                          <div className="bg-forest-50 rounded-lg p-4 ml-20">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-8 h-8 bg-forest-700 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium text-forest-900">{review.response.author}</div>
                                <div className="text-xs text-stone-500">{review.response.date}</div>
                              </div>
                            </div>
                            <p className="text-stone-700 text-sm">{review.response.message}</p>
                          </div>
                        )}
                      </div>

                      {/* Review Photos */}
                      <div>
                        <h5 className="font-semibold text-forest-900 mb-4">Guest Photos</h5>
                        <div className="grid grid-cols-2 gap-3">
                          {review.photos.map((photo, idx) => (
                            <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                              <img
                                src={photo}
                                alt={`Review photo ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex ? 'bg-forest-700 w-8' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </Card>

          {/* Quick Reviews Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-8 text-center">Recent Reviews</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickReviews.map((review, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-700 mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between text-sm text-stone-500">
                    <span className="font-medium">{review.name}</span>
                    <span>{review.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media Reviews */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-8 text-center">Social Media Love</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialMediaPosts.map((post, index) => {
                const SocialIcon = getSocialIcon(post.platform);
                return (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-center space-x-3 mb-4">
                      <SocialIcon className="w-5 h-5 text-forest-700" />
                      <span className="font-medium text-forest-900">{post.username}</span>
                    </div>
                    {post.image && (
                      <div className="aspect-square overflow-hidden rounded-lg mb-4">
                        <img
                          src={post.image}
                          alt="Social media post"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className="text-stone-700 text-sm mb-4">{post.content}</p>
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Ready to Create Your Own Alpine Escape Story?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied guests who've discovered the magic of the Himalayas. 
            Book your mountain adventure today and share your own amazing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Star className="w-5 h-5 mr-2" />
              Book Your Adventure
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <MessageCircle className="w-5 h-5 mr-2" />
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;