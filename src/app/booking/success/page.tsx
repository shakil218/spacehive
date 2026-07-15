import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function BookingSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md rounded-3xl bg-base-100 p-8 text-center shadow-xl">

        <CheckCircle className="mx-auto mb-5 h-20 w-20 text-green-500" />

        <h1 className="text-3xl font-bold">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-base-content/70">
          Your booking has been confirmed.
          You can check your booking details from your dashboard.
        </p>


        <div className="mt-8 flex flex-col gap-3">

          <Link
            href="/dashboard/user/my-bookings"
            className="btn bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white rounded-xl"
          >
            View My Bookings
          </Link>


          <Link
            href="/spaces"
            className="btn btn-outline bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent rounded-xl"
          >
            Explore More Spaces
          </Link>

        </div>

      </div>
    </div>
  );
}