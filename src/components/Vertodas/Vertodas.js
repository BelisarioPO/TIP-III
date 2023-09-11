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
        if (this.props.match.params.vertodas == "popular"){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=${this.props.masPelisUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results,
                datos: data.results


            }))
            .catch()
        }
        else{
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=${this.props.masPelisUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results,
                datos: data.results


            }))
            .catch()
        }




    }
    traerMas() {
        //Traer la siguiente página de peliculas
        console.log(this.state.masPelisUrl + 1);
        //hacer if que cambie la url (guardar la url en una variable que se llame url)
        let Urlpopular = `https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=${this.state.masPelisUrl + 1}`
        let Urlupcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=${this.state.masPelisUrl + 1}`

        if (this.props.match.params.vertodas == "popular"){
            fetch(Urlpopular)
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
        else{
            fetch(Urlupcoming)
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

    }
    render() {
        console.log(this.props.match.params.vertodas)
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
