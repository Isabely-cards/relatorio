import { LogOut, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Topbar({ onMenu }: { onMenu: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <header className="
      h-16
      px-6
      flex items-center justify-between
      bg-[#050C28]/20
      dark:bg-[#050C28]
      backdrop-blur-xl
      m-2
       rounded-2xl
      border-b border-white/10
    ">
      <button onClick={onMenu} className="md:hidden">
        <Menu size={22} />
      </button>
      <span className="text-sm opacity-70">
        {pathname === '/' ? 'Dashboard': pathname === '/create/sale' ? 'Criar vendas': pathname === '/create/report' ? 'Criar Relatórios': 'Histórico'}
      </span>

      <button
        onClick={handleLogout}
        className="
          flex items-center gap-2
          px-3 py-2
          rounded-lg
          bg-white/10 hover:bg-white/20
          transition
        "
      >
        <LogOut size={16} />
        <span className="text-sm">Logout</span>
      </button>
    </header>
  );
}
