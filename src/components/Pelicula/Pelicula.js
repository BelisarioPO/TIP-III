import React, { Component } from 'react';

class Pelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: [],
            BotonDesc: "Mostrar descrpicion",
            BotonFavorito: "Agregar a favoritos",
        }

    }

    componentDidMount() {
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem("favoritos")
        if (recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);
            if(arrayFavoritos.includes(this.props.id)){
                this.setState({
                    BotonFavorito : "Quitar de favoritos"
                })
            }
        }
    }
    agregarFav(){
        //Agregar id adentro de array de favoritos y colocar ese array en localstorage
        let arrayFavoritos = []
        arrayFavoritos.push(id)
        //subirlo a local storage y stringifearlo
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem("favoritos" , arrayFavoritosAString)

        this.setState({
            BotonFavorito : "Quitar de favoritos"
        }
        )
    }


    render() {
        console.log(this.props.poster)
        return(
            <article className="">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.title} className='img-index' />
        
        <button onClick={() => this.mostrarDetalles()} className="" type="button">{this.state.BotonDesc}</button>
        <button onClick={() => this.agregarFav(this.props.id)} className="" type="button">{this.state.BotonFavorito}</button>
        <p className="Pelis">{this.props.title}</p>
        <p class={this.state.ocultarInfo ? 'Ocultar' : 'Ver Mas'}>{this.props.description}</p>
    </article>            
    )
    }
}

export default Pelicula;