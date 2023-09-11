import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';
class Vertodas extends Component {
    constructor() {
        super()
        this.state = {
            peliculas: [], //aparecer pelis
            masPelisUrl: 1,
            datos: ''
        }
    }
    componentDidMount() {
        //BUscamos datos
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=${this.props.masPelisUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results,
                datos: data.results


            }))
            .catch()
    }
    traerMas() {
        //Traer la siguiente página de personajes
        console.log(this.state.masPelisUrl + 1);
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=${this.state.masPelisUrl + 1}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    masPelisUrl: this.state.masPelisUrl + 1

                })
            })
            .catch()
    }
    render() {
        console.log(this.state.peliculas);
        return (
            <section className='listado-peliculas-favoritas'>
                <React.Fragment>
                    <button onClick={() => this.traerMas()}> Traer más </button>
                    {this.state.peliculas ? (
                        <>
                            {this.state.peliculas.map((Obj, i) => {
                                return (<Pelicula title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />)
                            })}
                        </>
                    ) : (
                        <p>Loading...</p> // Muestra un mensaje de carga mientras se obtienen los datos.
                    )}


                </React.Fragment>
            </section>
        )
    }
}
export default Vertodas;
