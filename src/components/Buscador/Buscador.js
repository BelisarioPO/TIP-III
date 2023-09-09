import React, { Component } from 'react'

class Buscador extends Component{
	constructor(props){
		super(props)
		this.state = {
			valorInput: '',
			mas: false
		}
	}

	prevenirRefresh(event){
		event.preventDefault()
	}

	actualizarEstado(event){
		this.setState({
			valorInput:event.target.value
		}, ()=> this.props.buscador(this.state.valorInput)) //prop de home peticion API
	}


	render(){
		return(
			<>
			<div className=''>
			<form onSubmit={(event)=> this.prevenirRefresh(event)}>
				<input className='buscadorInput' placeholder=' buscar peliculas' type='text' onChange={(event)=> this.actualizarEstado(event)} value={this.state.valorInput} required/>
			</form>
			</div>
			</>
		)
	}
}

export default Buscador