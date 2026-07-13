export interface Booking {
  userId: string;
  userName: string;
  userEmail: string;

  spaceId: string;
  title: string;
  imageUrl: string;
  location: string;

  bookingDate: string;

  guests: number;

  pricePerDay: number;
  totalPrice: number;
}