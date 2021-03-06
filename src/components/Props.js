import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props){
//   return <h2>{props.title}</h2>
// }

// const Hello = (props)=><h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return(
      <h2>{this.props.title2}</h2>
    )
  }
}
    Hello.defaultProps ={
      title2:"esto es un texto por defecto"
    }

class Text extends Component{
  render(){
    const {
      isActived, 
      arrayOfNumbers, 
      multiply,
      objectWithInfo,
      
    } =  this.props
  
    const seboolean = isActived ? "on" : "off"
    const mappedNumber = arrayOfNumbers.map(multiply)
    return(
      <>
        {this.props.title}
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{seboolean}</p>
        <p>{mappedNumber.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React js</h1>
          <Hello
            
          />
          <Text
            arrayOfNumbers={[2,3,10]}
            objectWithInfo={{key:"first value", key2:"second value"}}
            text="Desde componente texto"
            number = {9}
            multiply={number => number *2}
            isActived = {true}
            title={<h1>esto es un titulo</h1>}
          />
          </header>
      </div>
    );
  }
}

export default App;
