import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/autentication/Login"
import { AuthLayout } from "../pages/autentication/AuthLayout"
import ResetPassword from "../pages/autentication/ResetPassword"
import CreateUser from "../pages/autentication/CreateUser"

export default function Auth() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="reset" element={<ResetPassword />} />
                    <Route path="create" element={<CreateUser />} />
                </Route>
                {/* pagina não encontrada */}
                <Route
                    path="*"
                    element={
                        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
                            <div className="flex flex-col items-center text-center max-w-md">
                                <img
                                    src="/assets/error.png"
                                    alt="Imagem de um robo com erro 404"
                                    className="w-72 md:w-96 mb-6 drop-shadow-xl animate-float"
                                />

                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Opa! Página não encontrada
                                </h1>

                                <p className="text-gray-500 mb-6">
                                    Parece que você tentou acessar uma rota que não existe.
                                </p>

                                <a
                                    href="/"
                                    className="
                                    inline-flex items-center gap-2
                                    px-6 py-3
                                    bg-[var(--color-primary)]
                                    text-white font-medium
                                    rounded-xl
                                    shadow-lg
                                    hover:shadow-xl hover:scale-105
                                    transition-all duration-300
                                "
                                >
                                    Voltar para a tela principal
                                </a>
                            </div>
                        </div>

                    }
                />
            </Routes>
        </BrowserRouter>
    )
}