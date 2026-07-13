import axiosInstance from "@/lib/axios";

export const createCheckoutSession = async (bookingId: string) => {
  const { data } = await axiosInstance.post(
    "/api/create-checkout-session",
    {
      bookingId,
    }
  );

  return data;
};