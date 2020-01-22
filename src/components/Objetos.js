import React, { Component } from 'react';
import cars from '../data/cars.json'
import usuarios from '../data/usuarios.json'

class UserItem extends Component{
    render(){
        const { user } = this.props
        return(
            <li style={li}>
                <p><strong>Nombre:</strong> {user.first_name} {user.last_name}</p>
                <p><strong>Sexo:</strong> {user.gender === "Male" ? "masculino" : "Femenino"}</p>
                <p><strong>Email:</strong> {user.email }</p>
                <p><strong>Ip Address</strong> {user.ip_address}</p>
                
            </li>
        )
    }
    
}

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
                <ul style={ul}>
                    {
                        usuarios.map(user =>{
                            return <UserItem key={user.id} user={user}/>
                        })
                    }
                </ul>
            </>
        );
    }
}
        const ul={
            display:"flex",
            flexWrap:"wrap",
            listStyle:"none"
            
        }
        const li ={
            padding:10,
            width:"20%",
            border:"1px solid",
            
        }

export default Objetos;
