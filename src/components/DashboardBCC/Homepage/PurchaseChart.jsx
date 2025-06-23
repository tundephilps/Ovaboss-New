import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const data = [
  { month: "January", Online: 700, Inland: 400, Mobile: 450 },
  { month: "February", Online: 200, Inland: 300, Mobile: 500 },
  { month: "March", Online: 350, Inland: 380, Mobile: 400 },
  { month: "April", Online: 220, Inland: 460, Mobile: 850 },
  { month: "May", Online: 430, Inland: 700, Mobile: 300 },
  { month: "June", Online: 180, Inland: 950, Mobile: 150 },
  { month: "July", Online: 560, Inland: 920, Mobile: 580 },
  { month: "August", Online: 190, Inland: 410, Mobile: 400 },
  { month: "September", Online: 590, Inland: 860, Mobile: 920 },
  { month: "October", Online: 550, Inland: 300, Mobile: 950 },
  { month: "November", Online: 890, Inland: 600, Mobile: 560 },
  { month: "December", Online: 600, Inland: 880, Mobile: 150 },
];

const PurchaseChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full  mx-auto">
      <h2 className="text-xl font-semibold text-center mb-1">Total Purchase</h2>
      <p className="text-center text-sm text-gray-500 mb-4">
        This graph shows your total purchases across each month
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `£${value}`} />
          <Tooltip formatter={(value) => `£${value}`} />
          <Legend />
          <Line
            type="linear"
            dataKey="Online"
            stroke="#4285F4"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="Inland"
            stroke="#fbbc04"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="Mobile"
            stroke="#ea4335"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PurchaseChart;
