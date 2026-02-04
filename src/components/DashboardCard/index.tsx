
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative
        p-5
        flex flex-col
        ${height}
        rounded-2xl
        bg-[var(--bg-card)]
        backdrop-blur-xl
        border border-white/10
        shadow-lg
      `}
    >
      <h3 className="mb-3 text-sm font-semibold text-[var(--color-secondary)]">
        {title}
      </h3>

      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );
}

