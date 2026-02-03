import * as Yup from "yup";

export const createSaleSchema = Yup.object({
  date: Yup.string().required("Data obrigatória"),
  product: Yup.string().required("Produto obrigatório"),
  category: Yup.string().required("Categoria obrigatória"),
  value: Yup.number()
    .typeError("Informe um valor válido")
    .positive("Valor deve ser maior que zero")
    .required("Valor obrigatório"),
  seller: Yup.string().required("Vendedor obrigatório"),
  status: Yup.string().required(),
});