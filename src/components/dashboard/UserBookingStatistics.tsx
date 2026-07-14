"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: {
    month: string;
    bookings: number;
    cancelledBookings: number;
    spending: number;
  }[];
}

export default function UserBookingStatistics({ data }: Props) {
  return (
    <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Booking Statistics</h2>

        <p className="mt-1 text-base-content/60">Monthly spending overview</p>
      </div>

      <div className="h-105">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35} />

                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E5E7EB"
              vertical={false}
              strokeDasharray="0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 14,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 14,
              }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip
              content={({ active, payload, label }) => {
                if (!active || !payload || payload.length === 0) {
                  return null;
                }

                const spending =
                  payload.find((item) => item.dataKey === "spending")?.value ??
                  0;

                const bookings =
                  payload.find((item) => item.dataKey === "bookings")?.value ??
                  0;

                const cancelledBookings =
                  payload.find((item) => item.dataKey === "cancelledBookings")
                    ?.value ?? 0;

                return (
                  <div
                    className="
          rounded-2xl
          border
          border-base-300
          bg-base-100
          p-4
          shadow-xl
          min-w-56
        "
                  >
                    <p className="mb-4 font-bold">{label}</p>

                    <div className="space-y-3">
                      {/* Spending */}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-blue-500" />

                          <span>Spending</span>
                        </div>

                        <span className="font-semibold text-blue-600">
                          ${Number(spending).toLocaleString()}
                        </span>
                      </div>

                      {/* Bookings */}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-violet-500" />

                          <span>Bookings</span>
                        </div>

                        <span className="font-semibold text-violet-600">
                          {bookings}
                        </span>
                      </div>

                      {/* Cancelled */}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-500" />

                          <span>Cancelled</span>
                        </div>

                        <span className="font-semibold text-red-600">
                          {cancelledBookings}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Area
              type="monotone"
              dataKey="spending"
              stroke="#2483FF"
              strokeWidth={3}
              fill="url(#colorSpending)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#2483FF",
                strokeWidth: 0,
              }}
            />

            {/* Hidden Area for Bookings */}
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="transparent"
              fill="transparent"
              dot={false}
              activeDot={false}
            />

            {/* Hidden Area for Cancelled Bookings */}
            <Area
              type="monotone"
              dataKey="cancelledBookings"
              stroke="transparent"
              fill="transparent"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
