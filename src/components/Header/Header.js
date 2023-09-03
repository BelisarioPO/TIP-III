import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
    return(
        <nav>
        <h1>ALGO</h1>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <b>.</b>
            <li><Link to="/Vertodas">Ver Todas</Link></li>
            <b>.</b>

        </ul>
    </nav>


     )
}
export default Header;