import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topar";
import { useEffect, useState } from "react";
import { appTour } from "../../tours/appTour";

export default function DefaultLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("seen-tour");

    if (hasSeenTour) return;

    // Desktop → roda direto
    if (!isMobile) {
      appTour.drive();
      localStorage.setItem("seen-tour", "true");
    }

    // Mobile → só roda quando sidebar abrir
    if (isMobile && sidebarOpen) {
      // pequeno delay pra garantir que o sidebar já renderizou
      setTimeout(() => {
        appTour.drive();
        localStorage.setItem("seen-tour", "true");
      }, 300);
    }
  }, [sidebarOpen, isMobile]);

  return (
    <section className="flex min-h-screen text-white bg-[var(--bg-page)]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">
        <Topbar onMenu={() => setSidebarOpen(true)} />

        <main className="p-6 grid gap-6 text-black">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
