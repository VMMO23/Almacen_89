import "../styles/R_Menu.css"

export function R_Menu ({ name, descripcion, imagen }){

    return(
        <article className="R-Menu">
            <header className="R-Menu-header">
                <img className="R-Menu-img" src={imagen} alt="" />
                <div className="R-Menu-info">
                    {name}
                    <p className="R-Menu-descripcion">{descripcion}</p>
                </div>
            </header>

            <aside>
                <button className="R-Menu-button">
                    Entrar
                </button>
            </aside>
        </article>
    )
}

export default R_Menu