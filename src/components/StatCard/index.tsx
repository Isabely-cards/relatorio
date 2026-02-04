interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="
      bg-[var(--bg-card)]
      backdrop-blur-xl
      border border-white/10
      rounded-xl
      p-4
      hover:scale-[1.02]
      transition
    ">
      <p className="text-sm opacity-70 text-[var(--color-secondary)]">{title}</p>

      <h2 className="text-2xl font-bold mt-1 text-[var(--text-primary)]">
        {value}
      </h2>

      {subtitle && (
        <span className="text-sm text-green-400">
          {subtitle}
        </span>
      )}
    </div>
  );
}