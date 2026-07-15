"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  data: {
    month: string;
    bookings: number;
    revenue: number;
  }[];
}

export default function AdminStatisticsChart({ data }: Props) {
  return (
    <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Revenue & Booking Statistics
          </h2>

          <p className="text-sm text-base-content/60">
            Monthly platform performance
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-500" />

            <span className="text-sm">Revenue</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-violet-500" />

            <span className="text-sm">Bookings</span>
          </div>
        </div>
      </div>

      <div className="h-95">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2483FF"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#2483FF"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient
                id="colorBookings"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.3}
                />

                <stop
                  offset="95%"
                  stopColor="#8B5CF6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              opacity={0.15}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;

                const revenue =
                  payload.find(
                    (item) => item.dataKey === "revenue",
                  )?.value ?? 0;

                const bookings =
                  payload.find(
                    (item) => item.dataKey === "bookings",
                  )?.value ?? 0;

                return (
                  <div className="rounded-2xl border border-base-300 bg-base-100 p-4 shadow-xl">
                    <p className="mb-3 font-bold">
                      {label}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between gap-6">
                        <span>Revenue</span>

                        <span className="font-semibold text-blue-600">
                          $
                          {Number(revenue).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between gap-6">
                        <span>Bookings</span>

                        <span className="font-semibold text-violet-600">
                          {bookings}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2483FF"
              strokeWidth={3}
              fill="url(#colorRevenue)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#2483FF",
              }}
            />

            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#colorBookings)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#8B5CF6",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}