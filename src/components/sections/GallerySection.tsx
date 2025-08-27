import React, { useState, useEffect } from 'react';
import { 
  Camera, Play, X, ChevronLeft, ChevronRight, Mountain, 
  Users, Star, Award, Eye, Heart, Share2, Download,
  Filter, Grid3X3, List, Search, Calendar, MapPin,
  Maximize2, ZoomIn, ZoomOut, RotateCw, Image as ImageIcon
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'list'>('grid');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<any>(null);

  const galleryCategories = [
    { id: 'all', name: 'All Photos', count: 156 },
    { id: 'landscapes', name: 'Mountain Landscapes', count: 45 },
    { id: 'activities', name: 'Adventure Activities', count: 38 },
    { id: 'rooms', name: 'Rooms & Interiors', count: 28 },
    { id: 'dining', name: 'Dining Experience', count: 22 },
    { id: 'events', name: 'Events & Celebrations', count: 15 },
    { id: 'wildlife', name: 'Wildlife & Nature', count: 8 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sunrise Over Himalayan Peaks',
      category: 'landscapes',
      description: 'Golden hour illuminating the majestic mountain ranges surrounding Alpine Escape',
      photographer: 'Vikram Singh',
      date: '2024-12-10',
      location: 'Summit Viewpoint',
      likes: 234,
      views: 1520,
      tags: ['sunrise', 'mountains', 'golden hour', 'peaks']
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Skiing Adventure in Fresh Powder',
      category: 'activities',
      description: 'Guests enjoying world-class skiing on pristine Himalayan slopes',
      photographer: 'Adventure Team',
      date: '2024-12-08',
      location: 'North Face Slopes',
      likes: 189,
      views: 980,
      tags: ['skiing', 'powder', 'adventure', 'winter']
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cozy Mountain Cabin Interior',
      category: 'rooms',
      description: 'Rustic luxury meets modern comfort in our signature mountain cabins',
      photographer: 'Interior Team',
      date: '2024-12-05',
      location: 'Mountain Cabin Suite',
      likes: 156,
      views: 750,
      tags: ['interior', 'cozy', 'rustic', 'luxury']
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mountain Trekking Expedition',
      category: 'activities',
      description: 'Guided trekking through scenic mountain trails with breathtaking views',
      photographer: 'Rajesh Sharma',
      date: '2024-12-03',
      location: 'Eagle Trail',
      likes: 201,
      views: 1100,
      tags: ['trekking', 'hiking', 'trails', 'adventure']
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Summit Restaurant Fine Dining',
      category: 'dining',
      description: 'Exquisite mountain cuisine served with panoramic Himalayan views',
      photographer: 'Culinary Team',
      date: '2024-12-01',
      location: 'Summit Restaurant',
      likes: 143,
      views: 620,
      tags: ['dining', 'cuisine', 'restaurant', 'views']
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Campfire Under Starlit Sky',
      category: 'activities',
      description: 'Magical evening around the campfire with traditional music and storytelling',
      photographer: 'Cultural Team',
      date: '2024-11-28',
      location: 'Campfire Circle',
      likes: 278,
      views: 1450,
      tags: ['campfire', 'stars', 'evening', 'culture']
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Rock Climbing Adventure',
      category: 'activities',
      description: 'Challenging rock climbing routes with professional safety equipment',
      photographer: 'Adventure Team',
      date: '2024-11-25',
      location: 'Granite Wall',
      likes: 167,
      views: 890,
      tags: ['climbing', 'rocks', 'adventure', 'challenge']
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Luxury Suite with Mountain Views',
      category: 'rooms',
      description: 'Presidential suite featuring panoramic mountain vistas and premium amenities',
      photographer: 'Interior Team',
      date: '2024-11-22',
      location: 'Presidential Suite',
      likes: 192,
      views: 1020,
      tags: ['suite', 'luxury', 'views', 'premium']
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sunrise Café Morning Ambiance',
      category: 'dining',
      description: 'Perfect morning coffee with stunning sunrise views over the peaks',
      photographer: 'Café Team',
      date: '2024-11-20',
      location: 'Sunrise Café',
      likes: 134,
      views: 580,
      tags: ['café', 'coffee', 'morning', 'sunrise']
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Wedding Celebration in the Mountains',
      category: 'events',
      description: 'Magical mountain wedding with breathtaking backdrop and traditional ceremonies',
      photographer: 'Event Team',
      date: '2024-11-18',
      location: 'Wedding Pavilion',
      likes: 312,
      views: 1890,
      tags: ['wedding', 'celebration', 'mountains', 'ceremony']
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mountain Biking Trail Adventure',
      category: 'activities',
      description: 'Thrilling mountain biking through scenic forest trails and rocky terrain',
      photographer: 'Adventure Team',
      date: '2024-11-15',
      location: 'Forest Trail',
      likes: 145,
      views: 720,
      tags: ['biking', 'trails', 'forest', 'adventure']
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Himalayan Wildlife Photography',
      category: 'wildlife',
      description: 'Rare glimpse of Himalayan wildlife in their natural mountain habitat',
      photographer: 'Wildlife Expert',
      date: '2024-11-12',
      location: 'Wildlife Sanctuary',
      likes: 89,
      views: 450,
      tags: ['wildlife', 'photography', 'nature', 'himalayan']
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: 'Amazing Skiing Experience',
      thumbnail: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '2:45',
      guest: 'Sarah & Mike Johnson',
      location: 'USA',
      description: 'Our incredible skiing adventure at Alpine Escape with world-class slopes and professional instruction.',
      rating: 5,
      date: '2024-12-01'
    },
    {
      id: 2,
      title: 'Mountain Trekking Adventure',
      thumbnail: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '3:20',
      guest: 'Priya & Arjun Patel',
      location: 'Mumbai, India',
      description: 'Five days of breathtaking trekking through the Himalayas with expert guides and stunning views.',
      rating: 5,
      date: '2024-11-28'
    },
    {
      id: 3,
      title: 'Perfect Mountain Wedding',
      thumbnail: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '4:15',
      guest: 'Ravi & Meera Sharma',
      location: 'Delhi, India',
      description: 'Our dream mountain wedding came true at Alpine Escape with perfect weather and magical moments.',
      rating: 5,
      date: '2024-11-25'
    },
    {
      id: 4,
      title: 'Family Adventure Getaway',
      thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '3:50',
      guest: 'The Kumar Family',
      location: 'Bangalore, India',
      description: 'Perfect family vacation with activities for all ages and memories that will last forever.',
      rating: 5,
      date: '2024-11-20'
    }
  ];

  const virtualTours = [
    {
      id: 1,
      title: '360° Lodge Tour',
      thumbnail: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Complete virtual walkthrough of Alpine Escape Lodge facilities',
      duration: '8:30',
      views: 2340
    },
    {
      id: 2,
      title: 'Room & Suite Showcase',
      thumbnail: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Detailed tour of all room categories and luxury suites',
      duration: '6:15',
      views: 1890
    },
    {
      id: 3,
      title: 'Adventure Activities Preview',
      thumbnail: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Experience our adventure activities through immersive 360° footage',
      duration: '12:45',
      views: 3120
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const openVideoModal = (video: any) => {
    setCurrentVideo(video);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo(null);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Gallery & Media
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in the breathtaking beauty of Alpine Escape through our curated collection 
              of photography, guest testimonials, and virtual tours showcasing the ultimate mountain experience.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <Camera className="w-5 h-5" />
                <span className="font-medium">Professional Photography</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Play className="w-5 h-5" />
                <span className="font-medium">Video Testimonials</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Eye className="w-5 h-5" />
                <span className="font-medium">Virtual Tours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Controls */}
      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
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

            {/* Search and View Controls */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                />
              </div>
              <div className="flex border border-stone-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-forest-700 text-white' : 'bg-white text-stone-700 hover:bg-stone-50'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-forest-700 text-white' : 'bg-white text-stone-700 hover:bg-stone-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className={`grid gap-6 mb-16 ${
            viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 
            'grid-cols-1'
          }`}>
            {filteredImages.map((image, index) => (
              <Card key={image.id} className="overflow-hidden hover-lift group cursor-pointer">
                <div 
                  className="relative aspect-[4/3] overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold mb-1">{image.title}</h4>
                    <p className="text-sm text-stone-200">{image.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                {viewMode === 'list' && (
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-forest-900 mb-2">{image.title}</h4>
                    <p className="text-stone-600 mb-4">{image.description}</p>
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <div className="flex items-center space-x-4">
                        <span>By {image.photographer}</span>
                        <span>{image.date}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{image.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{image.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
                Guest Video Testimonials
              </h3>
              <p className="text-xl text-stone-700 max-w-3xl mx-auto">
                Hear directly from our guests about their unforgettable mountain adventures and experiences at Alpine Escape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videoTestimonials.map((video) => (
                <Card key={video.id} className="overflow-hidden hover-lift group cursor-pointer">
                  <div 
                    className="relative aspect-video overflow-hidden"
                    onClick={() => openVideoModal(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-forest-900 mb-2">{video.title}</h4>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(video.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-stone-600 mb-2">{video.guest}</p>
                    <p className="text-xs text-stone-500">{video.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Virtual Tours */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif font-bold text-forest-900 mb-6">
                Virtual Tours
              </h3>
              <p className="text-xl text-stone-700 max-w-3xl mx-auto">
                Explore Alpine Escape from the comfort of your home with our immersive 360° virtual tours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {virtualTours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover-lift group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      360° Tour
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-forest-900 mb-3">{tour.title}</h4>
                    <p className="text-stone-600 mb-4">{tour.description}</p>
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{tour.views.toLocaleString()} views</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Start Tour
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && filteredImages[currentImageIndex] && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="max-w-6xl max-h-full flex items-center justify-center">
              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{filteredImages[currentImageIndex].title}</h3>
                  <p className="text-stone-200 mb-2">{filteredImages[currentImageIndex].description}</p>
                  <div className="flex items-center space-x-4 text-sm text-stone-300">
                    <span>📸 {filteredImages[currentImageIndex].photographer}</span>
                    <span>📍 {filteredImages[currentImageIndex].location}</span>
                    <span>📅 {filteredImages[currentImageIndex].date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{filteredImages[currentImageIndex].likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{filteredImages[currentImageIndex].views}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && currentVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl bg-white">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-forest-900">
                  {currentVideo.title}
                </h3>
                <button
                  onClick={closeVideoModal}
                  className="text-stone-400 hover:text-stone-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-video bg-stone-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                  <p className="text-stone-600">Video player would be embedded here</p>
                  <p className="text-sm text-stone-500 mt-2">Duration: {currentVideo.duration}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-forest-900 mb-2">Guest Review</h4>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(currentVideo.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-2">{currentVideo.description}</p>
                  <div className="text-sm text-stone-500">
                    <p>{currentVideo.guest}</p>
                    <p>{currentVideo.location}</p>
                    <p>{currentVideo.date}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-4">More Testimonials</h4>
                  <div className="space-y-3">
                    {videoTestimonials.filter(v => v.id !== currentVideo.id).slice(0, 3).map((video) => (
                      <div key={video.id} className="flex items-center space-x-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition-colors duration-200">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-forest-900 text-sm">{video.title}</h5>
                          <p className="text-xs text-stone-600">{video.guest}</p>
                        </div>
                        <div className="text-xs text-stone-500">{video.duration}</div>
                      </div>
                    ))}
                  </div>
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
            Ready to Create Your Own Mountain Memories?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Join thousands of adventurers who have experienced the magic of Alpine Escape. 
            Book your mountain adventure today and become part of our story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Camera className="w-5 h-5 mr-2" />
              Book Photography Tour
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Mountain className="w-5 h-5 mr-2" />
              Plan Your Adventure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;