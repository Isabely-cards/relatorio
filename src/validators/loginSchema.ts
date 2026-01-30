import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),

  password: Yup.string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Senha é obrigatória"),
});
