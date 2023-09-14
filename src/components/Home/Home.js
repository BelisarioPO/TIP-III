import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';
import Buscador from "../Buscador/Buscador";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: '',
            forms: '',
            resultados: [],
            Upcomingdatos: false,
            Populardatos: false
        };

    }
    
    buscador(peli) {
        if (peli !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=04370869e911ae9d10d76ad2c6d1796e&query=${peli}`)
                .then(resp => resp.json())
                .then(data => this.setState({
                    resultados: data.results
                }))
                .catch(err => console.log(err))
        } else {
            this.setState({
                resultados: []
            })
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState({ 
                Populardatos: data.results}))
            .catch(error => console.log(error));
            fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState({ Upcomingdatos: data.results }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section className='listado-peliculas-favoritas'>

                <Buscador buscador={(peli) => this.buscador(peli)} />
                

                {this.state.Populardatos ? (
                    <>
                        {this.state.Populardatos.map((Obj, i) => {
                            
                            if (i < 5) {
                                return (<Pelicula title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />)
                            }
                            else { return (null) }
                        })}
                        <button><Link to="/Vertodas/popular">Vertodas</Link></button>
                    </>
                ) : (
                    <p>Loading...</p> // Muestra un mensaje de carga mientras se obtienen los datos.
                )}
                {this.state.Upcomingdatos ? (
                    <>
                        {this.state.Upcomingdatos.map((Obj, i) => {
                            
                            if (i < 5) {
                                return (<Pelicula title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />)
                            }
                            else { return (null) }
                        })}
                        <button><Link to="/Vertodas/upcoming">Vertodas</Link></button>
                    </>
                ) : (
                    <img  className='imgif' src="/terror-eye.gif" alt="Loading..." /> // Muestra un mensaje de carga mientras se obtienen los datos.
                )}
            </section>
        )
    }
}

export default Home;