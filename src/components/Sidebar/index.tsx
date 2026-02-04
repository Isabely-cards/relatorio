import { NavLink, useLocation } from "react-router-dom";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const linkBase =
    "group text-[var(--color-primary)] relative w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden";

  const linkActive =
    "bg-white/50 dark:bg-white/20 text-white shadow-inner";

  const linkInactive =
    "text-[var(--text-secondary)] hover:text-white hover:bg-white/30 hover:dark:bg-white/10";

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          h-screen md:h-auto
          w-64
          bg-[#050C28]/20 dark:bg-[#050C28]/80
          backdrop-blur-2xl
          border-r border-white/10
          p-4
          m-0 md:m-2
          rounded-none md:rounded-2xl
          flex flex-col
          shadow-2xl
          transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-lg font-bold text-[var(--color-primary)] dark:text-white tracking-wide">
            SaleFlow
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/10 transition hover:cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <h2 className="
          hidden md:block relative text-lg font-bold mb-6 pb-2
          text-[var(--color-primary)] dark:text-white text-center tracking-widest
          after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
          after:h-1 after:w-20
          after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent
          
          after:rounded-full
        ">
          SaleFlow
        </h2>

        <nav className="space-y-2 flex-1">
          {[
            { to: "/", label: "Dashboard", id:"tour-dashboard" },
            { to: "/create/sale", label: "Criar vendas", id:"tour-create-sale"},
            { to: "/create/report", label: "Criar relatório", id:"tour-create-report" },
            { to: "/history", label: "Histórico", id:"tour-history"},
            // { to: "/create/sale", label: "Registrar venda" },
          ].map((item) => (
            <NavLink
              key={item.to}
              id={item.id}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              <span
                className={`
                  absolute left-0 top-0 h-full w-1
                  bg-[var(--color-primary)]
                  text-[var(--color-primary)]
                  transition-all duration-300
                  ${location.pathname === item.to
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-40"}
                `}
              />

              <span className="
                absolute inset-0
                bg-gradient-to-r from-white/10 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity
              " />

              <span className="relative z-10 text-[var(--color-primary)] dark:text-white font-semibold">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        <button
          id="tour-theme-toggle"
          onClick={toggleTheme}
          className="
            mt-4 flex items-center justify-center gap-2
            px-3 py-2 rounded-xl
            bg-[var(--bg-card)] hover:bg-[var(--bg-card)]/50
            active:scale-95
            text-[var(--text-primary)]
            transition-all duration-300
            shadow-inner
            hover:cursor-pointer
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
