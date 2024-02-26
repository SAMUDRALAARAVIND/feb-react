
import { Outlet, Link } from "react-router-dom"

export const PrivateLayout = () => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));

    if (!isLoggedIn) {
        return <Link to="/entry" style={{ color: "#fff" }}>Please Login</Link>
    }

    return <Outlet />
}