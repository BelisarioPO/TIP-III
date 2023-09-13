import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Pelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: [],
            BotonDesc: "Mostrar descrpicion",
            BotonFavorito: "Agregar a Favoritos",
        }
    }
    mostrarDesc() {
        const descripcionVisible = this.state.descripcionVisible;
    
        this.setState({
            descripcionVisible: !descripcionVisible,
            BotonDesc: descripcionVisible ? "Mostrar descripción" : "Ocultar descripción"
            //,descripcionVisible: !descripcionVisible, se está actualiza el valor de descripcionVisible lo que significa que se cambiará de true a false o viceversa.
            //Si descripcionVisible es verdadero, entonces BotonDesc será "Mostrar descripción", de lo contrario será "Ocultar descripción".
        });
    }

    componentDidMount() {
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem("favoritos")
        if (recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);
            if(arrayFavoritos.includes(this.props.id)){
                this.setState({
                    BotonFavorito : "Quitar de Favoritos"
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
            BotonFavorito: "Agregar a Favoritos"
        })


    } else {
        arrayFavoritos.push(id);
        this.setState({
            BotonFavorito: "Quitar de Favoritos"
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
        <Link to={`/Pelicula/id/${this.props.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.title} className='img-index' />
        </Link>
        
        <button onClick={() => this.mostrarDesc()} className="" type="button">{this.state.BotonDesc}</button>
        <button onClick={() => this.agregarFav(this.props.id)} className="" type="button">{this.state.BotonFavorito}</button>
        <p className="Pelis">{this.props.title}</p>
        <p className={this.state.descripcionVisible ? 'VerMas' : 'Ocultar'}>{this.props.description}</p> 
    </article>            
    )
    }//Si this.state.descripcionVisible es verdadero, se asigna la clase 'VerMas'
    //Si this.state.descripcionVisible es falso, se asigna la clase 'Ocultar'.
}

export default Pelicula;