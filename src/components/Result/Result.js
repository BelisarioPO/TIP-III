import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      error: null,
    };
  }

  componentDidMount() {
    const { query } = this.props.match.params;

    // Realiza la solicitud de películas 
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({ resultados: data.results });
        } else {
          this.setState({ error: 'Error al obtener películas' });
        }
      })
    

  }

  render() {
    
    const { resultados } = this.state;
    console.log (resultados)
    return (
      <div className='resultado-busqueda'>
        
          <div>
            <h2>Resultados de la búsqueda</h2>
            <ul>
              {resultados.map((pelicula) => (
                <Pelicula
                  title={pelicula.title}
                  poster={pelicula.poster_path}
                  description={pelicula.overview}
                  id={pelicula.id}
                />
              ))}
            </ul>
          </div>
      </div>
    );
  }
}

export default Result;