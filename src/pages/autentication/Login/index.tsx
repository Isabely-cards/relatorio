import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { AuthButton } from "../../../components/AuthButton";
import { AuthInput } from "../../../components/AuthInput";
import { loginSchema } from "../../../validators/loginSchema";

export default function Login() {
    return (
        <>
            <h2 className="text-xl font-semibold text-[var(--color-secondary)]">
                Login
            </h2>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col">
                        <AuthInput
                            name="email"
                            type="email"
                            placeholder="username@gmail.com"
                            label="E-mail"
                            autoComplete="email"
                        />
                        <div>
                            <div className="flex justify-end">
                                <Link
                                    to="/reset"
                                    className="text-sm translate-y-5 text-[var(--color-secondary)] hover:underline"
                                >
                                    Recuperar senha?
                                </Link>
                            </div>

                            <AuthInput
                                name="password"
                                type="password"
                                label="Senha"
                                placeholder="******"
                                autoComplete="current-password"
                            />
                        </div>

                        <div className="flex justify-start mt-2">
                            <Link
                                to="/create"
                                className="text-sm text-[var(--color-secondary)] hover:underline"
                            >
                                Criar usuário?
                            </Link>
                        </div>

                        <div className="mt-3">
                            <AuthButton type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Entrando..." : "Entrar"}
                            </AuthButton>

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
