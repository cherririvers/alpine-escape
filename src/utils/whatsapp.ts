const WHATSAPP_NUMBER = '919289934130';

export const formatWhatsAppMessage = (message: string): string => {
  return encodeURIComponent(message);
};

export const generateWhatsAppURL = (message: string): string => {
  const formattedMessage = formatWhatsAppMessage(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${formattedMessage}`;
};

export const openWhatsApp = (message: string): void => {
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank');
};

interface RoomBookingData {
  itemName?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  mealPlan: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  bedPreference?: string;
  dietaryRestrictions?: string;
  arrivalTime?: string;
  transportation?: boolean;
  totalCost: number;
  nights: number;
}

export const formatRoomBookingMessage = (data: RoomBookingData): string => {
  let message = `🏔️ *ALPINE ESCAPE - ROOM BOOKING REQUEST*\n\n`;

  message += `📅 *Booking Details*\n`;
  if (data.itemName) message += `Room Type: ${data.itemName}\n`;
  message += `Check-in: ${data.checkIn}\n`;
  message += `Check-out: ${data.checkOut}\n`;
  message += `Nights: ${data.nights}\n`;
  message += `Guests: ${data.guests}\n`;
  message += `Meal Plan: ${data.mealPlan}\n\n`;

  message += `👤 *Guest Information*\n`;
  message += `Name: ${data.firstName} ${data.lastName}\n`;
  message += `Email: ${data.email}\n`;
  message += `Phone: ${data.phone}\n\n`;

  if (data.bedPreference || data.arrivalTime || data.dietaryRestrictions) {
    message += `⚙️ *Preferences*\n`;
    if (data.bedPreference) message += `Bed Preference: ${data.bedPreference}\n`;
    if (data.arrivalTime) message += `Arrival Time: ${data.arrivalTime}\n`;
    if (data.dietaryRestrictions) message += `Dietary Requirements: ${data.dietaryRestrictions}\n`;
    message += `\n`;
  }

  if (data.transportation) {
    message += `🚗 Airport Transportation: Yes\n\n`;
  }

  if (data.specialRequests) {
    message += `📝 *Special Requests*\n${data.specialRequests}\n\n`;
  }

  message += `💰 *Estimated Total*: ₹${data.totalCost.toLocaleString()}\n\n`;
  message += `Please confirm availability and send booking confirmation details. Thank you!`;

  return message;
};

interface ActivityBookingData {
  activityName: string;
  selectedDate: string;
  participants: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  specialRequests?: string;
  totalCost: number;
}

export const formatActivityBookingMessage = (data: ActivityBookingData): string => {
  let message = `🏔️ *ALPINE ESCAPE - ACTIVITY BOOKING REQUEST*\n\n`;

  message += `🎯 *Activity Details*\n`;
  message += `Activity: ${data.activityName}\n`;
  message += `Preferred Date: ${data.selectedDate}\n`;
  message += `Participants: ${data.participants}\n\n`;

  if (data.firstName && data.lastName) {
    message += `👤 *Contact Information*\n`;
    message += `Name: ${data.firstName} ${data.lastName}\n`;
    if (data.email) message += `Email: ${data.email}\n`;
    if (data.phone) message += `Phone: ${data.phone}\n`;
    message += `\n`;
  }

  if (data.specialRequests) {
    message += `📝 *Special Requests*\n${data.specialRequests}\n\n`;
  }

  message += `💰 *Total Cost*: ₹${data.totalCost.toLocaleString()}\n\n`;
  message += `Please confirm availability and provide booking details. Thank you!`;

  return message;
};

interface PackageBookingData {
  packageName: string;
  selectedDate: string;
  participants: number;
  totalCost: number;
}

export const formatPackageBookingMessage = (data: PackageBookingData): string => {
  let message = `🏔️ *ALPINE ESCAPE - PACKAGE BOOKING REQUEST*\n\n`;

  message += `📦 *Package Details*\n`;
  message += `Package: ${data.packageName}\n`;
  message += `Preferred Date: ${data.selectedDate}\n`;
  message += `Participants: ${data.participants}\n\n`;

  message += `💰 *Total Cost*: ₹${data.totalCost.toLocaleString()}\n\n`;
  message += `Please confirm availability and provide complete booking details. Thank you!`;

  return message;
};

interface DiningReservationData {
  venueName?: string;
  date: string;
  time: string;
  partySize: number;
  guestName?: string;
  guestPhone?: string;
  specialRequests?: string;
}

export const formatDiningReservationMessage = (data: DiningReservationData): string => {
  let message = `🍽️ *ALPINE ESCAPE - DINING RESERVATION*\n\n`;

  message += `📅 *Reservation Details*\n`;
  if (data.venueName) message += `Venue: ${data.venueName}\n`;
  message += `Date: ${data.date}\n`;
  message += `Time: ${data.time}\n`;
  message += `Party Size: ${data.partySize} ${data.partySize === 1 ? 'guest' : 'guests'}\n\n`;

  if (data.guestName || data.guestPhone) {
    message += `👤 *Guest Information*\n`;
    if (data.guestName) message += `Name: ${data.guestName}\n`;
    if (data.guestPhone) message += `Phone: ${data.guestPhone}\n`;
    message += `\n`;
  }

  if (data.specialRequests) {
    message += `📝 *Special Requests*\n${data.specialRequests}\n\n`;
  }

  message += `Please confirm the reservation. Thank you!`;

  return message;
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact?: string;
  urgency?: string;
}

export const formatContactMessage = (data: ContactFormData): string => {
  let message = `📞 *ALPINE ESCAPE - INQUIRY*\n\n`;

  message += `👤 *Contact Information*\n`;
  message += `Name: ${data.name}\n`;
  message += `Email: ${data.email}\n`;
  if (data.phone) message += `Phone: ${data.phone}\n`;
  message += `\n`;

  const subjectLabels: Record<string, string> = {
    general: 'General Inquiry',
    booking: 'Booking & Reservations',
    activities: 'Activities & Packages',
    dining: 'Dining & Events',
    transportation: 'Transportation',
    feedback: 'Feedback & Reviews',
    emergency: 'Emergency'
  };

  message += `📋 *Subject*: ${subjectLabels[data.subject] || data.subject}\n\n`;

  message += `💬 *Message*\n${data.message}\n\n`;

  if (data.preferredContact) {
    message += `Preferred Contact: ${data.preferredContact}\n`;
  }

  if (data.urgency) {
    const urgencyLabels: Record<string, string> = {
      normal: 'Normal (24-48 hours)',
      urgent: 'Urgent (within 24 hours)',
      emergency: 'Emergency (immediate)'
    };
    message += `Priority: ${urgencyLabels[data.urgency] || data.urgency}\n`;
  }

  return message;
};
