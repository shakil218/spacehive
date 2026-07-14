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

export interface UserBookingStatistics {
  month: string;
  bookings: number;
  cancelledBookings: number;
  spending: number;
}

export interface UserBookingSummary {
  totalBookings: number;
  confirmedBookings: number;
  cancelledBookings: number;
  totalSpent: number;
}

export interface UserBookingStatisticsResponse {
  success: boolean;
  summary: UserBookingSummary;
  chartData: UserBookingStatistics[];
}
