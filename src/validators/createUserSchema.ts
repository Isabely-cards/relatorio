import * as Yup from "yup";

export const createUserSchema = Yup.object({
  name: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .required("Nome é obrigatório"),

  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),

  password: Yup.string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Senha é obrigatória"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas não conferem")
    .required("Confirme a senha"),
});