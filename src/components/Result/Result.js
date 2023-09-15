import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultadosPopulares: [],
      resultadosProximas: [],
      error: null,
    };
  }

  componentDidMount() {
    const { query } = this.props.match.params;

    // Realiza la solicitud de películas populares
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({ resultadosPopulares: data.results });
        } else {
          this.setState({ error: 'Error al obtener películas populares' });
        }
      })
      .catch((error) => {
        this.setState({ error: 'Error al obtener películas populares' });
      });

    // Realiza la solicitud de próximas películas
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({ resultadosProximas: data.results });
        } else {
          this.setState({ error: 'Error al obtener próximas películas' });
        }
      })
      .catch((error) => {
        this.setState({ error: 'Error al obtener próximas películas' });
      });
  }

  render() {
    const { resultadosPopulares, resultadosProximas, error } = this.state;

    // Combina los resultados de ambas solicitudes
    const resultadosTotales = [...resultadosPopulares, ...resultadosProximas];

    

    return (
      <div className='resultado-busqueda'>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h2>Resultados de la búsqueda</h2>
            <ul>
              {resultadosTotales.map((pelicula) => (
                <Pelicula
                  title={pelicula.title}
                  poster={pelicula.poster_path}
                  description={pelicula.overview}
                  id={pelicula.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Result;