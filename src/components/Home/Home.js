import React, { Component } from 'react';
import "./Home.css"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { datos: '' }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b76faeee5fc3002a166c7f5c929c2c33&language=en-US&page=1')
            .then(response => response.json())

            .then(data => this.setState(
                this.state.datos = data.results
            ))

            .catch (error => console.log(error) );
    }


    render() {
        return (
            <div>
                <h1 classname ="Pelis">Home</h1>
            </div>
        );
    }
}

export default Home;