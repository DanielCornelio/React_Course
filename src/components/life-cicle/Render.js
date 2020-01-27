import React, { Component } from 'react';

const HelloRender = (props)=><h1>Hola Render!</h1>

class Render extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state= {mensaje: 'mensaje Inicial'}
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    render(){
        console.log('render')
        return [
            <h1 key='A'>Primer Elemento</h1>,
            <HelloRender key='B'/>,
            <HelloRender key='C'/>,
            <h3 key='D'>Cuarto Elemento</h3>
        ]
    }
    
}
 
export default Render;