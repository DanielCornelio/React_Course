import React, { Component } from 'react';

class ComponenteA extends Component {
    render() { 
        return (  
            <p>Componente A</p>
        );
    }
}
 
class ComponenteB extends Component {
    render() { 
        return (  
            <p>Componente B</p>
        );
    }
}
function useConditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponenteA/>
    }return <ComponenteB/>
}

class ConditionalSection extends Component {
    constructor(){
        super()
        this.state = {mostrarA:true}
    }
    render() { 
        return (  
            <div>
                <h4>Conditional Section</h4>
                {this.state.mostrarA ? <ComponenteA/> : <ComponenteB/>}
            </div>
        );
    }
}
 
export default ConditionalSection;