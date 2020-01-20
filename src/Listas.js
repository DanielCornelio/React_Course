import React, { Component } from 'react';

class Listas extends Component {
    state = {  }
    render() { 
        const numbers = [1, 1, 3, 5]
        return (  
            <>
                <h4>Trabajando con listas</h4>
                {numbers.map((number, index)=>{
                    return <p key={index}>Soy el numero {number}</p>
                })}
            </>
        );
    }
}
 
export default Listas;