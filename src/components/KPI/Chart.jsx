import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f"];

export default function RatingsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <BarChart data={data} margin={{ top: 20, right: 20, left: 30, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        <XAxis
          dataKey="rating"
          label={{
            value: "RATINGS",
            position: "insideBottom",
            offset: -5
          }}
        />

        <YAxis
          label={{
            value: "No. of Ratings",
            angle: -90,
            position: "center"
          }}
        />

        <Bar
          dataKey="count"
          // IMPORTANT: function form (v3-safe)
          shape={(props) => {
            const { x, y, width, height, index } = props;
            // guard: if height is 0/undefined, don't draw
            if (!height || height <= 0) return null;

            return (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={COLORS[index % COLORS.length]}
                rx={4}
              />
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}