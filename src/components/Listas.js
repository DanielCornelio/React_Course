import React, { Component } from 'react';

class Listas extends Component {
    state = {  }
    render() { 
        const numbers = [1, 1, 3, 5]
        const array = ["inicio", "acerca de", "blog", "contacto"]
        return (  
            <>
                <h4>Trabajando con listas</h4>
                {numbers.map((number, index)=>{
                    return <p key={index}>Soy el numero {number}</p>
                })}
                {array.map((array, index)=>{
                    return <span key="index">{array}</span>

                })}
            </>
        );
    }
}
 
export default Listas;