import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useReportStore } from "../../store/reportStore";

export default function CreateReport() {
  const navigate = useNavigate();
  const setFilters = useReportStore((state) => state.setFilters);
  const filters = useReportStore((state) => state.filters);

  // bg-gradient-to-r from-[var(--color-primary)] to-pink-400
  // bg-clip-text text-transparent
  return (
    <section className="
      min-h-screen
      flex items-center justify-center
      px-4 py-10
    ">
      <div className="w-full max-w-5xl space-y-8">

        {/* Header */}
        <header className="space-y-1">
          <h2 className="
            text-3xl font-bold
            text-[var(--color-primary)]
          ">
            Criar relatório
          </h2>

          <p className="text-sm text-[var(--text-secondary)]">
            Defina o período e quais dados deseja visualizar no dashboard
          </p>
        </header>

        <Formik
          initialValues={filters}
          onSubmit={(values) => {
            setFilters(values);
            navigate("/");
          }}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="
                  glass-card
                  p-8
                  rounded-3xl
                  space-y-8
                  bg-white/60
                  backdrop-blur-xl
                  backdrop-brightness-110
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  border border-[var(--text-secondary)]/30

            ">

              {/* Datas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[var(--text-secondary)]">
                    Data inicial
                  </label>
                  <input
                    type="date"
                    className="input-auth"
                    value={values.startDate}
                    onChange={(e) =>
                      setFieldValue("startDate", e.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[var(--text-secondary)]">
                    Data final
                  </label>
                  <input
                    type="date"
                    className="input-auth"
                    value={values.endDate}
                    onChange={(e) =>
                      setFieldValue("endDate", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-[var(--text-secondary)]">
                  Dados do relatório
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { key: "faturamentoMensal", label: "Faturamento mensal" },
                    { key: "vendasPorCategoria", label: "Vendas por categoria" },
                    { key: "topProdutos", label: "Produtos mais vendidos" },
                    { key: "vendasPorVendedor", label: "Vendas por vendedor" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="
                        flex items-center gap-3
                        p-4 rounded-xl
                        bg-[var(--bg-card)]
                        dark:bg-white/5
                        hover:bg-[#b4b4b4]
                        hover:dark:bg-white/10
                        transition
                        cursor-pointer
                      "
                    >
                      <input
                        type="checkbox"
                        checked={values.show[item.key as keyof typeof values.show]}
                        onChange={() =>
                          setFieldValue(
                            `show.${item.key}`,
                            !values.show[item.key as keyof typeof values.show]
                          )
                        }
                        className="
                          w-4 h-4
                          accent-[var(--color-primary)]
                        "
                      />

                      <span className="text-sm text-[var(--text-secondary)]">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Botão */}
              <div className="flex justify-end pt-6 border-t border-[var(--border-color)]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    px-8 py-3 rounded-2xl
                    bg-[var(--color-primary)]
                    text-white font-medium
                    shadow-lg shadow-pink-500
                    dark:shadow-pink-500/30
                    hover:scale-[1.03]
                    hover:shadow-pink-500/50
                    hover:cursor-pointer
                    active:scale-95
                    transition-all
                    disabled:opacity-50
                  "
                >
                  Gerar relatório
                </button>
              </div>

            </Form>
          )}
        </Formik>

      </div>
    </section>
  );
}
