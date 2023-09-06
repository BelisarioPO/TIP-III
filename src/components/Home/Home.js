import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { datos: '' }
        this.state = {forms:''};
    } 
    //FORMS REACT
    evitarSubmit(event){
        event.preventDefault();

    }
    controlarCambios(event){
        this.setState({forms: event.target.value});
        

    }
     //CIERRA FORMS REACT

     componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(error => console.log(error));
    }

    render() {
    return (
        <section className='listado-peliculas-favoritas'>
            <form onSubmit={(event) => this.evitarSubmit(event)} className=''>
                <label> FORMS</label>
                <input type='text' onChange={(event) => this.controlarCambios(event)} value={this.state.forms} className='buscador' />
                <input type='submit' value="Submit" className='' />

            </form>

            {this.state.datos ? (
                this.state.datos.map((Obj, i) => {
                    console.log(this.state);
                    if (i < 5) {
                        return (<Pelicula title={ Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />)
                    }
                    else { return (null) }
                })
            ) : (
                <p>Loading...</p> // Muestra un mensaje de carga mientras se obtienen los datos.
            )}
        </section>
    )
}
}

export default Home;