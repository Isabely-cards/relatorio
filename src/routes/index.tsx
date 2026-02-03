import Auth from "./Auth"
import DefaultRoutes from "./DefaultRoutes"

export default function AppRoutes() {
    const signed = true

    return signed
        ? <DefaultRoutes />
        : <Auth />
}