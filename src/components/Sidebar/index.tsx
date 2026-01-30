import { NavLink } from "react-router-dom";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();

  const linkBase =
    "w-full block px-3 py-2 rounded transition";

  const linkActive =
    "bg-white/15 border-l-4 border-[var(--color-primary)]";

  const linkInactive =
    "hover:bg-white/10";

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          h-screen md:h-auto
          w-64
          bg-[#6571a1]
          dark:bg-[#050C28]
          backdrop-blur-xl
          border-r border-white/10
          p-4
          m-0 md:m-2
          rounded-none md:rounded-2xl
          flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header mobile */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-lg font-bold text-white">SYSTEM</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Title desktop */}
        <h2 className="hidden md:block relative text-lg font-bold mb-6 pb-2 text-white text-center
          after:absolute after:left-0 after:bottom-0
          after:h-1 after:w-full
          after:bg-gradient-to-r after:from-gray-400 after:via-white after:to-gray-400 after:rounded-full
        ">
          SYSTEM
        </h2>

        <nav className="space-y-2 flex-1">
          <NavLink to="/" className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }>
            Dashboard
          </NavLink>

          <NavLink to="/report" className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }>
            Relatórios
          </NavLink>

          <NavLink to="/create/report" className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }>
            Criar relatório
          </NavLink>

          <NavLink to="/history" className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }>
            Histórico
          </NavLink>
          <NavLink to="/myAccont" className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }>
            Minha conta
          </NavLink>
        </nav>

        <button
          onClick={toggleTheme}
          className="
            mt-4 flex items-center justify-center gap-2
            px-3 py-2 rounded-lg
            bg-white/10 hover:bg-white/20
            transition
          "
        >
          {theme === "dark" ? (
            <>
              <Sun size={18} />
              <span className="text-sm">Light</span>
            </>
          ) : (
            <>
              <Moon size={18} />
              <span className="text-sm">Dark</span>
            </>
          )}
        </button>
      </aside>
    </>
  );
}
