"use client";

import Image from "next/image";

import { format } from "date-fns";

import { RecentPayment } from "@/types/admin";

interface Props {
  payments: RecentPayment[];
}

export default function RecentPaymentsTable({ payments }: Props) {
  return (
    <div className="rounded-3xl border border-base-300 bg-base-100 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-base-300 p-6">
        <div>
          <h2 className="text-xl font-bold">Recent Payments</h2>

          <p className="text-sm text-base-content/60">
            Latest successful transactions
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra min-w-205">
          <thead className="bg-base-200">
            <tr className="text-xs uppercase tracking-wide text-base-content/70 md:text-sm">
              <th>User</th>

              <th>Space</th>

              <th>Amount</th>

              <th>Date</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment._id}
                className="hover:bg-base-200/40 transition-colors"
              >
                {/* User */}

                <td>
                  <div className="flex items-center gap-3">
                    <Image
                      src={payment.imageUrl || "https://i.pravatar.cc/150"}
                      alt={payment.userName}
                      width={46}
                      height={46}
                      className="h-10 w-10 rounded-xl object-cover md:h-12 md:w-12"
                    />

                    <div>
                      <p className="text-sm font-semibold md:text-base">{payment.userName}</p>

                      <p className="text-xs text-base-content/60 md:text-sm">
                        {payment.userEmail}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Space */}

                <td>
                  <span className="text-sm font-medium md:text-base">{payment.title}</span>
                </td>

                {/* Amount */}

                <td>
                  <span className="text-sm font-bold text-success md:text-base">
                    ${payment.totalPrice.toLocaleString()}
                  </span>
                </td>

                {/* Date */}

                <td className="text-sm text-base-content/70">{format(new Date(payment.bookingDate), "dd MMM yyyy")}</td>

                {/* Status */}

                <td>
                  <span className="badge badge-success badge-soft badge-sm md:badge-md">{payment.paymentStatus}</span>
                </td>
              </tr>
            ))}

            {payments.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-base-content/50"
                >
                  No recent payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
