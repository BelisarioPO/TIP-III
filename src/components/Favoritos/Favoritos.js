import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';

class Favoritos extends Component {
    constructor() {
        super()
        this.state = {
            objFAV: []
            
        }
    }
    componentDidMount() {
        let resultadoId = [];
        let recuperoStorage = JSON.parse(localStorage.getItem("favoritos"))

        if (recuperoStorage !== null) {
            //  console.log(recuperoStorage);
            recuperoStorage.forEach(unFav => {
                fetch(`https://api.themoviedb.org/3/movie/${unFav}?api_key=04370869e911ae9d10d76ad2c6d1796e`)
                    .then(res => res.json())
                    .then(data => {
                        resultadoId.push(data)

                        this.setState({ objFAV: resultadoId }, () => console.log(this.state))
                    })
            })

        }
    }
    sacarFavorito(id){
    let arrayFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritos');
    if(recuperoStorage !== null){
       arrayFavoritos = JSON.parse(recuperoStorage); 
    }
    if(arrayFavoritos.includes(id)){
        //Si el id está en el array queremos sacar el id.
        arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);}
    }

    render() {

        return (
            <section className='listado-peliculas-favoritas'>
            <React.Fragment>
                <h1>Tus Favoritos</h1>
                {this.state.objFAV.map((Obj, i) => {
                    return (<Pelicula title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />)
                })}


            </React.Fragment>
            </section>
        )

    }

}
export default Favoritos;