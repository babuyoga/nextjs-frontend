"use client";
import React from "react";

interface Metric {
  title: string;
  value: string;
  description?: string;
}

// --- REAL DATA ---
const topMetrics: Metric[] = [
  {
    title: "Plan Status",
    value: "Active",
    description: "Your membership is active and will renew automatically.",
  },
  {
    title: "Next Renewal",
    value: "Nov 15, 2025",
    description: "You’ll be charged $10 for the next billing cycle.",
  },
  {
    title: "Plan Type",
    value: "Monthly — $10.99",
    description: "Includes 100 call mins and 100 text mins.",
  },
];

const MetricCard: React.FC<Metric> = ({ title, value, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
    <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
    <h2 className="text-2xl font-semibold text-gray-900 mb-1">{value}</h2>
    {description && (
      <p className="text-xs text-gray-500 leading-snug">{description}</p>
    )}
  </div>
);

export const MetricSection: React.FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {/* --- Plan Overview Metrics --- */}
    {topMetrics.map((metric) => (
      <MetricCard key={metric.title} {...metric} />
    ))}

    {/* --- Usage Section --- */}
   
  </section>
);
