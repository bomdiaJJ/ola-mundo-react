import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(props) {
    return (
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}