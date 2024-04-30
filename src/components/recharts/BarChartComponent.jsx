import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
export const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 249, pv: 2380, amt: 2400 },
  { name: "Sep", uv: 439, pv: 3490, amt: 2210 },
  { name: "Oct", uv: 349, pv: 4300, amt: 2290 },
  { name: "Nov", uv: 429, pv: 2100, amt: 2000 },
  { name: "Dec", uv: 229, pv: 3980, amt: 2181 },
];

const BarChartComponent = () => {
  return (
    <BarChart
      width={400}
      height={200}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
