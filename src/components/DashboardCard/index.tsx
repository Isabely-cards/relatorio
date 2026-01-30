interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  height?: string;
}

export function DashboardCard({
  title,
  children,
  height = "h-72",
}: DashboardCardProps) {
  return (
    <div className={`glass-card p-4 flex flex-col ${height} bg-white/20 rounded-2xl`}>
      <h3 className="mb-3 font-semibold text-[#A3E635]">
        {title}
      </h3>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
