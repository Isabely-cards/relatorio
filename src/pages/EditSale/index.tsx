import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSalesStore } from "../../store/salesStore";
import { AuthInput } from "../../components/AuthInput";
import { createSaleSchema } from "../../validators/createSaleSchema";
import { CATEGORIES } from "../../utils/exportDashboardPDF/CATEGORIES";

export default function EditSale() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sales = useSalesStore((state) => state.sales);
  const updateSale = useSalesStore((state) => state.updateSale);

  const sale = sales.find((s) => s.id === id);

  function formatCurrency(value: number) {
    if (!value) return "";

    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (!sale) {
    return (
      <div className="text-center py-20 text-white/60">
        Venda não encontrada
      </div>
    );
  }

  return (
    <section className="
      min-h-screen
      flex items-center justify-center
      px-4 py-10
    ">
      <div className="w-full max-w-4xl space-y-8">

        {/* Header */}
        <header className="space-y-1">
          <h2 className="
            text-3xl font-bold
            bg-gradient-to-r from-[var(--color-primary)] to-pink-400
            bg-clip-text text-transparent
          ">
            Editar venda
          </h2>

          <p className="text-sm text-white/70">
            Atualize os dados da venda registrada
          </p>
        </header>

        <Formik
          initialValues={{
            date: sale.date,
            product: sale.product,
            category: sale.category,
            value: sale.value,
            seller: sale.seller,
            status: sale.status,
          }}
          validationSchema={createSaleSchema}
          onSubmit={(values) => {
            updateSale(sale.id, values);
            navigate("/history");
          }}
        >
          {({ isSubmitting }) => (
            <Form className="
              glass-card
              p-8
              rounded-3xl
              space-y-6
              backdrop-blur-xl
              border border-white/10
              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            ">

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AuthInput name="date" type="date" label="Data" />
                <AuthInput name="product" label="Produto" />
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/70">
                    Categoria
                  </label>

                  <Field
                    as="select"
                    name="category"
                    className="
                                input-auth
                                bg-white/10
                                hover:bg-white/15
                                focus:ring-2
                                focus:ring-[var(--color-primary)]
                                transition
                                "
                  >
                    <option value="">Selecione uma categoria</option>

                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Field>
                </div>                
                <AuthInput name="seller" label="Vendedor" />
                <Field name="value">
                  {({ field, form }: any) => (
                    <div className="flex flex-col gap-1">
                      <label className="text-sm text-white/70">
                        Valor
                      </label>

                      <input
                        type="text"
                        className="input-auth"
                        placeholder="R$ 0,00"
                        value={formatCurrency(field.value)}
                        onChange={(e) => {
                          const rawValue = e.target.value
                            .replace(/\D/g, "");

                          const numericValue = Number(rawValue) / 100;

                          form.setFieldValue("value", numericValue);
                        }}
                      />
                    </div>
                  )}
                </Field>
                <div className="flex flex-col gap-1">
                <label className="text-sm text-white/70">
                  Status
                </label>

                <Field
                  as="select"
                  name="status"
                  className="input-auth"
                >
                  <option value="Processando">Processando</option>
                  <option value="Pago">Pago</option>
                  <option value="Cancelado">Cancelado</option>
                </Field>
              </div>
              </div>

              {/* Ações */}
              <div className="
                flex flex-col md:flex-row
                items-center justify-between
                gap-4
                pt-6 border-t border-white/10
              ">
                <button
                  type="button"
                  onClick={() => navigate("/history")}
                  className="
                                      hover:cursor-pointer
                    px-6 py-2 rounded-xl
                    bg-white/5
                    hover:bg-white/10
                    text-white/80
                    transition
                  "
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    px-8 py-3 rounded-2xl
                    bg-[var(--color-primary)]
                    text-white font-medium
                    shadow-lg shadow-pink-500/30
                    hover:scale-[1.03]
                    hover:cursor-pointer
                    hover:shadow-pink-500/50
                    active:scale-95
                    transition-all
                    disabled:opacity-50
                  "
                >
                  Salvar alterações
                </button>
              </div>

            </Form>
          )}
        </Formik>

      </div>
    </section>
  );
}
