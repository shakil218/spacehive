"use client";

export default function BookingsTableSkeleton() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100 shadow">
      <table className="table">
        <thead>
          <tr>
            <th>Space</th>
            <th>Date</th>
            <th>Guests</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <tr key={index}>
              {/* Space */}
              <td>
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 rounded-xl" />

                  <div className="space-y-2">
                    <div className="skeleton h-4 w-40" />
                    <div className="skeleton h-3 w-28" />
                  </div>
                </div>
              </td>

              {/* Date */}
              <td>
                <div className="skeleton h-4 w-24" />
              </td>

              {/* Guests */}
              <td>
                <div className="skeleton h-4 w-10" />
              </td>

              {/* Total */}
              <td>
                <div className="skeleton h-4 w-16" />
              </td>

              {/* Payment */}
              <td>
                <div className="skeleton h-6 w-20 rounded-full" />
              </td>

              {/* Status */}
              <td>
                <div className="skeleton h-6 w-24 rounded-full" />
              </td>

              {/* Actions */}
              <td>
                <div className="flex gap-2">
                  <div className="skeleton h-9 w-20 rounded-xl" />
                  <div className="skeleton h-9 w-20 rounded-xl" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}