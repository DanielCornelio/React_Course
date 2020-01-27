import React, { Component } from 'react';

class ComponentWillMount extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {mensaje:'mensaje inicial ComponentWillMount'}
    }
    componentWillMount(){
        console.log('componentWillMount')
        this.setState({
            mensaje: 'mensaje modificado'
        })
    }
    render() { 
        console.log('render')
        return (  
            <>
                <h4>Component Will Mount</h4>
                <p>{this.state.mensaje}</p>
            </>
        );
    }
}
 
export default ComponentWillMount;