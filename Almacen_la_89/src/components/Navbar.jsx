import "../styles/Navbar.css"
import { Link } from "react-router-dom";

export function Navbar(){
    
    /* Para la barra de navegación deseo los siguientes atributos:
    Logo pagafacil, Home (Menu), About us, Alarms, Profile, Settings, Log out*/

    /* cambiar texto de navbar por iconos*/

    return(
        <header className="navbar-header">
            <img className="navbar-logo" src= "/89.png" alt="logo" />

            <nav className = "navbar-container">
                <ul className = "navbar-ol">
                    <li className = "navbar-li"> <a href="#">Profile</a></li>
                    <li className = "navbar-li"> <a href="#">Inventario</a></li>
                    <li className = "navbar-li"><a href="#">Venta</a></li>
                    <li className = "navbar-li"><a href="#">Clientes</a></li>
                </ul>
            </nav>

            <Link to="/login" className="navbar-button">
                Salir
            </Link>
        </header>
    )
}

export default Navbar