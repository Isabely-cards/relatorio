import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { AuthButton } from "../../../components/AuthButton";
import { AuthInput } from "../../../components/AuthInput";
import { createUserSchema } from "../../../validators/createUserSchema";

export default function CreateUser() {
  return (
    <>
      <h2 className="text-xl font-semibold text-[var(--color-secondary)]">
        Criar usuário
      </h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={createUserSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // chamada da API
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3">
            <AuthInput
              name="name"
              type="text"
              label="Nome"
              placeholder="Seu nome completo"
              autoComplete="name"
            />

            <AuthInput
              name="email"
              type="email"
              label="E-mail"
              placeholder="usuario@empresa.com"
              autoComplete="email"
            />

            <AuthInput
              name="password"
              type="password"
              label="Senha"
              placeholder="••••••••"
              autoComplete="new-password"
            />

            <AuthInput
              name="confirmPassword"
              type="password"
              label="Confirmar senha"
              placeholder="••••••••"
              autoComplete="new-password"
            />

            <AuthButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Criando usuário..." : "Criar usuário"}
            </AuthButton>

            <div className="flex justify-center">
              <Link
                to="/"
                className="text-sm text-[var(--color-secondary)] hover:underline"
              >
                Já tem conta? Entrar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}