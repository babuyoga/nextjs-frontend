"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Here's your usage"


interface SummaryStat {
  value: string;
  label: string;
}


const summaryStats: SummaryStat[] = [
  { value: '50', label: 'Total Calls' },
  { value: '20', label: 'Total Messages' },
  { value: '0.2', label: 'Cost Per Minute' },
  { value: '20', label: 'Longest Call' },
];

/**
* Card for displaying smaller summary statistics.
*/
const SummaryStatCard: React.FC<SummaryStat> = ({ value, label }) => {
  const isHighlighted = label === 'New customers';
  const valueColor = isHighlighted ? 'text-indigo-600' : 'text-gray-900';
  const labelColor = isHighlighted ? 'text-indigo-600' : 'text-gray-500';

  return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition duration-150 hover:shadow-md">
          <h3 className={`text-xl font-bold mb-1 ${valueColor}`}>{value}</h3>
          <p className={`text-sm font-medium ${labelColor}`}>{label}</p>
      </div>
  );
};

const chartData = [
    { date: "2024-04-01", calls: 222, messages: 150 },
    { date: "2024-04-02", calls: 97, messages: 180 },
    { date: "2024-04-03", calls: 167, messages: 120 },
    { date: "2024-04-04", calls: 242, messages: 260 },
    { date: "2024-04-05", calls: 373, messages: 290 },
    { date: "2024-04-06", calls: 301, messages: 340 },
    { date: "2024-04-07", calls: 245, messages: 180 },
    { date: "2024-04-08", calls: 409, messages: 320 },
    { date: "2024-04-09", calls: 59, messages: 110 },
    { date: "2024-04-10", calls: 261, messages: 190 },
    { date: "2024-04-11", calls: 327, messages: 350 },
    { date: "2024-04-12", calls: 292, messages: 210 },
    { date: "2024-04-13", calls: 342, messages: 380 },
    { date: "2024-04-14", calls: 137, messages: 220 },
    { date: "2024-04-15", calls: 120, messages: 170 },
    { date: "2024-04-16", calls: 138, messages: 190 },
    { date: "2024-04-17", calls: 446, messages: 360 },
    { date: "2024-04-18", calls: 364, messages: 410 },
    { date: "2024-04-19", calls: 243, messages: 180 },
    { date: "2024-04-20", calls: 89, messages: 150 },
    { date: "2024-04-21", calls: 137, messages: 200 },
    { date: "2024-04-22", calls: 224, messages: 170 },
    { date: "2024-04-23", calls: 138, messages: 230 },
    { date: "2024-04-24", calls: 387, messages: 290 },
    { date: "2024-04-25", calls: 215, messages: 250 },
    { date: "2024-04-26", calls: 75, messages: 130 },
    { date: "2024-04-27", calls: 383, messages: 420 },
    { date: "2024-04-28", calls: 122, messages: 180 },
    { date: "2024-04-29", calls: 315, messages: 240 },
    { date: "2024-04-30", calls: 454, messages: 380 },
    { date: "2024-05-01", calls: 165, messages: 220 },
    { date: "2024-05-02", calls: 293, messages: 310 },
    { date: "2024-05-03", calls: 247, messages: 190 },
    { date: "2024-05-04", calls: 385, messages: 420 },
    { date: "2024-05-05", calls: 481, messages: 390 },
    { date: "2024-05-06", calls: 498, messages: 520 },
    { date: "2024-05-07", calls: 388, messages: 300 },
    { date: "2024-05-08", calls: 149, messages: 210 },
    { date: "2024-05-09", calls: 227, messages: 180 },
    { date: "2024-05-10", calls: 293, messages: 330 },
    { date: "2024-05-11", calls: 335, messages: 270 },
    { date: "2024-05-12", calls: 197, messages: 240 },
    { date: "2024-05-13", calls: 197, messages: 160 },
    { date: "2024-05-14", calls: 448, messages: 490 },
    { date: "2024-05-15", calls: 473, messages: 380 },
    { date: "2024-05-16", calls: 338, messages: 400 },
    { date: "2024-05-17", calls: 499, messages: 420 },
    { date: "2024-05-18", calls: 315, messages: 350 },
    { date: "2024-05-19", calls: 235, messages: 180 },
    { date: "2024-05-20", calls: 177, messages: 230 },
    { date: "2024-05-21", calls: 82,  messages: 140 },
    { date: "2024-05-22", calls: 81,  messages: 120 },
    { date: "2024-05-23", calls: 252, messages: 290 },
    { date: "2024-05-24", calls: 294, messages: 220 },
    { date: "2024-05-25", calls: 201, messages: 250 },
    { date: "2024-05-26", calls: 213, messages: 170 },
    { date: "2024-05-27", calls: 420, messages: 460 },
    { date: "2024-05-28", calls: 233, messages: 190 },
    { date: "2024-05-29", calls: 78,  messages: 130 },
    { date: "2024-05-30", calls: 340, messages: 280 },
    { date: "2024-05-31", calls: 178, messages: 230 },
    { date: "2024-06-01", calls: 178, messages: 200 },
    { date: "2024-06-02", calls: 470, messages: 410 },
    { date: "2024-06-03", calls: 103, messages: 160 },
    { date: "2024-06-04", calls: 439, messages: 380 },
    { date: "2024-06-05", calls: 88,  messages: 140 },
    { date: "2024-06-06", calls: 294, messages: 250 },
    { date: "2024-06-07", calls: 323, messages: 370 },
    { date: "2024-06-08", calls: 385, messages: 320 },
    { date: "2024-06-09", calls: 438, messages: 480 },
    { date: "2024-06-10", calls: 155, messages: 200 },
    { date: "2024-06-11", calls: 92,  messages: 150 },
    { date: "2024-06-12", calls: 492, messages: 420 },
    { date: "2024-06-13", calls: 81,  messages: 130 },
    { date: "2024-06-14", calls: 426, messages: 380 },
    { date: "2024-06-15", calls: 307, messages: 350 },
    { date: "2024-06-16", calls: 371, messages: 310 },
    { date: "2024-06-17", calls: 475, messages: 520 },
    { date: "2024-06-18", calls: 107, messages: 170 },
    { date: "2024-06-19", calls: 341, messages: 290 },
    { date: "2024-06-20", calls: 408, messages: 450 },
    { date: "2024-06-21", calls: 169, messages: 210 },
    { date: "2024-06-22", calls: 317, messages: 270 },
    { date: "2024-06-23", calls: 480, messages: 530 },
    { date: "2024-06-24", calls: 132, messages: 180 },
    { date: "2024-06-25", calls: 141, messages: 190 },
    { date: "2024-06-26", calls: 434, messages: 380 },
    { date: "2024-06-27", calls: 448, messages: 490 },
    { date: "2024-06-28", calls: 149, messages: 200 },
    { date: "2024-06-29", calls: 103, messages: 160 },
    { date: "2024-06-30", calls: 446, messages: 400 },
  ];

const chartConfig = {
  visitors: {
    label: "Usage",
  },
  desktop: {
    label: "calls",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "messages",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <section className="flex flex-col gap-4">
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Number Usage</CardTitle>
          <CardDescription>
           Total usage per time period
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="calls"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="messages"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>



<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        
{summaryStats.map((stat) => (
    <SummaryStatCard key={stat.label} {...stat} />
))}
</div>
    </section>
  )
}
