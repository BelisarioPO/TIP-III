import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="header">
            <div className="contenedorPadreHeader">

                <ul className="ul-nav">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/Vertodas">Ver Todas</Link></li>

                    <li><Link to="/Favoritos">Favotitos</Link></li>
                </ul>
                <h1 className="BingleTon"> BingleTon+Reloaded</h1>
            </div>
        </header>

    )
}
export default Header;