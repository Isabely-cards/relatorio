import { StatCard } from "../../components/StatCard";
import { DashboardCard } from "../../components/DashboardCard";
import { MonthlyRevenueChart } from "../../components/tables/MonthlyRevenueChart";
import { SalesByCategoryChart } from "../../components/tables/SalesByCategoryChart";
import { SalesBySellerTable } from "../../components/tables/SalesBySellerTable";
import { TopProductsTable } from "../../components/tables/TopProductsTable";
import { useDashboard } from "../../hooks/useDashboard";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Dashboard() {
  const { data, loading } = useDashboard();
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    console.log(data)
  }, [])

  if (loading) {
    return <div className="opacity-60">
      <FaSpinner
        className="animate-spin text-white mr-2"
        size={30}
      />.</div>;
  }

  const handlePrint = useReactToPrint({
    contentRef: dashboardRef,
    documentTitle: "Relatório de Vendas",
  });

  return (
    <section className="space-y-6" id="dashboard-pdf" ref={dashboardRef}>

      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4" id="dashboard-header">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
            Dashboard de Vendas
          </h2>
          <p className="text-[var(--text-primary)]">
            Visão geral do desempenho comercial
          </p>
        </div>

        <div className="flex gap-2">

          <button type="button" onClick={handlePrint}
            className="
          px-4 py-2 rounded-xl
          hover:cursor-pointer
          hover:animate-bounce
          bg-[var(--color-primary)]
          text-white text-sm
        ">
            Exportar PDF
          </button>
        </div>
      </header>      {/* KPIs */}
      <div id="dashboard-kpis" className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Faturamento" value={`R$ ${data.stats.faturamento}`} />
        <StatCard title="Vendas" value={data.stats.vendas} />
        <StatCard title="Produtos" value={data.stats.produtos} />
        <StatCard title="Vendedores" value={data.stats.vendedores} />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Faturamento mensal"
          height="h-80"
        >
          <MonthlyRevenueChart data={data.faturamentoMensal} />
        </DashboardCard>

        <DashboardCard
          title="Vendas por categoria"
          height="h-80"
        >
          <SalesByCategoryChart data={data.vendasPorCategoria} />
        </DashboardCard>
      </div>

      {/* Tabelas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Top produtos" height="h-auto">
          <TopProductsTable data={data.topProdutos} />
        </DashboardCard>

        <DashboardCard title="Vendas por vendedor" height="h-auto">
          <SalesBySellerTable data={data.vendasPorVendedor} />
        </DashboardCard>
      </div>

    </section>
  );
}
