import * as Yup from "yup";

export const resetPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),
});
