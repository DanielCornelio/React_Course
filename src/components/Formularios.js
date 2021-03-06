import React, { Component } from 'react';

class Formularios extends Component {
    state = {  }
    handleClick= (e)=> {
        e.preventDefault()
        const name = this.inputName.value
        const email = this.inputTwitter.value
        console.log({name,email})
    }
    render() {     
        return (  
            <>
                <h4>Trabajando con Formularios</h4>
                <form>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input
                            id ='name'
                            name = 'userName'
                            placeholder = 'Introduce el nombre'
                            ref={inputElement => this.inputName = inputElement}
                        />
                    </p>
                    <p>
                        <label htmlFor="twitter">Twitter: </label>
                        <input
                            id ='twitter'
                            name = 'twitterAccount'
                            placeholder = 'Introduce tu Twitter'
                            ref={inputElement => this.inputTwitter = inputElement}
                        />
                    </p>
                    <button onClick={this.handleClick}>Enviar</button>

                </form>
            </>
        );
    }
}
 

export default Formularios;