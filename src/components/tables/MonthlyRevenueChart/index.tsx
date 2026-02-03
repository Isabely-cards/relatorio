import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { month: string; total: number }[];
}

export function MonthlyRevenueChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          tick={{ fill: "var(--text-primary)" }}
          axisLine={{ stroke: "var(--text-primary)" }}
          tickLine={{ stroke: "var(--text-primary)" }}
        />

        <YAxis
          tick={{ fill: "var(--text-primary)" }}
          axisLine={{ stroke: "var(--text-primary)" }}
          tickLine={{ stroke: "var(--text-primary)" }}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#000",
            border: "none",
            color: "#fff",
          }}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#fff" }}
        />

        <Line
          type="monotone"
          dataKey="total"
          stroke="var(--text-primary)"
          strokeWidth={3}
          dot={{ fill: "var(--text-primary)" }}
          activeDot={{ fill: "var(--text-primary)", r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>

  );
}
