import { Formik, Form } from "formik";
import { AuthButton } from "../../../components/AuthButton";
import { AuthInput } from "../../../components/AuthInput";
import { resetPasswordSchema } from "../../../validators/resetPasswordSchema";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    return (
        <>

            <h2 className="text-xl font-semibold text-[var(--color-secondary)]">
                Recuperar senha
            </h2>

            <Formik
                initialValues={{ email: "" }}
                validationSchema={resetPasswordSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    // chamada da API de reset
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-3">
                        <AuthInput
                            name="email"
                            type="email"
                            label="E-mail"
                            placeholder="usuario@empresa.com"
                            autoComplete="email"
                        />
                        <div className="flex justify-center">
                            <Link
                                to="/"
                                className="text-sm text-[var(--color-secondary)] hover:underline"
                            >
                                Já tem conta? Entrar
                            </Link>
                        </div>

                        <AuthButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar link"}
                        </AuthButton>
                    </Form>
                )}
            </Formik>
        </>
    );
}
