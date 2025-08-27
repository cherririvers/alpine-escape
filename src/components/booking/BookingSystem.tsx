import React, { useState } from 'react';
import BookingModal from './BookingModal';

interface BookingSystemProps {
  children: React.ReactNode;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'room' | 'activity' | 'dining' | 'package'>('room');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openBooking = (type: 'room' | 'activity' | 'dining' | 'package', itemData?: any) => {
    setBookingType(type);
    setSelectedItem(itemData);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedItem(null);
  };

  // Provide booking context to children
  const contextValue = {
    openBooking,
    closeBooking,
    isBookingOpen
  };

  return (
    <>
      {React.cloneElement(children as React.ReactElement, { bookingContext: contextValue })}
      
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        bookingType={bookingType}
        itemData={selectedItem}
      />
    </>
  );
};

export default BookingSystem;