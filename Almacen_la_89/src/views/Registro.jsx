import "../styles/Registro.css"

export default function registro(){
    return(
        <div>

            <div>
                <img src="" alt="" />
                <p></p>
            </div>

            <div>
                <img src="" alt="" />
                <h1>Crea tu cuenta</h1>
                <p></p>
            </div>

            <form action="">
                <label htmlFor="">Nombres</label>
                <input type="text" placeholder="Ej: Victor Manuel"/>

                <label htmlFor="">Apellidos</label>
                <input type="text" placeholder="Ej: Marin Oquendo"/>

                <label htmlFor="">Género</label>
                <input type="radio" />

                <label htmlFor="">Número de celular</label>
                <input type="text" placeholder="+57" />
                <input type="number" placeholder="3218075054"/>

                <label htmlFor="">Correo electrónico</label>
                <input type="email" required placeholder="usuario@ejemplo.com"/>

                <label htmlFor="">Contraseña</label>
                <input type="password" placeholder="password" />

                <label htmlFor="">Dirección</label>
                <input type="text" placeholder="Carrera 104 # 25 -32" />

                <input type="checkbox" />
                <p>Acepto los <a href="">Términos y Condiciones</a> y la Política de Tramiento de Datos Personales a Almacen la 89</p>

                <button>Registrarme</button>

                <div>
                    <p>¿Ya tienes una cuenta?</p>
                    <a href="">Iniciar Sesión</a>
                </div>
            </form>
        </div>
    )
}