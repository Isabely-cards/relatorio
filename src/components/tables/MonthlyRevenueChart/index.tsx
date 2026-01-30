import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { mes: string; valor: number }[];
}

export function MonthlyRevenueChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="mes"
          tick={{ fill: "#ffffff" }}
          axisLine={{ stroke: "#ffffff" }}
          tickLine={{ stroke: "#ffffff" }}
        />

        <YAxis
          tick={{ fill: "#ffffff" }}
          axisLine={{ stroke: "#ffffff" }}
          tickLine={{ stroke: "#ffffff" }}
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
          dataKey="valor"
          stroke="#ffffff"
          strokeWidth={3}
          dot={{ fill: "#ffffff" }}
          activeDot={{ fill: "#ffffff", r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>

  );
}
