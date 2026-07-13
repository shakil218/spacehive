import Link from "next/link";
import { XCircle } from "lucide-react";

export default function BookingCancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md rounded-3xl bg-base-100 p-8 text-center shadow-xl">
        <XCircle className="mx-auto mb-5 h-20 w-20 text-red-500" />

        <h1 className="text-3xl font-bold">Payment Cancelled</h1>

        <p className="mt-4 text-base-content/70">
          Your payment was cancelled. Your booking is still pending.
        </p>

        <div className="mt-8">
          <Link href="/spaces" className="btn bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white w-full rounded-xl">
            Back To Spaces
          </Link>
        </div>
      </div>
    </div>
  );
}
