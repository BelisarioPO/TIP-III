import React from "react";

function Favoritos(props) {
    let Storage = localStorage.getItem('favoritos')
    let recuperoStorage = JSON.parse(Storage)
    console.log(recuperoStorage);
    return(
        <div>
            <h1>cacona</h1>
            <section className="listado-peliculas-favoritas">

            </section>
        </div>
        
        
        
        )
}
export default Favoritos;