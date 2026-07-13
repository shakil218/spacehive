import axiosInstance from "@/lib/axios";
import { Booking } from "@/types/booking";

// Create Booking
export const createBooking = async (booking: Booking) => {
  const { data } = await axiosInstance.post(
    "/api/bookings",
    booking
  );

  return data;
};


// Create Stripe Checkout Session
export const createCheckoutSession = async (
  bookingId: string
) => {
  const { data } = await axiosInstance.post(
    "/api/create-checkout-session",
    {
      bookingId,
    }
  );
  
  return data;
};


// Get User Bookings
export const getUserBookings = async (
  userId: string
) => {
  const { data } = await axiosInstance.get(
    `/api/bookings/user/${userId}`
  );

  return data;
};