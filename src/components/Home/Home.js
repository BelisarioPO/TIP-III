import React, { Component } from 'react';

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
            <section className=''>

                {
                    this.state.datos.map((Obj, i)=>{
                        console.log(this.state);
                        if (i<5) {
                            return(<Card title={ this.props.espeli ? Obj.title : Obj.name} poster={Obj.poster_path} description={Obj.overview} id={Obj.id}/>)
                        }
                        else{return (null)}
                    })
                }

            </section>
            
        )}
}

export default Home;