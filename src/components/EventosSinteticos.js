import React, { Component } from 'react';

class EventosSinteticos extends Component {
    
    alerta(e){
        console.log(e)
        alert('Hi there!')
    }
    render() { 
        return (  
            <>
                <h4>Eventos Sinteticos</h4>
                <button onClick ={this.alerta}>Hi there!</button>
            </>
        );
    }
}
 
export default EventosSinteticos;