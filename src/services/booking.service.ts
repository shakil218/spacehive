import axiosInstance from "@/lib/axios";
import { Booking, UserBookingStatisticsResponse } from "@/types/booking";

// Create Booking
export const createBooking = async (booking: Booking) => {
  const { data } = await axiosInstance.post("/api/bookings", booking);
  return data;
};

// Create Stripe Checkout Session
export const createCheckoutSession = async (bookingId: string) => {
  const { data } = await axiosInstance.post("/api/create-checkout-session", {
    bookingId,
  });
  return data;
};

// Get User Bookings
export const getUserBookings = async (userId: string) => {
  const { data } = await axiosInstance.get(`/api/bookings/user/${userId}`);
  return data;
};

// Get Booking By Id
export const getBookingById = async (id: string) => {
  const { data } = await axiosInstance.get(`/api/bookings/${id}`);
  return data;
};

// Cancel User Booking
export const cancelBooking = async (id: string) => {
  const { data } = await axiosInstance.patch(`/api/bookings/${id}/cancel`);
  return data;
};

// Delete Booking
export const deleteBooking = async (id: string) => {
  const { data } = await axiosInstance.delete(`/api/bookings/${id}`);
  return data;
};

// Get User Booking Statistics
export const getUserBookingStatistics = async (
  userId: string,
): Promise<UserBookingStatisticsResponse> => {
  const { data } = await axiosInstance.get<UserBookingStatisticsResponse>(
    `/api/user/bookings/statistics/${userId}`,
  );
  return data;
};
