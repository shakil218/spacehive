export interface Booking {
  _id: string;

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

  paymentStatus: string;
  bookingStatus: string;

  stripeSessionId?: string | null;
  stripePaymentIntentId?: string | null;
}