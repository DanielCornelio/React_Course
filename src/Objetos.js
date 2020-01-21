import React, { Component } from 'react';
import cars from './data/cars.json'
import usuarios from './data/usuarios.json'
class Objetos extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <h4>Trabajando con Objetos</h4>
                <ul>
                    {
                        cars.map(car => {
                            return (
                                <li key={car.id}>
                                    <p><strong>Nombre: </strong>{car.name}</p>
                                    <p><strong>Marca: </strong>{car.company}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        usuarios.map(user =>{
                            return(
                                <li key={user.id}>
                                    <p><strong>Nombre:</strong> {user.first_name} {user.last_name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Ip Address</strong> {user.ip_address}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}
 
export default Objetos;