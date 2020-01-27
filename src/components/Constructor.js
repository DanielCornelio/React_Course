import React, { Component } from 'react';

class Constructor extends Component {
    //constructor por defecto
    // constructor(...args){
    //     super(...args)
    // }
    constructor(props){
        console.log('constructor ')
        super(props)//este metodo llama a constructor del componente
        this.state = {mensajeInicial: 'Mensaje Inicial'}//inicializamos el state del componente
    }
    handleClick = ()=>{
        this.setState({
            mensajeInicial : 'mensaje Cambiado'
        })
    }
    render() { 
        console.log('render')
        return (  
            <>
                <h4>Ciclo de montaje: Constructor</h4>
                {this.state.mensajeInicial}
                <button onClick = {this.handleClick}>cambiar</button>
            </>
        );
    }
}
 
export default Constructor;