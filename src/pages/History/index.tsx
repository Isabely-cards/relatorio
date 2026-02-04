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
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Histórico de Vendas
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Visualize, edite e acompanhe todas as vendas registradas
          </p>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="glass-card rounded-3xl border border-[var(--border-color)] dark:border-white/10 shadow-xl w-full">
        {sales.length === 0 ? (
          <div className="text-center py-16 text-[var(--text-secondary)]">
            Nenhuma venda cadastrada ainda
          </div>
        ) : (
          <>
            {/* ================= MOBILE (Cards) ================= */}
            <div className="md:hidden space-y-4 p-4">
              {sales.map((sale) => (
                <div
                  key={sale.id}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--border-color)] p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {sale.product}
                      </h3>
                      <span className="text-xs text-[var(--text-secondary)]">
                        {sale.seller} <br/>
                        {new Date(sale.date).toLocaleDateString("pt-BR")}
                      </span>
                    </div>

                    <span className="font-semibold text-[var(--text-primary)]">
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
                      className="text-xs font-medium text-[var(--color-primary)] hover:underline hover:cursor-pointer"
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
                  <tr className="text-left text-[var(--color-secondary)] border-b border-[var(--border-color)]">
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
                      className="border-b border-[var(--border-color)] hover:bg-[var(--border-color)]/50 transition text-[var(--text-primary)]"
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
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--border-color)] hover:[var(--border-color)]/30 transition hover:cursor-pointer"
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