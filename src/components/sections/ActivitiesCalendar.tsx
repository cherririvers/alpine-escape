import React, { useState, useEffect } from 'react';
import { 
  Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin, 
  Thermometer, Cloud, Sun, CloudRain, Snowflake, Wind,
  Mountain, TreePine, Camera, Flame, Compass, Star,
  AlertTriangle, CheckCircle, Info, Award
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ActivitiesCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [weatherData, setWeatherData] = useState({
    temperature: 12,
    condition: 'partly-cloudy',
    humidity: 65,
    windSpeed: 15,
    visibility: 'excellent'
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Sample activities data with seasonal variations
  const dailyActivities = {
    morning: [
      { time: '06:00', name: 'Sunrise Photography', duration: '2h', difficulty: 'Easy', participants: 8, guide: 'Vikram Singh' },
      { time: '07:30', name: 'Mountain Yoga', duration: '1h', difficulty: 'Easy', participants: 12, guide: 'Priya Mehta' },
      { time: '09:00', name: 'Guided Nature Walk', duration: '3h', difficulty: 'Moderate', participants: 15, guide: 'Rajesh Sharma' }
    ],
    afternoon: [
      { time: '14:00', name: 'Rock Climbing Session', duration: '4h', difficulty: 'Advanced', participants: 6, guide: 'Vikram Singh' },
      { time: '15:30', name: 'Mountain Biking Trail', duration: '3h', difficulty: 'Moderate', participants: 10, guide: 'Adventure Team' },
      { time: '16:00', name: 'Photography Workshop', duration: '2h', difficulty: 'Beginner', participants: 8, guide: 'Photo Expert' }
    ],
    evening: [
      { time: '18:00', name: 'Sunset Viewpoint Trek', duration: '2h', difficulty: 'Easy', participants: 20, guide: 'Local Guide' },
      { time: '19:30', name: 'Cultural Performance', duration: '1.5h', difficulty: 'Easy', participants: 50, guide: 'Cultural Team' },
      { time: '21:00', name: 'Stargazing Session', duration: '2h', difficulty: 'Easy', participants: 25, guide: 'Astronomy Guide' }
    ]
  };

  const seasonalHighlights = {
    winter: {
      months: [11, 0, 1], // Dec, Jan, Feb
      activities: ['Skiing', 'Snowboarding', 'Ice Climbing', 'Winter Photography'],
      specialEvents: ['Snow Festival', 'Winter Solstice Celebration', 'Ice Sculpture Workshop'],
      weatherNote: 'Perfect snow conditions for winter sports',
      icon: Snowflake,
      color: 'text-blue-600'
    },
    spring: {
      months: [2, 3, 4], // Mar, Apr, May
      activities: ['Trekking', 'Rock Climbing', 'Bird Watching', 'Wildflower Photography'],
      specialEvents: ['Spring Festival', 'Rhododendron Bloom Tours', 'Bird Migration Watching'],
      weatherNote: 'Ideal weather for outdoor adventures',
      icon: TreePine,
      color: 'text-green-600'
    },
    summer: {
      months: [5, 6, 7], // Jun, Jul, Aug
      activities: ['High Altitude Trekking', 'Camping', 'River Rafting', 'Mountain Biking'],
      specialEvents: ['Summer Solstice Trek', 'Adventure Sports Festival', 'Monsoon Photography'],
      weatherNote: 'Clear skies and perfect visibility',
      icon: Sun,
      color: 'text-amber-600'
    },
    autumn: {
      months: [8, 9, 10], // Sep, Oct, Nov
      activities: ['Peak Climbing', 'Harvest Festivals', 'Clear Sky Photography', 'Cultural Tours'],
      specialEvents: ['Autumn Colors Festival', 'Harvest Celebration', 'Photography Competition'],
      weatherNote: 'Crystal clear mountain views',
      icon: Mountain,
      color: 'text-orange-600'
    }
  };

  const getCurrentSeason = () => {
    const month = currentDate.getMonth();
    for (const [season, data] of Object.entries(seasonalHighlights)) {
      if (data.months.includes(month)) {
        return { name: season, ...data };
      }
    }
    return { name: 'spring', ...seasonalHighlights.spring };
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return Sun;
      case 'cloudy': return Cloud;
      case 'rainy': return CloudRain;
      case 'snowy': return Snowflake;
      case 'windy': return Wind;
      default: return Cloud;
    }
  };

  const getActivityStatus = (activity: string, weather: any) => {
    const weatherCondition = weather.condition;
    const temperature = weather.temperature;
    
    if (activity.includes('Skiing') && temperature > 5) {
      return { status: 'warning', message: 'Limited snow conditions' };
    }
    if (activity.includes('Photography') && weatherCondition === 'rainy') {
      return { status: 'cancelled', message: 'Cancelled due to rain' };
    }
    if (activity.includes('Climbing') && weatherCondition === 'windy') {
      return { status: 'warning', message: 'Weather dependent' };
    }
    return { status: 'confirmed', message: 'Confirmed' };
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const currentSeason = getCurrentSeason();
  const WeatherIcon = getWeatherIcon(weatherData.condition);

  return (
    <section id="activities-calendar" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-forest-50 to-amber-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Activities Calendar
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Plan your perfect mountain adventure with our comprehensive activity calendar. 
              Daily schedules, seasonal highlights, and weather-dependent recommendations.
            </p>
          </div>

          {/* Current Weather & Season Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <WeatherIcon className="w-8 h-8 text-amber-500" />
                <div>
                  <h3 className="text-lg font-semibold text-forest-900">Current Weather</h3>
                  <p className="text-stone-600">Live conditions at 3200m</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-600">Temperature:</span>
                  <span className="font-semibold">{weatherData.temperature}°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Humidity:</span>
                  <span className="font-semibold">{weatherData.humidity}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Wind Speed:</span>
                  <span className="font-semibold">{weatherData.windSpeed} km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Visibility:</span>
                  <span className="font-semibold capitalize">{weatherData.visibility}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <currentSeason.icon className={`w-8 h-8 ${currentSeason.color}`} />
                <div>
                  <h3 className="text-lg font-semibold text-forest-900">Current Season</h3>
                  <p className="text-stone-600 capitalize">{currentSeason.name} Activities</p>
                </div>
              </div>
              <p className="text-stone-600 mb-3">{currentSeason.weatherNote}</p>
              <div className="flex flex-wrap gap-2">
                {currentSeason.activities.slice(0, 3).map((activity, idx) => (
                  <span key={idx} className="bg-forest-50 text-forest-700 px-2 py-1 rounded-full text-xs">
                    {activity}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Star className="w-8 h-8 text-amber-500" />
                <div>
                  <h3 className="text-lg font-semibold text-forest-900">Special Events</h3>
                  <p className="text-stone-600">This month's highlights</p>
                </div>
              </div>
              <div className="space-y-2">
                {currentSeason.specialEvents.map((event, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-stone-700">{event}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h3 className="text-3xl font-serif font-bold text-forest-900">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode('month')}
                  className={viewMode === 'month' ? 'bg-forest-100' : ''}
                >
                  Month
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode('week')}
                  className={viewMode === 'week' ? 'bg-forest-100' : ''}
                >
                  Week
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode('day')}
                  className={viewMode === 'day' ? 'bg-forest-100' : ''}
                >
                  Day
                </Button>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <Card className="p-6 mb-8">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {weekDays.map(day => (
                <div key={day} className="text-center font-semibold text-stone-700 py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: getFirstDayOfMonth(currentDate) }, (_, i) => (
                <div key={`empty-${i}`} className="h-20"></div>
              ))}
              {Array.from({ length: getDaysInMonth(currentDate) }, (_, i) => {
                const day = i + 1;
                const isToday = new Date().getDate() === day && 
                               new Date().getMonth() === currentDate.getMonth() &&
                               new Date().getFullYear() === currentDate.getFullYear();
                const isSelected = selectedDate?.getDate() === day;
                
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                    className={`h-20 p-2 rounded-lg border transition-all duration-200 hover:bg-forest-50 ${
                      isToday ? 'bg-amber-100 border-amber-300' : 
                      isSelected ? 'bg-forest-100 border-forest-300' : 
                      'border-stone-200'
                    }`}
                  >
                    <div className="text-sm font-semibold text-forest-900">{day}</div>
                    <div className="text-xs text-stone-600 mt-1">
                      {Math.floor(Math.random() * 3) + 2} activities
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Daily Schedule */}
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(dailyActivities).map(([timeOfDay, activities]) => (
              <Card key={timeOfDay} className="p-6">
                <h4 className="text-xl font-semibold text-forest-900 mb-6 capitalize flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-amber-500" />
                  {timeOfDay} Activities
                </h4>
                <div className="space-y-4">
                  {activities.map((activity, idx) => {
                    const status = getActivityStatus(activity.name, weatherData);
                    return (
                      <div key={idx} className="border-l-4 border-forest-200 pl-4 py-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-forest-900">{activity.time}</div>
                          <div className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${
                            status.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            status.status === 'warning' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {status.status === 'confirmed' ? <CheckCircle className="w-3 h-3" /> :
                             status.status === 'warning' ? <AlertTriangle className="w-3 h-3" /> :
                             <Info className="w-3 h-3" />}
                            <span>{status.message}</span>
                          </div>
                        </div>
                        <h5 className="font-medium text-stone-900 mb-1">{activity.name}</h5>
                        <div className="text-sm text-stone-600 space-y-1">
                          <div className="flex items-center space-x-4">
                            <span>Duration: {activity.duration}</span>
                            <span>Level: {activity.difficulty}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {activity.participants} max
                            </span>
                            <span>Guide: {activity.guide}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Weather-Dependent Activities Notice */}
      <div className="section-padding bg-amber-50">
        <div className="container-max">
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-forest-900 mb-4">
                  Weather-Dependent Activity Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-forest-800 mb-3">Outdoor Activities</h4>
                    <ul className="space-y-2 text-stone-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Trekking: Cancelled during heavy rain or snow</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Rock Climbing: Weather dependent, safety first</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Photography: Best during clear weather</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-800 mb-3">Indoor Alternatives</h4>
                    <ul className="space-y-2 text-stone-700">
                      <li className="flex items-center space-x-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        <span>Cultural workshops during bad weather</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        <span>Indoor games and entertainment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        <span>Spa and wellness activities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                  <p className="text-forest-800">
                    <strong>Note:</strong> All outdoor activities are subject to weather conditions and safety assessments. 
                    Our experienced guides monitor conditions continuously and will suggest alternatives when necessary. 
                    Guest safety is our top priority.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-forest-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Ready to Join Our Activities?
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Book your spot in our daily activities and seasonal adventures. 
            Our expert guides ensure safe and memorable experiences for all skill levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Activities
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <MapPin className="w-5 h-5 mr-2" />
              View Activity Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCalendar;