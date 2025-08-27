import React, { useState } from 'react';
import { 
  Calendar, User, Clock, ArrowRight, Search, Filter, 
  Tag, Eye, Heart, Share2, MessageCircle, BookOpen,
  Mountain, TreePine, Camera, Award, Users, Star,
  ChevronLeft, ChevronRight, Rss, Bell, Mail
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const BlogNewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const blogCategories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'adventures', name: 'Adventure Stories', count: 8 },
    { id: 'guides', name: 'Travel Guides', count: 6 },
    { id: 'news', name: 'Lodge News', count: 5 },
    { id: 'tips', name: 'Mountain Tips', count: 3 },
    { id: 'events', name: 'Events & Updates', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'Winter Skiing Season Opens with Record Snowfall',
      excerpt: 'Alpine Escape welcomes the 2024-25 skiing season with 85cm of fresh powder and perfect conditions for all skill levels.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'news',
      author: 'Rajesh Sharma',
      date: '2024-12-15',
      readTime: '5 min read',
      views: 1240,
      likes: 89
    },
    {
      id: 2,
      title: 'Epic 7-Day Himalayan Trek: Guest Adventure Story',
      excerpt: 'Follow Sarah and Mike\'s incredible journey through pristine mountain trails, challenging peaks, and unforgettable moments.',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'adventures',
      author: 'Adventure Team',
      date: '2024-12-12',
      readTime: '8 min read',
      views: 2150,
      likes: 156
    },
    {
      id: 3,
      title: 'Complete Guide to Mountain Photography in Winter',
      excerpt: 'Professional tips for capturing stunning winter landscapes, wildlife, and adventure moments in the Himalayas.',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'guides',
      author: 'Vikram Singh',
      date: '2024-12-10',
      readTime: '12 min read',
      views: 1890,
      likes: 134
    }
  ];

  const blogPosts = [
    {
      id: 4,
      title: 'New Adventure Packages for 2025 Season',
      excerpt: 'Discover our exciting new adventure packages including helicopter skiing, multi-day treks, and photography expeditions.',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'news',
      author: 'Alpine Escape Team',
      date: '2024-12-08',
      readTime: '4 min read',
      views: 980,
      likes: 67,
      tags: ['packages', 'adventure', '2025']
    },
    {
      id: 5,
      title: 'Essential Packing List for Himalayan Adventures',
      excerpt: 'Complete guide to packing for mountain adventures, from base layers to technical equipment.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'tips',
      author: 'Mountain Guides',
      date: '2024-12-05',
      readTime: '6 min read',
      views: 1560,
      likes: 98,
      tags: ['packing', 'tips', 'equipment']
    },
    {
      id: 6,
      title: 'Guest Spotlight: The Wilson Family Adventure',
      excerpt: 'How a family of four from London discovered their love for mountain adventures at Alpine Escape.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'adventures',
      author: 'Guest Relations',
      date: '2024-12-02',
      readTime: '7 min read',
      views: 1340,
      likes: 112,
      tags: ['family', 'guests', 'adventure']
    },
    {
      id: 7,
      title: 'Sustainable Tourism: Our Environmental Commitment',
      excerpt: 'Learn about Alpine Escape\'s initiatives to preserve the pristine Himalayan environment for future generations.',
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'news',
      author: 'Sustainability Team',
      date: '2024-11-28',
      readTime: '5 min read',
      views: 890,
      likes: 76,
      tags: ['sustainability', 'environment', 'commitment']
    },
    {
      id: 8,
      title: 'Best Time to Visit for Different Activities',
      excerpt: 'Seasonal guide to planning your perfect mountain adventure based on weather and activity availability.',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'guides',
      author: 'Weather Team',
      date: '2024-11-25',
      readTime: '9 min read',
      views: 2240,
      likes: 187,
      tags: ['seasons', 'planning', 'activities']
    },
    {
      id: 9,
      title: 'Alpine Escape Wins Best Adventure Resort 2024',
      excerpt: 'We\'re honored to receive the prestigious Best Adventure Resort award from Travel + Leisure India.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'news',
      author: 'Management Team',
      date: '2024-11-22',
      readTime: '3 min read',
      views: 1670,
      likes: 203,
      tags: ['award', 'recognition', 'achievement']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'adventures': return Mountain;
      case 'guides': return BookOpen;
      case 'news': return Bell;
      case 'tips': return Star;
      case 'events': return Calendar;
      default: return BookOpen;
    }
  };

  return (
    <section id="blog" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-forest-50 to-amber-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Blog & Mountain Stories
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Discover inspiring adventure stories, expert mountain guides, lodge updates, and insider tips 
              from our team of mountain experts and satisfied guests.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">24+ Stories</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Users className="w-5 h-5" />
                <span className="font-medium">Expert Authors</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Weekly Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts Carousel */}
      <div className="section-padding">
        <div className="container-max">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-serif font-bold text-forest-900">Featured Stories</h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevFeatured}
                  className="w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-stone-600" />
                </button>
                <button
                  onClick={nextFeatured}
                  className="w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-stone-600" />
                </button>
              </div>
            </div>

            <Card className="overflow-hidden hover-lift">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPosts[currentFeaturedIndex].image}
                    alt={featuredPosts[currentFeaturedIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {featuredPosts[currentFeaturedIndex].category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-stone-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPosts[currentFeaturedIndex].views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{featuredPosts[currentFeaturedIndex].likes}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-forest-900 mb-4">
                    {featuredPosts[currentFeaturedIndex].title}
                  </h3>
                  <p className="text-stone-600 text-lg leading-relaxed mb-6">
                    {featuredPosts[currentFeaturedIndex].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-stone-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPosts[currentFeaturedIndex].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPosts[currentFeaturedIndex].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPosts[currentFeaturedIndex].readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Featured Post Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeaturedIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeaturedIndex ? 'bg-forest-700 w-8' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
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

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <Card key={post.id} className="overflow-hidden hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="w-4 h-4 text-forest-600" />
                        <span className="text-sm font-medium text-forest-700 capitalize">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-stone-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-forest-900 mb-3 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-stone-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-stone-100 text-stone-600 px-2 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-stone-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Newsletter Signup */}
          <Card className="p-8 bg-forest-50">
            <div className="text-center">
              <Mail className="w-12 h-12 text-forest-700 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4">
                Stay Updated with Mountain Stories
              </h3>
              <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss an adventure story, travel guide, 
                or lodge update. Get exclusive content delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                />
                <Button variant="primary">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-stone-500 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Ready to Create Your Own Mountain Story?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Every adventure at Alpine Escape becomes a story worth telling. 
            Book your mountain experience and become part of our growing collection of amazing adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Mountain className="w-5 h-5 mr-2" />
              Book Your Adventure
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Rss className="w-5 h-5 mr-2" />
              Follow Our Blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;