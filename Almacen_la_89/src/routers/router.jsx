import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/Login.jsx";
import Menu from "../views/Menu.jsx";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path= "/login" element={<Login/>}/>
                <Route path= "/menu" element={<Menu/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router