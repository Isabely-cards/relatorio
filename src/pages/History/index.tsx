import { useNavigate } from "react-router-dom";
import { useSalesStore } from "../../store/salesStore";

export default function History() {
  const sales = useSalesStore((state) => state.sales);
  const navigate = useNavigate();

  return (
    <section className="space-y-6 w-full">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-pink-800 dark:to-pink-400 bg-clip-text text-transparent">
            Histórico de Vendas
          </h2>
          <p className="text-sm text-white/70">
            Visualize, edite e acompanhe todas as vendas registradas
          </p>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="glass-card rounded-3xl border border-white/10 shadow-xl w-full">
        {sales.length === 0 ? (
          <div className="text-center py-16 text-white/50">
            Nenhuma venda cadastrada ainda
          </div>
        ) : (
          <>
            {/* ================= MOBILE (Cards) ================= */}
            <div className="md:hidden space-y-4 p-4">
              {sales.map((sale) => (
                <div
                  key={sale.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-white">
                        {sale.product}
                      </h3>
                      <span className="text-xs text-white/60">
                        {sale.seller} <br/>
                        {new Date(sale.date).toLocaleDateString("pt-BR")}
                      </span>
                    </div>

                    <span className="font-semibold text-white">
                      R$ {sale.value.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          sale.status === "Pago"
                            ? "bg-[var(--success)]/15 text-[var(--success)]"
                            : sale.status === "Cancelado"
                            ? "bg-[var(--danger)]/15 text-[var(--danger)]"
                            : "bg-[var(--warning)]/15 text-[var(--warning)]"
                        }
                      `}
                    >
                      {sale.status}
                    </span>

                    <button
                      onClick={() => navigate(`/sales/edit/${sale.id}`)}
                      className="text-xs font-medium text-[var(--color-primary)] hover:underline"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= DESKTOP (Tabela) ================= */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="text-left text-[var(--color-secondary)] border-b border-white/10">
                    <th className="py-4 px-4">Data</th>
                    <th className="px-4">Produto</th>
                    <th className="px-4">Categoria</th>
                    <th className="px-4">Vendedor</th>
                    <th className="px-4">Valor</th>
                    <th className="px-4">Status</th>
                    <th className="px-4 text-right">Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {sales.map((sale) => (
                    <tr
                      key={sale.id}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        {new Date(sale.date).toLocaleDateString("pt-BR")}
                      </td>

                      <td className="px-4">{sale.product}</td>
                      <td className="px-4">{sale.category}</td>
                      <td className="px-4">{sale.seller}</td>

                      <td className="px-4 font-medium">
                        R$ {sale.value.toFixed(2)}
                      </td>

                      <td className="px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium
                            ${
                              sale.status === "Pago"
                                ? "bg-[var(--success)]/15 text-[var(--success)]"
                                : sale.status === "Cancelado"
                                ? "bg-[var(--danger)]/15 text-[var(--danger)]"
                                : "bg-[var(--warning)]/15 text-[var(--warning)]"
                            }
                          `}
                        >
                          {sale.status}
                        </span>
                      </td>

                      <td className="px-4 text-right">
                        <button
                          onClick={() =>
                            navigate(`/sales/edit/${sale.id}`)
                          }
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 transition"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
}