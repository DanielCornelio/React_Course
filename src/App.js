import React,{Component} from 'react';
import './App.css';
// import Props from './Props'
// import States from './States'
import ConditionalSection from './ConditionalSection'


class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Props/> */}
        {/* <States/> */}
        <ConditionalSection/>
      </div>
        
    );
  }
}

export default App;
