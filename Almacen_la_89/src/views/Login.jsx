import {Navbar} from "../components/Navbar"
import "../styles/Login.css"

function Login(){

    return(

        <form className="login-container">

            <h1 className="login-title"> Iniciar Sesión</h1>
            
            <label className="login-label" >Email:</label>
            <input className="login-input"  type="email" required  id="email" placeholder="Correo"></input>
            <br></br>
            <label className="login-label" >Contraseña:</label>
            <input className="login-input" type="password" id="contraseña" placeholder="Contraseña"></input>
            <br></br>
            <button className="login-button" type="submit"> Iniciar sesión</button>
        </form>    
    )


}

export default Login