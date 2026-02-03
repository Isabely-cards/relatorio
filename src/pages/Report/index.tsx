import { DashboardCard } from "../../components/DashboardCard";
import { StatCard } from "../../components/StatCard";

export default function Report() {
  return (
    <section className="space-y-6">

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
            Relatório de vendas
          </h2>
          <p className="text-[var(--text-primary)]">
            Período: 01/01/2026 até 31/01/2026
          </p>
        </div>

        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded-xl hover:bg-gray-100">
            Exportar PDF
          </button>
          <button className="border px-4 py-2 rounded-xl hover:bg-gray-100">
            Exportar Excel
          </button>
        </div>
      </header>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Faturamento" value="R$ 45.000" />
        <StatCard title="Vendas" value="320" />
        <StatCard title="Produtos" value="58" />
        <StatCard title="Vendedores" value="12" />
      </div>

      {/* Chart */}
      <DashboardCard title="Faturamento por dia" height="h-80">
        <div className="flex items-center justify-center h-full text-gray-400">
          📊 Gráfico aqui
        </div>
      </DashboardCard>

      {/* Table */}
      <DashboardCard title="Detalhamento das vendas" height="h-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Produto</th>
              <th className="text-left px-4 py-2">Quantidade</th>
              <th className="text-left px-4 py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item} className="border-t">
                <td className="px-4 py-2">Produto A</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">R$ 1.200</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardCard>

    </section>
  );
}
