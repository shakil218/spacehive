export interface DashboardSummary {
  totalUsers: number;
  totalSpaces: number;
  totalBookings: number;
  totalRevenue: number;
}

export interface DashboardChartData {
  month: string;
  bookings: number;
  revenue: number;
}

export interface RecentPayment {
  _id: string;

  userId: string;
  userName: string;
  userEmail: string;

  spaceId: string;
  title: string;
  imageUrl: string;
  location: string;

  bookingDate: string;

  totalPrice: number;

  paymentStatus: string;
  bookingStatus: string;

  stripeSessionId?: string | null;
  stripePaymentIntentId?: string | null;
}

export interface AdminDashboardResponse {
  success: boolean;

  summary: DashboardSummary;

  chartData: DashboardChartData[];

  recentPayments: RecentPayment[];
}