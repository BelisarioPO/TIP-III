import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';
class Result extends Component {
    constructor(props) {
      super(props);
      this.state = {
        peliculasPopulares: [],
        peliculasProximas: [],
        error: null,
        query: '', // Para almacenar el título de búsqueda
      };
    }
  
    componentDidMount() {
      // Realiza la solicitud de películas populares
      fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1'
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            this.setState({ peliculasPopulares: data.results });
          } else {
            this.setState({ error: 'Error al obtener películas populares' });
          }
        })
        .catch((error) => {
          this.setState({ error: 'Error al obtener películas populares' });
        });
  
      // Realiza la solicitud de próximas películas
      fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1'
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            this.setState({ peliculasProximas: data.results });
          } else {
            this.setState({ error: 'Error al obtener próximas películas' });
          }
        })
        .catch((error) => {
          this.setState({ error: 'Error al obtener próximas películas' });
        });
    }
  
    // Función para manejar el cambio en el campo de búsqueda
    handleSearchChange = (event) => {
      this.setState({ query: event.target.value });
    };
  
    // Función para filtrar las películas basadas en la búsqueda
    filtrarPorTitulo = (movies) => {
      const { query } = this.state;
      return movies.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(query.toLowerCase())
      );
    };
  
    render() {
      const { peliculasPopulares, peliculasProximas, error, query } = this.state;
  
      const peliculasPopularesFiltradas = this.filtrarPorTitulo(
        peliculasPopulares
      );
      const peliculasProximasFiltradas = this.filtrarPorTitulo(
        peliculasProximas
      );
  
      return (
        <div className='resultado-busqueda'>
          <input
            className='buscador'
            type='text'
            placeholder='Buscar películas'
            value={query}
            onChange={this.handleSearchChange}
          />
          {error ? (
            <p>{error}</p>
          ) : (
            <div>
              <h2>Películas Populares</h2>
              <ul>
                {peliculasPopularesFiltradas.map((Obj) => (
                  <Pelicula title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />
                ))}
              </ul>
  
              <h2>Próximas Películas</h2>
              <ul>
                {peliculasProximasFiltradas.map((Obj) => (
                  <Pelicula title={Obj.title} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
  }
    export default Result;