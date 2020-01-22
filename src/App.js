import React,{Component} from 'react';
import './App.css';
// import Props from './components/Props'
// import States from './components/States'
// import ConditionalSection from './components/ConditionalSection'
// import Listas from './components/Listas'
// import Objetos from './components/Objetos'
// import Onclick from './components/OnClick'
// import EventosSinteticos from './components/EventosSinteticos'
import EventosSoportados from './components/EventosSoportados'

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Props/> */}
        {/* <States/> */}
        {/* <ConditionalSection/> */}
        {/* <Listas/> */}
        {/* <Objetos/> */}
        {/* <Onclick/> */}
        {/* <EventosSinteticos/> */}
        <EventosSoportados/>
      </div> 
        
    );
  }
}

export default App;
