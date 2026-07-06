import {R_Menu} from "./R_Menu.jsx"
import {Navbar} from "../components/Navbar.jsx"

export function Menu (){
    return(

        // Crear un componente con javascript para crear el menú con las tres opciones que terminan siendo iguales
        <article>

            <Navbar/>
            
            <R_Menu name="Menú Almacen 89" descripcion="Este es el menú" imagen="public/89.png"/>
        </article>
    )
}

export default Menu