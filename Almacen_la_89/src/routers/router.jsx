import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/Login.jsx";
import Menu from "../views/Menu.jsx";
import Registro from "../views/Registro.jsx"
import Buscar from "../views/Administrador/Buscar.jsx"
import Inventario from "../views/Administrador/Inventario.jsx";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Registro/>} />
                <Route path= "/login" element={<Login/>}/>
                <Route path= "/menu" element={<Menu/>}/>
                <Route path ="/registro" element={<Registro/>}/>
                <Route path= "/inventario" element={<Inventario/>}/>
                <Route path= "/buscar" element={<Buscar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router