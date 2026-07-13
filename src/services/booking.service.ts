import axiosInstance from "@/lib/axios";
import { Booking } from "@/types/booking";

export const createBooking = async (booking: Booking) => {
  const { data } = await axiosInstance.post(
    "/api/bookings",
    booking
  );

  return data;
};