import React from "react";
function Unapelicula(props) {
    const id = props.match.params.id
    return(
        <div>
            <h1>El id de la pelicula es : {id}</h1>
        </div>
        
        
        
        )
}
export default Unapelicula;