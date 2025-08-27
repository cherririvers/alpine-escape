import React, { useState, useEffect } from 'react';
import { 
  Calendar, Users, CreditCard, Check, X, MapPin, Clock, 
  Star, Shield, Phone, Mail, AlertCircle, ChevronRight,
  Bed, Mountain, Utensils, Car, Wifi, Coffee
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingType: 'room' | 'activity' | 'dining' | 'package';
  itemData: any;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingType,
  itemData
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    participants: 2,
    selectedDate: '',
    selectedTime: '19:00',
    roomType: '',
    mealPlan: 'MAP',
    specialRequests: '',
    // Guest Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    // Preferences
    bedPreference: 'king',
    dietaryRestrictions: '',
    arrivalTime: '',
    transportation: false
  });

  const [totalCost, setTotalCost] = useState(0);
  const [nights, setNights] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkInDate = new Date(bookingData.checkIn);
      const checkOutDate = new Date(bookingData.checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setNights(nightCount > 0 ? nightCount : 1);
    }
  }, [bookingData.checkIn, bookingData.checkOut]);

  useEffect(() => {
    calculateTotalCost();
  }, [bookingData, nights]);

  const calculateTotalCost = () => {
    let cost = 0;
    
    const mealPlanCosts = {
      CP: 800,
      MAP: 1800,
      AP: 2500,
      AGP: 3200
    };
    
    if (bookingType === 'room' && itemData) {
      cost = itemData.price * nights * bookingData.guests;
      
      // Add meal plan cost
      cost += (mealPlanCosts[bookingData.mealPlan as keyof typeof mealPlanCosts] || 0) * nights * bookingData.guests;
    } else if (bookingType === 'activity' && itemData) {
      cost = itemData.price * bookingData.participants;
    } else if (bookingType === 'package' && itemData) {
      cost = itemData.price * bookingData.participants;
    }

    // Add transportation if selected
    if (bookingData.transportation) {
      cost += 1500 * bookingData.guests;
    }

    // Add taxes (12% GST)
    const taxes = cost * 0.12;
    setTotalCost(cost + taxes);
  };

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBookingSubmit = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate confirmation number
    const confirmNum = 'AE' + Date.now().toString().slice(-6);
    setConfirmationNumber(confirmNum);
    setBookingConfirmed(true);
    setIsProcessing(false);
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'Booking Details';
      case 2: return 'Guest Information';
      case 3: return 'Payment Details';
      case 4: return 'Review & Confirm';
      default: return 'Booking';
    }
  };

  if (!isOpen) return null;

  if (bookingConfirmed) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-xl text-stone-600 mb-6">
              Your mountain adventure is all set. We can't wait to welcome you to Alpine Escape!
            </p>
            
            <div className="bg-forest-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-sm text-stone-600">Confirmation Number</div>
                  <div className="text-lg font-bold text-forest-900">{confirmationNumber}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-600">Total Amount</div>
                  <div className="text-lg font-bold text-forest-900">₹{totalCost.toLocaleString()}</div>
                </div>
                {bookingType === 'room' && (
                  <>
                    <div>
                      <div className="text-sm text-stone-600">Check-in</div>
                      <div className="font-semibold">{bookingData.checkIn}</div>
                    </div>
                    <div>
                      <div className="text-sm text-stone-600">Check-out</div>
                      <div className="font-semibold">{bookingData.checkOut}</div>
                    </div>
                  </>
                )}
                <div>
                  <div className="text-sm text-stone-600">Guest Name</div>
                  <div className="font-semibold">{bookingData.firstName} {bookingData.lastName}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-600">Email</div>
                  <div className="font-semibold">{bookingData.email}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>Confirmation email sent to {bookingData.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>SMS confirmation sent to {bookingData.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>24/7 support available for any questions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={onClose}>
                Continue Exploring
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-forest-900">
                {getStepTitle(currentStep)}
              </h2>
              <p className="text-stone-600">
                {itemData?.name || 'Complete your booking'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? 'bg-forest-700 text-white' : 'bg-stone-200 text-stone-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step < currentStep ? 'bg-forest-700' : 'bg-stone-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              {/* Step 1: Booking Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  {bookingType === 'room' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-2">
                            Check-in Date
                          </label>
                          <input
                            type="date"
                            value={bookingData.checkIn}
                            onChange={(e) => handleInputChange('checkIn', e.target.value)}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-2">
                            Check-out Date
                          </label>
                          <input
                            type="date"
                            value={bookingData.checkOut}
                            onChange={(e) => handleInputChange('checkOut', e.target.value)}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Number of Guests
                        </label>
                        <select
                          value={bookingData.guests}
                          onChange={(e) => handleInputChange('guests', Number(e.target.value))}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Meal Plan
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { id: 'CP', name: 'Continental Plan', price: 800, desc: 'Breakfast only' },
                            { id: 'MAP', name: 'Modified American Plan', price: 1800, desc: 'Breakfast + Lunch/Dinner' },
                            { id: 'AP', name: 'American Plan', price: 2500, desc: 'All meals included' },
                            { id: 'AGP', name: 'Adventure Gourmet', price: 3200, desc: 'Premium dining experience' }
                          ].map((plan) => (
                            <label key={plan.id} className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                              bookingData.mealPlan === plan.id ? 'border-forest-500 bg-forest-50' : 'border-stone-200 hover:border-stone-300'
                            }`}>
                              <input
                                type="radio"
                                name="mealPlan"
                                value={plan.id}
                                checked={bookingData.mealPlan === plan.id}
                                onChange={(e) => handleInputChange('mealPlan', e.target.value)}
                                className="sr-only"
                              />
                              <div className="font-semibold text-forest-900">{plan.name}</div>
                              <div className="text-sm text-stone-600 mb-2">{plan.desc}</div>
                              <div className="text-lg font-bold text-amber-600">₹{plan.price}/day</div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {(bookingType === 'activity' || bookingType === 'package') && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={bookingData.selectedDate}
                          onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Number of Participants
                        </label>
                        <select
                          value={bookingData.participants}
                          onChange={(e) => handleInputChange('participants', Number(e.target.value))}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="Any special requirements or requests..."
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="transportation"
                      checked={bookingData.transportation}
                      onChange={(e) => handleInputChange('transportation', e.target.checked)}
                      className="w-4 h-4 text-forest-600 border-stone-300 rounded focus:ring-forest-500"
                    />
                    <label htmlFor="transportation" className="text-sm text-stone-700">
                      Add airport pickup/drop service (+₹1,500 per person)
                    </label>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Address
                    </label>
                    <textarea
                      value={bookingData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="Your complete address..."
                    />
                  </div>

                  {bookingType === 'room' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Bed Preference
                        </label>
                        <select
                          value={bookingData.bedPreference}
                          onChange={(e) => handleInputChange('bedPreference', e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        >
                          <option value="king">King Bed</option>
                          <option value="queen">Queen Bed</option>
                          <option value="twin">Twin Beds</option>
                          <option value="no-preference">No Preference</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Expected Arrival Time
                        </label>
                        <select
                          value={bookingData.arrivalTime}
                          onChange={(e) => handleInputChange('arrivalTime', e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        >
                          <option value="">Select arrival time</option>
                          <option value="morning">Morning (6:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 6:00 PM)</option>
                          <option value="evening">Evening (6:00 PM - 10:00 PM)</option>
                          <option value="late">Late Night (After 10:00 PM)</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Dietary Restrictions
                    </label>
                    <input
                      type="text"
                      value={bookingData.dietaryRestrictions}
                      onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="Vegetarian, Vegan, Allergies, etc."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-800 font-medium">Secure Payment</span>
                    </div>
                    <p className="text-amber-700 text-sm mt-1">
                      Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      value={bookingData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.cardName}
                      onChange={(e) => handleInputChange('cardName', e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="Name as on card"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        value={bookingData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={bookingData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-forest-50 rounded-lg p-4">
                    <h4 className="font-semibold text-forest-900 mb-3">Payment Summary</h4>
                    <div className="space-y-2 text-sm">
                      {bookingType === 'room' && (
                        <>
                          <div className="flex justify-between">
                            <span>Room ({nights} nights × {bookingData.guests} guests)</span>
                            <span>₹{(itemData?.price * nights * bookingData.guests).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Meal Plan ({bookingData.mealPlan})</span>
                            <span>₹{((mealPlanCosts[bookingData.mealPlan as keyof typeof mealPlanCosts] || 0) * nights * bookingData.guests).toLocaleString()}</span>
                          </div>
                        </>
                      )}
                      {(bookingType === 'activity' || bookingType === 'package') && (
                        <div className="flex justify-between">
                          <span>{itemData?.name} ({bookingData.participants} participants)</span>
                          <span>₹{(itemData?.price * bookingData.participants).toLocaleString()}</span>
                        </div>
                      )}
                      {bookingData.transportation && (
                        <div className="flex justify-between">
                          <span>Airport Transportation</span>
                          <span>₹{(1500 * bookingData.guests).toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Taxes (12% GST)</span>
                        <span>₹{Math.round((totalCost / 1.12) * 0.12).toLocaleString()}</span>
                      </div>
                      <div className="border-t border-stone-200 pt-2 flex justify-between font-semibold">
                        <span>Total Amount</span>
                        <span>₹{totalCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Confirm */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-stone-50 rounded-lg p-6">
                    <h4 className="font-semibold text-forest-900 mb-4">Booking Summary</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-stone-900 mb-2">Booking Details</h5>
                        <div className="space-y-1 text-sm text-stone-600">
                          <div>{itemData?.name}</div>
                          {bookingType === 'room' && (
                            <>
                              <div>Check-in: {bookingData.checkIn}</div>
                              <div>Check-out: {bookingData.checkOut}</div>
                              <div>Guests: {bookingData.guests}</div>
                              <div>Nights: {nights}</div>
                              <div>Meal Plan: {bookingData.mealPlan}</div>
                            </>
                          )}
                          {(bookingType === 'activity' || bookingType === 'package') && (
                            <>
                              <div>Date: {bookingData.selectedDate}</div>
                              <div>Participants: {bookingData.participants}</div>
                            </>
                          )}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-stone-900 mb-2">Guest Information</h5>
                        <div className="space-y-1 text-sm text-stone-600">
                          <div>{bookingData.firstName} {bookingData.lastName}</div>
                          <div>{bookingData.email}</div>
                          <div>{bookingData.phone}</div>
                          {bookingData.dietaryRestrictions && (
                            <div>Dietary: {bookingData.dietaryRestrictions}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div className="text-amber-800">
                        <h5 className="font-medium mb-1">Cancellation Policy</h5>
                        <p className="text-sm">
                          Free cancellation up to 48 hours before arrival. Cancellations within 48 hours 
                          are subject to a 50% charge. No-shows will be charged the full amount.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-forest-600 border-stone-300 rounded focus:ring-forest-500" required />
                      <span className="text-sm text-stone-700">
                        I agree to the <a href="#" className="text-forest-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-forest-600 hover:underline">Privacy Policy</a>
                      </span>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-forest-600 border-stone-300 rounded focus:ring-forest-500" />
                      <span className="text-sm text-stone-700">
                        I would like to receive updates and special offers from Alpine Escape
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-stone-200">
                <Button
                  variant="outline"
                  onClick={currentStep === 1 ? onClose : handlePrevStep}
                >
                  {currentStep === 1 ? 'Cancel' : 'Previous'}
                </Button>
                <Button
                  variant="primary"
                  onClick={currentStep === 4 ? handleBookingSubmit : handleNextStep}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : currentStep === 4 ? 'Confirm Booking' : 'Next'}
                  {!isProcessing && currentStep < 4 && <ChevronRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <h4 className="font-semibold text-forest-900 mb-4">Booking Summary</h4>
                
                {itemData && (
                  <div className="mb-6">
                    <div className="font-medium text-forest-900 mb-2">{itemData.name}</div>
                    {itemData.image && (
                      <img
                        src={itemData.image}
                        alt={itemData.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                    )}
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm text-stone-600">{itemData.rating || '4.8'} ({itemData.reviews || '150'} reviews)</span>
                    </div>
                  </div>
                )}

                <div className="space-y-3 text-sm">
                  {bookingType === 'room' && bookingData.checkIn && bookingData.checkOut && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Dates:</span>
                        <span className="font-medium">{nights} nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Guests:</span>
                        <span className="font-medium">{bookingData.guests}</span>
                      </div>
                    </>
                  )}
                  
                  {(bookingType === 'activity' || bookingType === 'package') && (
                    <div className="flex justify-between">
                      <span className="text-stone-600">Participants:</span>
                      <span className="font-medium">{bookingData.participants}</span>
                    </div>
                  )}

                  <div className="border-t border-stone-200 pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span className="text-forest-900">₹{totalCost.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-stone-500 mt-1">Including all taxes</div>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 text-green-600" />
                    <span>Free cancellation (48h)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 text-green-600" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 text-green-600" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingModal;