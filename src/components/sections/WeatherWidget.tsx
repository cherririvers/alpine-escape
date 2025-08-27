import React, { useState, useEffect } from 'react';
import { 
  Thermometer, Cloud, Sun, CloudRain, Snowflake, Wind, Eye, Droplets,
  Mountain, Compass, AlertTriangle, CheckCircle, Info, Calendar,
  Sunrise, Sunset, Umbrella, Zap, CloudSnow, CloudDrizzle
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const WeatherWidget: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 12,
    condition: 'partly-cloudy',
    humidity: 65,
    windSpeed: 15,
    visibility: 8,
    pressure: 1013,
    uvIndex: 3,
    sunrise: '06:24',
    sunset: '18:47',
    feelsLike: 9
  });

  const [forecast, setForecast] = useState([
    { day: 'Today', date: 'Dec 15', high: 15, low: 8, condition: 'partly-cloudy', precipitation: 10, wind: 15 },
    { day: 'Tomorrow', date: 'Dec 16', high: 18, low: 10, condition: 'sunny', precipitation: 0, wind: 12 },
    { day: 'Wednesday', date: 'Dec 17', high: 12, low: 5, condition: 'snowy', precipitation: 80, wind: 20 },
    { day: 'Thursday', date: 'Dec 18', high: 8, low: 2, condition: 'snowy', precipitation: 90, wind: 25 },
    { day: 'Friday', date: 'Dec 19', high: 14, low: 6, condition: 'cloudy', precipitation: 30, wind: 18 }
  ]);

  const [skiConditions, setSkiConditions] = useState({
    snowDepth: 85,
    snowQuality: 'Powder',
    lastSnowfall: '2 days ago',
    temperature: -3,
    windSpeed: 12,
    visibility: 'Excellent',
    avalancheRisk: 'Low',
    liftsOpen: 8,
    totalLifts: 10,
    trailsOpen: 15,
    totalTrails: 18
  });

  const getWeatherIcon = (condition: string, size: string = 'w-8 h-8') => {
    const iconClass = `${size} text-amber-500`;
    switch (condition) {
      case 'sunny': return <Sun className={iconClass} />;
      case 'partly-cloudy': return <Cloud className={iconClass} />;
      case 'cloudy': return <Cloud className={`${size} text-stone-500`} />;
      case 'rainy': return <CloudRain className={`${size} text-blue-500`} />;
      case 'snowy': return <Snowflake className={`${size} text-blue-300`} />;
      case 'stormy': return <Zap className={`${size} text-purple-500`} />;
      default: return <Cloud className={iconClass} />;
    }
  };

  const getActivityRecommendations = (weather: any) => {
    const temp = weather.temperature;
    const condition = weather.condition;
    const wind = weather.windSpeed;

    const recommendations = [];

    if (condition === 'sunny' && temp > 10) {
      recommendations.push({ activity: 'Mountain Trekking', status: 'excellent', reason: 'Perfect weather conditions' });
      recommendations.push({ activity: 'Photography Workshop', status: 'excellent', reason: 'Clear skies and great visibility' });
      recommendations.push({ activity: 'Rock Climbing', status: 'good', reason: 'Good conditions, check wind' });
    }

    if (condition === 'snowy' && temp < 5) {
      recommendations.push({ activity: 'Skiing & Snowboarding', status: 'excellent', reason: 'Fresh powder conditions' });
      recommendations.push({ activity: 'Snow Photography', status: 'good', reason: 'Beautiful winter scenery' });
      recommendations.push({ activity: 'Winter Trekking', status: 'caution', reason: 'Requires proper equipment' });
    }

    if (condition === 'rainy') {
      recommendations.push({ activity: 'Indoor Activities', status: 'recommended', reason: 'Weather protection advised' });
      recommendations.push({ activity: 'Spa & Wellness', status: 'excellent', reason: 'Perfect for relaxation' });
      recommendations.push({ activity: 'Cultural Workshops', status: 'excellent', reason: 'Indoor cultural experiences' });
    }

    if (wind > 20) {
      recommendations.push({ activity: 'High Altitude Activities', status: 'caution', reason: 'Strong winds at elevation' });
    }

    // Default recommendations if none match
    if (recommendations.length === 0) {
      recommendations.push({ activity: 'Nature Walks', status: 'good', reason: 'Suitable for light activities' });
      recommendations.push({ activity: 'Campfire Experience', status: 'good', reason: 'Evening activities available' });
    }

    return recommendations.slice(0, 4);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'caution': return 'text-amber-600 bg-amber-50';
      case 'recommended': return 'text-purple-600 bg-purple-50';
      default: return 'text-stone-600 bg-stone-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-4 h-4" />;
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'caution': return <AlertTriangle className="w-4 h-4" />;
      case 'recommended': return <Info className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const activityRecommendations = getActivityRecommendations(currentWeather);

  return (
    <section id="weather" className="bg-white">
      {/* Section Header */}
      <div className="section-padding bg-gradient-to-br from-blue-50 to-stone-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-forest-900 mb-6">
              Mountain Weather Center
            </h2>
            <p className="text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Stay informed with real-time weather conditions at 3,200m altitude. Plan your mountain adventures 
              with accurate forecasts, activity recommendations, and ski condition reports.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-forest-700">
                <Mountain className="w-5 h-5" />
                <span className="font-medium">3,200m Altitude</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Thermometer className="w-5 h-5" />
                <span className="font-medium">Live Updates</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <Compass className="w-5 h-5" />
                <span className="font-medium">Activity Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Weather */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Weather Card */}
            <Card className="lg:col-span-2 p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-forest-900 mb-2">
                    Current Conditions
                  </h3>
                  <p className="text-stone-600">Alpine Escape Lodge • 3,200m</p>
                  <p className="text-sm text-stone-500">Last updated: 5 minutes ago</p>
                </div>
                <div className="text-right">
                  {getWeatherIcon(currentWeather.condition, 'w-16 h-16')}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-6xl font-bold text-forest-900 mb-2">
                    {currentWeather.temperature}°C
                  </div>
                  <div className="text-xl text-stone-600 mb-4 capitalize">
                    {currentWeather.condition.replace('-', ' ')}
                  </div>
                  <div className="text-stone-600">
                    Feels like {currentWeather.feelsLike}°C
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      <span className="text-stone-700">Humidity</span>
                    </div>
                    <span className="font-semibold">{currentWeather.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wind className="w-5 h-5 text-stone-500" />
                      <span className="text-stone-700">Wind Speed</span>
                    </div>
                    <span className="font-semibold">{currentWeather.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-5 h-5 text-green-500" />
                      <span className="text-stone-700">Visibility</span>
                    </div>
                    <span className="font-semibold">{currentWeather.visibility} km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Compass className="w-5 h-5 text-purple-500" />
                      <span className="text-stone-700">Pressure</span>
                    </div>
                    <span className="font-semibold">{currentWeather.pressure} hPa</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-stone-200">
                <div className="flex items-center space-x-3">
                  <Sunrise className="w-6 h-6 text-amber-500" />
                  <div>
                    <div className="text-sm text-stone-600">Sunrise</div>
                    <div className="font-semibold">{currentWeather.sunrise}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Sunset className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="text-sm text-stone-600">Sunset</div>
                    <div className="font-semibold">{currentWeather.sunset}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Activity Recommendations */}
            <Card className="p-6">
              <h4 className="text-xl font-serif font-bold text-forest-900 mb-6">
                Activity Recommendations
              </h4>
              <div className="space-y-4">
                {activityRecommendations.map((rec, index) => (
                  <div key={index} className="border-l-4 border-forest-200 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-forest-900">{rec.activity}</h5>
                      <div className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${getStatusColor(rec.status)}`}>
                        {getStatusIcon(rec.status)}
                        <span className="capitalize">{rec.status}</span>
                      </div>
                    </div>
                    <p className="text-sm text-stone-600">{rec.reason}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-6">
                View All Activities
              </Button>
            </Card>
          </div>

          {/* 5-Day Forecast */}
          <Card className="p-8 mb-12">
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">
              5-Day Weather Forecast
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {forecast.map((day, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors duration-200">
                  <div className="font-semibold text-forest-900 mb-2">{day.day}</div>
                  <div className="text-sm text-stone-600 mb-4">{day.date}</div>
                  <div className="flex justify-center mb-4">
                    {getWeatherIcon(day.condition, 'w-10 h-10')}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{day.high}°</span>
                      <span className="text-stone-500">{day.low}°</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-xs text-blue-600">
                      <Umbrella className="w-3 h-3" />
                      <span>{day.precipitation}%</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-xs text-stone-500">
                      <Wind className="w-3 h-3" />
                      <span>{day.wind} km/h</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Ski Conditions */}
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Snowflake className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-serif font-bold text-forest-900">
                Ski Conditions Report
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {skiConditions.snowDepth}cm
                </div>
                <div className="text-sm text-stone-600">Snow Depth</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600 mb-2">
                  {skiConditions.snowQuality}
                </div>
                <div className="text-sm text-stone-600">Snow Quality</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-xl font-bold text-amber-600 mb-2">
                  {skiConditions.liftsOpen}/{skiConditions.totalLifts}
                </div>
                <div className="text-sm text-stone-600">Lifts Open</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-xl font-bold text-purple-600 mb-2">
                  {skiConditions.trailsOpen}/{skiConditions.totalTrails}
                </div>
                <div className="text-sm text-stone-600">Trails Open</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-semibold text-forest-900 mb-4">Current Conditions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Temperature:</span>
                    <span className="font-semibold">{skiConditions.temperature}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Wind Speed:</span>
                    <span className="font-semibold">{skiConditions.windSpeed} km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Visibility:</span>
                    <span className="font-semibold">{skiConditions.visibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Last Snowfall:</span>
                    <span className="font-semibold">{skiConditions.lastSnowfall}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-forest-900 mb-4">Safety Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Avalanche Risk:</span>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      skiConditions.avalancheRisk === 'Low' ? 'bg-green-100 text-green-700' :
                      skiConditions.avalancheRisk === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {skiConditions.avalancheRisk}
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <strong>Safety Reminder:</strong> Always check with our ski patrol before heading out. 
                        Proper equipment and guided tours recommended for all skill levels.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="section-padding bg-stone-50">
        <div className="container-max">
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <Info className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-forest-900 mb-4">
                  Weather Advisory & Safety Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-forest-800 mb-3">Mountain Weather Facts</h4>
                    <ul className="space-y-2 text-stone-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Weather can change rapidly at high altitude</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Temperature drops 6°C per 1000m elevation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>UV radiation is stronger at high altitude</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Wind speeds increase with elevation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-800 mb-3">Safety Recommendations</h4>
                    <ul className="space-y-2 text-stone-700">
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Always carry warm clothing and rain gear</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Check weather before outdoor activities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Follow guide recommendations at all times</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Emergency shelter available at all times</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                  <p className="text-forest-800">
                    <strong>24/7 Weather Monitoring:</strong> Our experienced mountain guides continuously monitor 
                    weather conditions and will adjust or cancel activities if safety conditions are not met. 
                    Guest safety is our absolute priority.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-gradient-to-r from-blue-900 to-forest-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">
            Plan Your Perfect Mountain Day
          </h3>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Use our weather insights to choose the best activities for your mountain adventure. 
            Our guides are always available to help you make the most of every weather condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              View Activity Calendar
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-900">
              <Mountain className="w-5 h-5 mr-2" />
              Book Weather-Safe Activities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;