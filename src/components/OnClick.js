import React, { Component } from 'react';

class OnClick extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <h4>Eventos</h4>
                <button onClick ={()=>alert('Hi there!')}>Hi there!</button>
            </>
        );
    }
}
 
export default OnClick;