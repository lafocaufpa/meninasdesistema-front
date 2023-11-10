import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";

export function Layout() {
    return (
        <>
            <Header />
            <Search />
            <Outlet />
            <Footer />
        </>
    )
}