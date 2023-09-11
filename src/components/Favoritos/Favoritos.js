import React, { Component } from 'react';

class Favoritos extends Component{
    constructor(){
        super()
        this.state = {
            objFAV:[]
        }
    }
    componentDidMount(){
        let IdFavoritos = [];
        let resultadoId = [];
        let recuperoStorage = JSON.parse(localStorage.getItem("favoritos"))

        if (recuperoStorage !== null){
            //  console.log(recuperoStorage);
            recuperoStorage.forEach(unFav => {
                fetch(`https://api.themoviedb.org/3/movie/${unFav}?api_key=04370869e911ae9d10d76ad2c6d1796e`)
                .then(res => res.json())
                .then(data => {
                    resultadoId.push(data)
                    
                    this.setState({objFAV:resultadoId}, ()=>console.log(this.state))
                })
            })
           
        }
    }

    render(){
     
        return(
          // MAP DE OBJFAV
        )

    }

}
export default Favoritos;