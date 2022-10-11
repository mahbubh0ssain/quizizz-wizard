import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const stat = useLoaderData();
  return (
    <div>
      <h2 className="text-center my-3">Quiz Statistics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={stat.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
