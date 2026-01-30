import { StatCard } from "../../components/StatCard";
import { DashboardCard } from "../../components/DashboardCard";
import { MonthlyRevenueChart } from "../../components/tables/MonthlyRevenueChart";
import { SalesByCategoryChart } from "../../components/tables/SalesByCategoryChart";
import { SalesBySellerTable } from "../../components/tables/SalesBySellerTable";
import { TopProductsTable } from "../../components/tables/TopProductsTable";
import { useDashboard } from "../../hooks/useDashboard";
import { FaSpinner } from "react-icons/fa";

export default function Dashboard() {
  const { data, loading } = useDashboard();

  if (loading) {
    return <div className="opacity-60">
      <FaSpinner
        className="animate-spin text-white mr-2"
        size={30}
      />.</div>;
  }

  return (
    <section className="space-y-6">

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
