import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useSalesStore, type SaleStatus } from "../../store/salesStore";
import { AuthInput } from "../../components/AuthInput";
import { createSaleSchema } from "../../validators/createSaleSchema";
import { CATEGORIES } from "../../utils/exportDashboardPDF/CATEGORIES";

export default function CreateSale() {
    const addSale = useSalesStore((state) => state.addSale);
    const navigate = useNavigate();
    function formatCurrency(value: number) {
        if (!value) return "";

        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    return (
        <section className=" md:w-[50%]">
            <header>
                <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
                    Registrar venda
                </h2>
                <p className="text-[var(--text-primary)]">
                    Cadastre uma nova venda no sistema
                </p>
            </header>

            <Formik
                initialValues={{
                    date: "",
                    product: "",
                    category: "",
                    value: 0,
                    seller: "",
                    status: "Pago",
                }}
                validationSchema={createSaleSchema}
                onSubmit={(values) => {
                    addSale({ ...values, status: values.status as SaleStatus });
                    navigate("/");
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="
                        glass-card
                        p-4
                        sm:p-6
                        md:p-8
                        rounded-3xl
                        space-y-6
                        backdrop-blur-xl
                        shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                        border border-white/10
                        ">

                        <AuthInput
                            name="date"
                            type="date"
                            label="Data da venda"
                        />

                        <AuthInput
                            name="product"
                            placeholder="Produto"
                            label="Produto"
                        />

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


                        <AuthInput
                            name="seller"
                            placeholder="Vendedor"
                            label="Vendedor"
                        />

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-white/70">
                                Status
                            </label>

                            <Field
                                as="select"
                                name="status"
                                className="
                                    input-auth
                                    bg-white/10
                                    hover:bg-white/15
                                    focus:ring-2
                                    focus:ring-[var(--color-primary)]
                                    transition
                                "
                            >
                                <option value="">SELECIONE UMA OPÇÃO</option>
                                <option value="Processando">Processando</option>
                                <option value="Pago">Pago</option>
                                <option value="Cancelado">Cancelado</option>
                            </Field>

                        </div>

                        <div className="flex justify-end pt-6 border-t border-white/10">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                        px-8 py-3 rounded-2xl
                                        bg-[var(--color-primary)]
                                        text-white font-medium
                                        shadow-lg shadow-pink-500/30
                                        hover:scale-[1.03]
                                        hover:shadow-pink-500/50
                                        active:scale-95
                                        transition-all
                                        disabled:opacity-50
                                        disabled:cursor-not-allowed
                                        "
                            >
                                Salvar venda
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </section>
    );
}