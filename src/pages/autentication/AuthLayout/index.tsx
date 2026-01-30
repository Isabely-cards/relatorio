import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <section
      className="bg-cover bg-center w-screen h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/backgroundAuth.png')" }}
    >
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 m-2 w-full max-w-md flex flex-col gap-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">
          Sistema de Relatórios de Vendas
        </h1>
        <Outlet />
      </div>
    </section>
  );
}