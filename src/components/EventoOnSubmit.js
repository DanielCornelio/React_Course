import React, { Component } from 'react';

class EventoOnSubmit extends Component {
    state = {  }
    handleSubmit= (e)=> {
        e.preventDefault()
        const name = this.inputName.value
        const email = this.inputTwitter.value
        console.log({name,email})
    }
    handleChange = (e)=>{
        console.log('handeleChange')
        console.log(e.target.checked)
    }
    render() {     
        return (  
            <>
                <h4>Trabajando con Formularios</h4>
                <form onSubmit={this.handleSubmit}>
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
                    <p>
                        <label>
                            <input onChange={this.handleChange} type="checkbox"/>
                            Accepted terms
                        </label>
                    </p>
                    <button>Enviar</button>

                </form>
            </>
        );
    }
}
 

export default EventoOnSubmit;