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
    agregarFav(id){
    // Agregar un id dentro de array y colocar ese array en localStorage
    let arrayFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritos');
    
    if(recuperoStorage !== null){
       arrayFavoritos = JSON.parse(recuperoStorage);   
    }
       
    if(arrayFavoritos.includes(id)){
        //Si el id está en el array queremos sacar el id.
        arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

        this.setState({
            textoBoton: "Agregar a Favoritos"
        })


    } else {
        arrayFavoritos.push(id);
        this.setState({
            textoBoton: "Quitar de favoritos"
        })
    }

    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)

    console.log(localStorage)
    }


    render() {
        return(
            <article className="itemsIndex">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.title} className='img-index' />
        
        <button onClick={() => this.mostrarDetalles()} className="" type="button">{this.state.BotonDesc}</button>
        <button onClick={() => this.agregarFav(this.props.id)} className="" type="button">{this.state.BotonFavorito}</button>
        <p className="Pelis">{this.props.title}</p>
        <p class={this.state.BotonDesc ? 'Ocultar' : 'Ver Mas'}>{this.props.description}</p>
    </article>            
    )
    }
}

export default Pelicula;