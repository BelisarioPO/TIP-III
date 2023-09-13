import React, { Component } from 'react';

class Unapelicula extends Component {
    constructor(props){
        super(props)
        this.state ={
            id : props.match.params.id,
            pelicula: ''
        }
    }

    componentDidMount (){
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=89b3abec13d5b342a0a8c66f4e9a5020&language=en-US`
        fetch(url)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            this.setState({
            pelicula: data.results
        })} )
        .catch(e => console.log(e))
    }
    render(){
        return(
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${this.state}`} alt=""/>
                <h1>El id de la pelicula es : {this.state.id} </h1>
            </div>
            )
    }
}

export default Unapelicula;