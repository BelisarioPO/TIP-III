import React, { Component } from 'react';

class Unapelicula extends Component {
    constructor(props){
        super(props)
        this.state ={
            favoritos: [],
            id : props.match.params.id,
            pelicula: null,
            BotonFavorito: "Agregar a Favoritos"
        }
    }

    componentDidMount (){
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
        fetch(url)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            this.setState({
            pelicula: data
        })} )
        .catch(e => console.log(e))

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
    render(){

        if (this.state.pelicula == null) {
            return(
            <img className='imgif' src="/terror-eye.gif" alt="Loading..." />
            )

        } else {
            return(
                <div>
                    <img className="detallespelisIMG" src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt=""/>
                    <h1 className="">{this.state.pelicula.original_title}</h1>
                    <p className="">Rating: {this.state.pelicula.popularity}</p>
                    <p className="">Duracion: {this.state.pelicula.runtime} minutos</p>
                    <p className="">Sinopsis: {this.state.pelicula.overview}</p>
                    <ul className="detallespelisGENEROS">
                        {this.state.pelicula.genres.map( genero => <li className="color">{genero.name}</li>)}
                    </ul>
                    <button onClick={() => this.agregarFav(this.state.id)} className="" type="button">{this.state.BotonFavorito}</button>
                </div>
                )
        }
        
    }
}

export default Unapelicula;